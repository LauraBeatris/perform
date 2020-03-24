import React, { useEffect } from 'react';
import api from '~/services/api'

import Layout from '~/layouts/Main'

export default function Dashboard() {
    useEffect(() => {
        api.getTeams()
    }, [])

    return <Layout />;
}
