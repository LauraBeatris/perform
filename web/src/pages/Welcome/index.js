import React from 'react';

import Logo from '~/components/Logo';
import Button from '~/components/Button';
import { Container, Content, Title, Text } from './styles';

export default function Welcome() {
    return (
        <Container backgroundColor="purple">
            <Content>
                <Logo />
                <Title color="white" fontSize="lg" width={['100%', 321]}>
                    Track Your Work & Improve Your Performance
                </Title>
                <Text color="white" fontSize="md" width={['100%', 321]}>
                    A agile structure to organize your team and projects
                </Text>
                <Button backgroundColor="white">Get Started</Button>
            </Content>
        </Container>
    );
}
