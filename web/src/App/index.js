import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Routes from '~/routes';
import { TeamCreators } from '~/store/ducks/teams';

import Container from './Container';
import Modal from '~/components/Modal/CreateTeam';

export function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TeamCreators.teamsRequest());
    }, [dispatch]);

    return (
        <>
            <Modal minWidth={['85vw', '90vw', '50vw']} minHeight="90vh" />
            <Routes />
        </>
    );
}

export default Container(App);
