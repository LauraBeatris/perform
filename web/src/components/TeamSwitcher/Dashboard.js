import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Box, TeamBox, getColor, Message } from './styles';
import { TeamCreators } from '~/store/ducks/teams';

export default function TeamBoxSwitcherDashboard() {
    const dispatch = useDispatch();
    const teams = useSelector(state => state.teams.data);

    useEffect(() => {
        dispatch(TeamCreators.teamsRequest());
    }, []);

    return (
        <Container>
            <Message marginBottom="3" marginTop={['4', '5']}>
                Select a Team
            </Message>
            <Box columns={teams.length}>
                {teams.map(team => {
                    const color = getColor();
                    return (
                        <TeamBox color={color} key={team.id}>
                            <span>{team.name.slice(0, 2)}</span>
                        </TeamBox>
                    );
                })}
            </Box>
        </Container>
    );
}
