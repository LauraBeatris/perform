import React from 'react';
import { useSelector } from 'react-redux';

import Routes from '~/routes';

import Container from './Container';
import Modal from '~/components/Modal';
import CreateTeamModal from '~/components/Modal/CreateTeam';
import CreateProjectModal from '~/components/Modal/CreateProject';
import MembersModal from '~/components/Modal/Members';

import '~/services/websocket';

export function App() {
    const createTeamModal = useSelector(state => state.teams.createTeamModal);
    const createProjectModal = useSelector(
        state => state.projects.createProjectModal
    );
    const membersModal = useSelector(state => state.members.membersModal);

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
