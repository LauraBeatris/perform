import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Routes from '~/routes';
import { TeamCreators } from '~/store/ducks/teams';

import Container from './Container';
import Modal from '~/components/Modal';
import CreateTeamModal from '~/components/Modal/CreateTeam';
import CreateProjectModal from '~/components/Modal/CreateProject';
import MembersModal from '~/components/Modal/Members';

export function App() {
    const dispatch = useDispatch();
    const signedIn = useSelector(state => state.user.signedIn)
    const createTeamModal = useSelector(state => state.teams.createTeamModal);
    const createProjectModal = useSelector(state => state.projects.createProjectModal);
    const membersModal  = useSelector(state => state.members.membersModal);

    useEffect(() => {
       if (signedIn) dispatch(TeamCreators.teamsRequest());

    // eslint-disable-next-line
    }, []);

    return (
        <>
            <Routes />
            {createTeamModal && (
                <Modal>
                    <CreateTeamModal />
                </Modal>
            )}
            {createProjectModal && (
                <Modal>
                    <CreateProjectModal />
                </Modal>
            )}
            {membersModal && (
                <Modal>
                    <MembersModal />
                </Modal>
            )}
        </>
    );
}

export default Container(App);
