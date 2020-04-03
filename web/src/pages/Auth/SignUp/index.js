import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { FaArrowRight } from 'react-icons/fa';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useQuery from '~/hooks/useQuery';
import { UserCreators } from '~/store/ducks/user';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import Input from '~/components/Input';
import addToast from '~/lib/addToast';
import api from '~/services/api';
import Container from '~/styles/components/Container';
import { Content, Title, Links, LinkItem } from '../styles';
import { Header, InvitedTeam } from './styles';

export default function SignUp() {
    const dispatch = useDispatch();
    const inviteId = useQuery().get('invite');
    const [invite, setInvite] = useState({ team: null, user: null });

    function handleSubmit(data) {
        const { email, name, password, password_confirmation } = data;
        dispatch(
            UserCreators.signUpRequest(
                email,
                name,
                password,
                password_confirmation,
                invite
            )
        );
    }

    useEffect(() => {
        async function fetchInvite(id) {
            try {
                const inviteData = await api.getInvite(id);
                setInvite(inviteData);
                return inviteData;
            } catch (err) {
                addToast('Error trying to get the invite informations', {
                    appearance: 'error',
                    autoDismiss: true,
                    pauseOnHover: false,
                });

                console.error('Error fetching invite information', err);
                return err;
            }
        }

        if (inviteId) {
            fetchInvite(inviteId);
        }
    }, [inviteId]);

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
                <Header>
                    {invite.team && (
                        <InvitedTeam>
                            <img
                                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80"
                                alt="Invited Team"
                                aria-label="Invited Team"
                                title={invite.team.name}
                            />
                            <p>
                                You were envited to join the{' '}
                                <strong>
                                    {invite.team.name} team{' '}
                                    <span role="img" aria-label="Emoji">
                                        🚀
                                    </span>{' '}
                                </strong>
                            </p>
                        </InvitedTeam>
                    )}
                </Header>
                <Content>
                    <Logo marginBottom="3" />
                    <Title color="white" marginBottom="3">
                        Create your account
                    </Title>
                    <Form
                        onSubmit={handleSubmit}
                        initialData={{
                            email: invite ? invite.email : '',
                        }}
                    >
                        <Input
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your best email"
                            height={40}
                            marginBottom="3"
                            padding="3"
                            fontSize="2xs"
                            color="dark-secondary"
                            disabled={!!invite.email}
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
