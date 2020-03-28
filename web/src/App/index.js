import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Routes from '~/routes';
import { TeamCreators } from '~/store/ducks/teams';

import Container from './Container';
import Modal from '~/components/Modal';
import CreateTeamModal from '~/components/Modal/CreateTeam';
import CreateProjectModal from '~/components/Modal/CreateProject';

export function App() {
    const dispatch = useDispatch();
    const { createTeamModal } = useSelector(state => state.teams);
    const { createProjectModal } = useSelector(state => state.projects);

    useEffect(() => {
        dispatch(TeamCreators.teamsRequest());
    }, [dispatch]);

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
        </>
    );
}

export default Container(App);
