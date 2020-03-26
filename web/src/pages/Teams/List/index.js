import React from 'react';

import { Header, Message, Container } from './styles';

export default function TeamsList() {
    return (
        <Container>
            <Header>
                <Message>
                    List
                    <br />
                    <span>of teams</span>
                </Message>
            </Header>
        </Container>
    );
}
