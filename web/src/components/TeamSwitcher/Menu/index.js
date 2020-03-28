import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';

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

export default function TeamSwitcherMenu() {
    const dispatch = useDispatch();
    const { data: teams, active: activeTeam, teamSwitcher } = useSelector(
        state => state.teams
    );

    function selectTeam(team) {
        dispatch(TeamCreators.selectTeam(team));
    }

    function openCreateTeamModal() {
        dispatch(TeamCreators.openCreateTeamModal());
    }

    useEffect(() => {
        function closeTeamSwitcher(event) {
            if (
                !event.target.closest('#team-switcher-content') &&
                !event.target.closest('#menu-container') &&
                !event.target.closest('#modal-overlay')
            ) {
                dispatch(TeamCreators.closeTeamSwitcher());
            }
        }

        if (teamSwitcher) document.addEventListener('click', closeTeamSwitcher);

        return () => document.removeEventListener('click', closeTeamSwitcher);
    }, [dispatch, teamSwitcher]);

    return (
        <Container active={teamSwitcher}>
            <Content id="team-switcher-content">
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
