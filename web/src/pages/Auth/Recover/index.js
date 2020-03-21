import React from 'react';
import Helmet from 'react-helmet';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Form } from '@unform/web';

import { Content, Title, Back } from '../styles';
import Logo from '~/components/Logo';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Container from '~/styles/components/Container';

export default function Recover() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <Helmet>
                <title>Perform | Recover your account </title>
            </Helmet>
            <Container
                type="withDecoration"
                backgroundColor="purple"
                padding="2"
            >
                <Back>
                    <FaArrowLeft /> Back
                </Back>
                <Content>
                    <Logo marginBottom="3" />

                    <Title color="white" marginBottom="3">
                        Recover
                    </Title>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            label="Token"
                            id="token"
                            name="token"
                            type="text"
                            backgroundColor="white"
                            placeholder="Your secret toKen"
                            height={40}
                            marginBottom="3"
                            padding="3"
                            fontSize="2xs"
                            color="dark-secondary"
                        />
                        <Input
                            label="Your new password"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Type your new password"
                            backgroundColor="white"
                            height={40}
                            marginBottom="3"
                            padding="3"
                            fontSize="2xs"
                            color="dark-secondary"
                        />
                        <Input
                            label="Confirm Password"
                            id="confirm_password"
                            name="confirm_password"
                            type="password"
                            placeholder="Confirm your new password"
                            backgroundColor="white"
                            height={40}
                            marginBottom="4"
                            padding="3"
                            fontSize="2xs"
                            color="dark-secondary"
                        />
                        <Button
                            icon={<FaArrowRight />}
                            backgroundColor="white"
                            color="purple"
                            fontSize="sm"
                            type="submit"
                        >
                            Recover
                        </Button>
                    </Form>
                </Content>
            </Container>
        </>
    );
}
