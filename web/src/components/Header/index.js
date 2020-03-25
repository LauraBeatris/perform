import React from 'react';
import { withTheme } from 'styled-components';

import {
    Container,
    NotificationWrapper,
    Notification,
    Badge,
    ProfileButton,
} from './styles';
import Dots from '~/assets/dots.png';

export function Header() {
    return (
        <Container>
            <nav>
                <NotificationWrapper>
                    <Notification />
                    <Badge>5</Badge>
                </NotificationWrapper>

                <ProfileButton>
                    <img
                        id="user"
                        src="https://i.pinimg.com/originals/a8/91/12/a8911210d7ecccfc026e69cb8798d231.jpg"
                        alt="User Profile"
                        aria-hidden="true"
                    />
                    <img id="dots" alt="Button Dots" src={Dots} />
                </ProfileButton>
            </nav>
        </Container>
    );
}

export default withTheme(Header);
