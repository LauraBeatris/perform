import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import Container from '~/styles/components/Container';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import { Content, Title, Text } from './styles';

export default function Welcome() {
    return (
        <Container type="withDecoration" backgroundColor="purple" padding="2">
            <Content>
                <Logo marginBottom="3" />
                <Title
                    color="white"
                    fontSize="lg"
                    width={['100%', 321]}
                    marginBottom="3"
                >
                    Track Your Work & Improve Your Performance
                </Title>
                <Text
                    color="white"
                    fontSize="md"
                    width={['100%', 321]}
                    marginBottom="4"
                >
                    A agile structure to organize your team and projects
                </Text>
                <Link style={{ textDecoration: 'none' }} to="/signin">
                    <Button
                        backgroundColor="white"
                        color="purple"
                        fontSize="sm"
                        icon={<FaArrowRight />}
                    >
                        Get Started
                    </Button>
                </Link>
            </Content>
        </Container>
    );
}
