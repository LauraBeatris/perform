import React, { useState, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';
import {
    Container,
    Icon,
    Badge,
    Content,
    NotificationList,
    Item,
} from './styles';

export default function Notification() {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }

    useEffect(() => {
        function handleClose(event) {
            if (!event.target.closest('#notification-container')) {
                setActive(false);
            }
        }

        document.addEventListener('click', handleClose);

        return () => document.removeEventListener('click', handleClose);
    }, []);

    return (
        <Container id="notification-container">
            <button type="button" onClick={handleClick}>
                <Icon />
                <Badge>5</Badge>
            </button>

            <Content active={active}>
                <div className="arrow" />
                <header>
                    <strong>Notifications</strong>
                </header>
                <NotificationList>
                    <Item>
                        <span>
                            You were invited to the{' '}
                            <strong>Primerio Time</strong> by{' '}
                            <strong>Laura Beatris</strong>
                        </span>
                        <button type="button">
                            <FiCheck />
                            <small> join </small>
                        </button>{' '}
                    </Item>
                    <Item>
                        <span>
                            You were invited to the{' '}
                            <strong>Primerio Time</strong> by{' '}
                            <strong>Laura Beatris</strong>
                        </span>
                        <button type="button">
                            <FiCheck />
                            <small> join </small>
                        </button>
                    </Item>
                    <Item>
                        <span>
                            You were invited to the{' '}
                            <strong>Primerio Time</strong> by{' '}
                            <strong>Laura Beatris</strong>
                        </span>
                        <button type="button">
                            <FiCheck />
                            <small> join </small>
                        </button>{' '}
                    </Item>
                    <Item>
                        <span>
                            You were invited to the{' '}
                            <strong>Primerio Time</strong> by{' '}
                            <strong>Laura Beatris</strong>
                        </span>
                    </Item>
                </NotificationList>
                <footer>
                    <button type="button">Load More</button>
                </footer>
            </Content>
        </Container>
    );
}
