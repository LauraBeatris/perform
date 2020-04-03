import React from 'react';
import { withTheme } from 'styled-components';

import Notification from '~/components/Notification';
import Profile from '~/components/Profile';
import { Container } from './styles';

export function Header() {
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
