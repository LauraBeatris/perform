import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Routes from '~/routes';
import { TeamCreators } from '~/store/ducks/teams';

import Container from './Container';
import Modal from '~/components/Modal';
import CreateTeamModal from '~/components/Modal/CreateTeam';

export function App() {
    const dispatch = useDispatch();
    const { createTeamModal } = useSelector(state => state.teams);

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
        </>
    );
}

export default Container(App);
