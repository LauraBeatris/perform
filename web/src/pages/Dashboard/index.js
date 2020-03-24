import React, { useEffect } from 'react';
import api from '~/services/api'

import { Container } from './styles';

export default function Dashboard() {
    useEffect(() => {
        api.getTeams()
    }, [])

    return <Container />;
}
