import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import {
    Container,
    Content,
    InputWrapper,
    List,
    Team,
    AddButton,
    Title,
} from './styles';
import { TeamCreators } from '~/store/ducks/teams';

export default function TeamSwitcherMenu({ active }) {
    const { data: teams, active: activeTeam } = useSelector(
        state => state.teams
    );
    const dispatch = useDispatch();

    function selectTeam(team) {
        dispatch(TeamCreators.selectTeam(team));
    }

    function openCreateTeamModal() {
        dispatch(TeamCreators.openCreateTeamModal());
    }

    return (
        <Container active={active}>
            <Content>
                <InputWrapper>
                    <FaSearch />
                    <input type="text" name="team" placeholder="Search.." />
                </InputWrapper>

                <div className="row">
                    <Title>Teams</Title>
                    <AddButton
                        title="Add a team"
                        backgroundColor="purple"
                        color="white"
                        onClick={openCreateTeamModal}
                    >
                        +
                    </AddButton>
                </div>

                <List className="currents">
                    {teams.map(team => (
                        <Team
                            key={team.id}
                            color="grayLight"
                            fontSize="2xs"
                            /* When the user first access the platform, he won't have a active team */
                            active={activeTeam && activeTeam.name === team.name}
                            onClick={() => selectTeam(team)}
                        >
                            {team.name}
                        </Team>
                    ))}
                </List>
            </Content>
        </Container>
    );
}

TeamSwitcherMenu.defaultProps = {
    active: false,
};

TeamSwitcherMenu.propTypes = {
    active: PropTypes.bool,
};
