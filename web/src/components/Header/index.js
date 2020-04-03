import React, { useEffect } from 'react';
import { withTheme } from 'styled-components';
import ws from '~/services/websocket';

import Notification from '~/components/Notification';
import Profile from '~/components/Profile';
import { store } from '~/store';
import { Container } from './styles';

export function Header() {
    useEffect(() => {
        const userId = store.getState().user.id;
        const userNotifications = ws.subscribe(
            `notifications:teams:user:${userId}`
        );
        userNotifications.on('new', notification => {
            console.tron.log(JSON.stringify(notification));
        });

        return () => ws.close();
    }, []);

    return (
        <Container>
            <nav>
                <Notification />
                <Profile />
            </nav>
        </Container>
    );
}

export default withTheme(Header);
