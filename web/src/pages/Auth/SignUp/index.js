import React from 'react';
import Helmet from 'react-helmet';
import { FaArrowRight } from 'react-icons/fa';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { UserCreators } from '~/store/ducks/user';
import { Content, Title, Links, LinkItem } from '../styles';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Container from '~/styles/components/Container';

export default function SignUp() {
    const dispatch = useDispatch()

    function handleSubmit(data) {
        const { email, name, password, password_confirmation } = data;
        dispatch(UserCreators.signUpRequest(email, name, password, password_confirmation));
    }

    return (
        <>
            <Helmet>
                <title>Perform | Sign up </title>
            </Helmet>
            <Container
                type="withDecoration"
                backgroundColor="purple"
                padding="2"
            >
                <Content>
                    <Logo marginBottom="3" />
                    <Title color="white" marginBottom="3">
                        Create your account
                    </Title>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            backgroundColor="white"
                            placeholder="Your best email"
                            height={40}
                            marginBottom="3"
                            padding="3"
                            fontSize="2xs"
                            color="dark-secondary"
                        />
                        <Input
                            label="Name"
                            id="name"
                            name="name"
                            type="text"
                            backgroundColor="white"
                            placeholder="Your name"
                            height={40}
                            marginBottom="3"
                            padding="3"
                            fontSize="2xs"
                            color="dark-secondary"
                        />
                        <Input
                            label="Password"
                            id="password"
                            name="password"
                            type="text"
                            placeholder="Your secret password"
                            backgroundColor="white"
                            height={40}
                            marginBottom="3"
                            padding="3"
                            fontSize="2xs"
                            color="dark-secondary"
                        />
                        <Input
                            label="Confirm Password"
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            placeholder="Confirm your secret password"
                            backgroundColor="white"
                            height={40}
                            marginBottom="3"
                            padding="3"
                            fontSize="2xs"
                            color="dark-secondary"
                        />
                        <Links marginBottom="4">
                            <LinkItem color="dark-secondary">
                                <Link to="/signin">
                                    Already have an account? Sign in
                                </Link>
                            </LinkItem>{' '}
                            <LinkItem color="dark-secondary">
                                <Link to="/recover">Forgot password</Link>
                            </LinkItem>
                        </Links>
                        <Button
                            icon={<FaArrowRight />}
                            backgroundColor="white"
                            border="none"
                            color="purple"
                            fontSize="sm"
                            type="submit"
                        >
                            Sign up
                        </Button>
                    </Form>
                </Content>
            </Container>
        </>
    );
}
