import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMail } from 'react-icons/ai';

import { MembersCreators } from '~/store/ducks/members';
import {
    Container,
    Header,
    InviteForm,
    MembersList,
    StyledSelect,
} from './styles';
import Button from '~/components/Button';
import Input from '~/components/Input';
import api from '~/services/api';
import addToast from '~/lib/addToast';
import Modal from '../Main/index';

export default function CreateMembersModal() {
    const dispatch = useDispatch();
    const members = useSelector(state => state.members.data);
    const loading = useSelector(state => state.members.loading);
    const [roles, setRoles] = useState([]);

    function handleClose() {
        dispatch(MembersCreators.closeMembersModal());
    }

    function handleUpdateRoles(data, memberId, actions) {
        // Asking the user if he really wants to remove the moderator role
        if (
            data &&
            actions.action === 'remove-value' &&
            actions.removedValue.slug === 'moderator'
        ) {
            const remove = window.confirm(
                'Are you sure that you want to remove the moderator role of this member?'
            );

            if (!remove) return false;
        }

        // Preventing to remove all the roles of a member
        if (!data)
            return addToast(
                'Unable to update. The member needs to have at least one role',
                {
                    appearance: 'warning',
                    autoDismiss: true,
                    pauseOnHover: false,
                }
            );

        dispatch(MembersCreators.updateRolesRequest(data, memberId));
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

    useEffect(() => {
        dispatch(MembersCreators.membersRequest());
    }, [dispatch]);

    useEffect(() => {
        async function fetchRoles() {
            try {
                const data = await api.getRoles();
                setRoles(data);
            } catch (err) {
                addToast('Error trying to list the members roles', {
                    appearance: 'error',
                    autoDismiss: true,
                    autoDismissTimeout: 3500,
                    pauseOnHover: false,
                });
            }
        }

        fetchRoles();
        // eslint-disable-next-time
    }, []);

    return (
        <Modal minWidth={['85vw', '40vw']} handleClose={handleClose}>
            <Container>
                <Header>
                    <h1>Manage Members</h1>

                    <InviteForm>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Type the email of a member that you wanna invite"
                            height={44}
                            padding="3"
                            fontSize="2xs"
                            backgroundColor="#eee"
                        />
                        <Button
                            icon={<AiOutlineMail />}
                            backgroundColor="white"
                            borderColor="yellow"
                            borderStyle="solid"
                            color="yellow"
                            fontSize="sm"
                            type="submit"
                        >
                            Invite
                        </Button>
                    </InviteForm>
                </Header>
                <MembersList>
                    {members.map(member => {
                        const isCreator = member.id === member.team.user_id;
                        return (
                            <li key={member.id}>
                                <div className="info">
                                    <img
                                        src="https://source.unsplash.com/random"
                                        alt="Member"
                                    />
                                    <strong>{member.user.name}</strong>{' '}
                                    {isCreator && <small>Creator</small>}
                                </div>
                                <StyledSelect
                                    isMulti
                                    options={roles}
                                    getOptionLabel={role => role.name}
                                    getOptionValue={role => role.id}
                                    onChange={(values, actions) =>
                                        handleUpdateRoles(
                                            values,
                                            member.id,
                                            actions
                                        )
                                    }
                                    value={member.roles}
                                    isLoading={
                                        loading && loading.id === member.id
                                    }
                                />
                            </li>
                        );
                    })}
                </MembersList>
                <div className="actions">
                    <Button
                        backgroundColor="white"
                        borderColor="warning"
                        borderStyle="solid"
                        color="warning"
                        fontSize="sm"
                        type="button"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </div>
            </Container>
        </Modal>
    );
}
