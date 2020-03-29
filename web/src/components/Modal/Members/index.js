import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Main/index';

import { MembersCreators } from '~/store/ducks/members';
import { Container, Header, MembersList } from './styles';
import { StyledButton as Button } from '~/styles/components/Button';

export default function CreateMembersModal() {
    const dispatch = useDispatch();

    // function handleSubmit(data) {
    //     dispatch(MembersCreators.createMembersRequest(data));
    // }

    function handleClose() {
        dispatch(MembersCreators.closeMembersModal());
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
                    <h1>Manage Members</h1>
                </Header>
                <MembersList>
                    <li id="#owner">
                        <div className="info">
                            <img
                                src="https://source.unsplash.com/random"
                                alt="Member"
                            />
                            <strong>Laura Beatris</strong> <small>Owner</small>
                        </div>
                    </li>
                    <li>
                        <div className="info">
                            <img
                                src="https://source.unsplash.com/random"
                                alt="Member"
                            />
                            <strong>Diego Fernandes</strong>
                        </div>
                    </li>
                </MembersList>
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
            </Container>
        </Modal>
    );
}
