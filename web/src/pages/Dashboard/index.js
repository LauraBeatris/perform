import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container, Message } from './styles';
import api from '~/services/api';
import TeamSwitcherDashboard from '~/components/TeamSwitcher/Box';

export default function DashboardPage() {
    const { name } = useSelector(state => state.user);

    useEffect(() => {
        api.getTeams();
    }, []);

    return (
        <Container>
            <Message>
                Hi
                <br />
                <span>
                    {name}{' '}
                    <span id="emoji" role="img" aria-label="Shake Hands">
                        👋
                    </span>
                </span>
            </Message>
            <TeamSwitcherDashboard marginTop="5" />
        </Container>
    );
}
