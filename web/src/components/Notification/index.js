import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import ReactHTMLParser from 'react-html-parser';
import { FiCheck, FiTrash } from 'react-icons/fi';

import {
    Container,
    Icon,
    Badge,
    Content,
    NotificationList,
    Item,
} from './styles';
import api from '~/services/api';
import ws from '~/services/websocket';
import addToast from '~/lib/addToast';
import { store } from '~/store';
import { TeamCreators } from '~/store/ducks/teams';

export default function Notification() {
    const [page, setPage] = useState(1);
    const [active, setActive] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        function handleClose(event) {
            if (!event.target.closest('#notification-container')) {
                setActive(false);
            }
        }

        document.addEventListener('click', handleClose);

        return () => document.removeEventListener('click', handleClose);
    }, []);

    useEffect(() => {
        async function fetchNotifications() {
            try {
                const response = await api.getNotifications();
                setNotifications(response.data);
                setPage(response.page);
            } catch (err) {
                addToast('Error trying to list the available notifications', {
                    appearance: 'error',
                    autoDismiss: true,
                    pauseOnHover: false,
                });
            }
        }

        const userId = store.getState().user.id;
        const userNotifications = ws.subscribe(
            `notifications:teams:user:${userId}`
        );

        userNotifications.on('new', () => {
            fetchNotifications(); // Fetch the notifications on every event
        });

        fetchNotifications(); // Fetch the notifications on component mount

        return () => ws && ws.close();
    }, []);

    function handleClick() {
        setActive(!active);
    }

    async function acceptInvite(inviteId) {
        await api.updateInvite(inviteId, { confirmed: true });
        setNotifications(oldNotifications =>
            oldNotifications.filter(
                notification => notification.invite_id !== inviteId
            )
        );

        addToast('The invite to join the team was successfully accepted 🚀', {
            appearance: 'success',
            autoDismiss: true,
            pauseOnHover: false,
        });

        dispatch(TeamCreators.teamsRequest());
    }

    async function viewNotifications() {
        const notificationIds = notifications.map(
            notification => notification.id
        );
        const viewedNotifications = await api.updateNotifications(
            notificationIds,
            { viewed: true }
        );

        const updatedNotifications = notifications.map(notification => {
            const found = viewedNotifications.find(
                viewedNotification => viewedNotification.id === notification.id
            );

            if (found) notification = Object.assign(notification, found);
            return notification;
        });
        setNotifications(updatedNotifications);
    }

    async function loadMore() {
        const newPage = page + 1;
        const response = await api.getNotifications(newPage);
        if (response.data.length > 0) {
            setPage(response.page);
            setNotifications([...notifications, ...response.data]);
        }
    }

    async function handleDelete(id) {
        await api.deleteNotification(id);
        setNotifications(oldNotifications =>
            oldNotifications.filter(notification => notification.id !== id)
        );
    }

    const total = useMemo(
        () => notifications.filter(notification => !notification.viewed).length,
        [notifications]
    );

    return (
        <Container id="notification-container">
            <button type="button" onClick={handleClick}>
                <Icon />
                <Badge>{total}</Badge>
            </button>

            <Content active={active}>
                <div className="arrow" />
                <header>
                    <strong>Notifications</strong>

                    <button type="button" onClick={viewNotifications}>
                        Mark all as viewed
                    </button>
                </header>
                <NotificationList>
                    {notifications.length > 0 ? (
                        notifications.map(notification => (
                            <Item key={notification.id}>
                                {ReactHTMLParser(notification.description)}
                                {notification.invite_id && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            acceptInvite(notification.invite_id)
                                        }
                                    >
                                        <FiCheck />
                                        <small> join </small>
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleDelete(notification.id)
                                    }
                                >
                                    <FiTrash />
                                    <small> delete </small>
                                </button>
                            </Item>
                        ))
                    ) : (
                        <Item id="empty-message">
                            <span>
                                There&apos;s nothing here{' '}
                                <span role="img" aria-label="Sad Emoji">
                                    😞
                                </span>
                            </span>
                        </Item>
                    )}
                </NotificationList>
                <footer>
                    <button type="button" onClick={loadMore}>
                        Load More
                    </button>
                </footer>
            </Content>
        </Container>
    );
}
