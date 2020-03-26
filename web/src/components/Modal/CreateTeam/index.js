import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Main/index';

import Input from '~/components/Input';
import { TeamCreators } from '~/store/ducks/teams';
import { Container, Header, StyledForm } from './styles';
import { StyledButton as Button } from '~/styles/components/Button';

export default function CreateTeamModal() {
    const dispatch = useDispatch();

    function handleSubmit(data) {
        dispatch(TeamCreators.createTeamRequest(data));
    }

    function handleClose() {
        dispatch(TeamCreators.closeCreateTeamModal());
    }

    return (
        <Modal minWidth={['85vw', '40vw']} handleClose={handleClose}>
            <Container>
                {' '}
                <Header>
                    <h1>Create a Team</h1>
                </Header>
                <StyledForm onSubmit={handleSubmit}>
                    <label htmlFor="name">Team Name</label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your best name for a team"
                        height={44}
                        marginBottom="3"
                        padding="3"
                        fontSize="2xs"
                        backgroundColor="#eee"
                    />
                    <div className="actions">
                        <Button
                            type="submit"
                            minHeight="40px"
                            color="white"
                            backgroundColor="purple"
                            fontSize="md"
                            marginTop="3"
                        >
                            Create
                        </Button>
                        <Button
                            type="button"
                            minHeight="40px"
                            color="white"
                            backgroundColor="warning"
                            fontSize="md"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                    </div>
                </StyledForm>
            </Container>
        </Modal>
    );
}
