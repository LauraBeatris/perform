import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container, Message } from './styles';
import api from '~/services/api';

export default function Dashboard() {
    const { name } = useSelector(state => state.user);
    useEffect(() => {
        api.getTeams();
    }, []);

    return (
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
    );
}
