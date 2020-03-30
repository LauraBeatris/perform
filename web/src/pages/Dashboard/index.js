import React from 'react';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';

import {
    Header,
    Message,
    Text,
    Container,
    Options,
    StyledLink,
} from './styles';
import { TeamCreators } from '~/store/ducks/teams';

export default function DashboardPage() {
    const name = useSelector(state => state.user.name);
    const dispatch = useDispatch();

    function openCreateTeamModal() {
        dispatch(TeamCreators.openCreateTeamModal());
    }

    return (
        <Container>
            <Helmet>
                <title> Perform | Welcome {name} </title>
            </Helmet>
            <Header>
                <Message>
                    Welcome
                    <br />
                    <span>
                        {name}{' '}
                        <span id="emoji" role="img" aria-label="Shake Hands">
                            👋
                        </span>
                    </span>
                </Message>
                <Text
                    fontSize={['md', '29px']}
                    color="grayLight"
                    marginTop={['2', '3', '0']}
                    marginBottom={['4', '6', '0']}
                >
                    Create content, share ideas, organize projects, and build
                    your brand together
                </Text>
            </Header>

            <Options>
                <Text fontSize="lg" color="grayLight" textAlign="center">
                    Select a option bellow{' '}
                    <span role="img" id="emoji" aria-label="Start Flag">
                        🏁
                    </span>
                </Text>
                <StyledLink
                    backgroundColor="inherit"
                    fontSize="lg"
                    color="dark"
                    marginTop="4"
                    textAlign="center"
                    onClick={openCreateTeamModal}
                >
                    Create a team
                </StyledLink>
                <StyledLink
                    to="/teams"
                    backgroundColor="inherit"
                    fontSize="lg"
                    color="dark"
                    marginTop="3"
                    textAlign="center"
                >
                    Joining a team
                </StyledLink>
            </Options>
        </Container>
    );
}
