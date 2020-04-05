import React from 'react';
import Helmet from 'react-helmet';

import Board from '~/components/Board';
import { Container, Header } from './styles';

export default function Project() {
    return (
        <Container>
            <Helmet>
                <title> Perform | Project </title>
            </Helmet>
            <Header />
            <Board />
        </Container>
    );
}
