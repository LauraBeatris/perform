import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Main/index';

import Input from '~/components/Input';
import { ProjectCreators } from '~/store/ducks/projects';
import { Container, Header, StyledForm } from './styles';
import { StyledButton as Button } from '~/styles/components/Button';

export default function CreateProjectModal() {
    const dispatch = useDispatch();

    function handleSubmit(data) {
        dispatch(ProjectCreators.createProjectRequest(data));
    }

    function handleClose() {
        dispatch(ProjectCreators.closeCreateProjectModal());
    }

    useEffect(() => {
        function handleOverlayClick(event) {
            if (event.target.getAttribute('id') === 'modal-overlay') {
                handleClose();
            }
        }

        document.addEventListener('click', handleOverlayClick);

        return () => document.removeEventListener('click', handleOverlayClick);
        // eslint-disable-next-line
    }, []);

    return (
        <Modal minWidth={['85vw', '40vw']} handleClose={handleClose}>
            <Container>
                {' '}
                <Header>
                    <h1>Create a Project</h1>
                </Header>
                <StyledForm onSubmit={handleSubmit}>
                    <label htmlFor="title">Project Title</label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Type your best title for a project"
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
