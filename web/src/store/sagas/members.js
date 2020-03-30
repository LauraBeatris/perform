import { put } from 'redux-saga/effects';

import { MembersCreators } from '../ducks/members';
import api from '~/services/api';

import addToast from '~/lib/addToast';

export function* listMembers() {
    try {
        const { data, page, perPage, lastPage } = yield api.getMembers();
        yield put(
            MembersCreators.membersSuccess(data, { page, perPage, lastPage })
        );
    } catch (err) {
        yield put(MembersCreators.membersFailure(err));
        addToast('Error trying to list members', {
            appearance: 'error',
            autoDismiss: true,
            pauseOnHover: false,
        });
    }
}

export function* updateRoles({ roles, memberId }) {
    try {
        const member = yield api.updateRoles(
            roles.map(role => role.id),
            memberId
        );
        yield put(MembersCreators.updateRolesSuccess(member.roles, member.id));
    } catch (err) {
        yield put(MembersCreators.updateRolesFailure(err));
        if (err.status === 403) {
            addToast("You're not authorized to update a member role", {
                appearance: 'warning',
                autoDismiss: true,
                pauseOnHover: false,
            });
        } else {
            addToast('Error trying to update the member role', {
                appearance: 'error',
                autoDismiss: true,
                pauseOnHover: false,
            });
        }
    }
}
