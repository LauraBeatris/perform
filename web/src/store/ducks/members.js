import { produce } from 'immer';
import { createActions, createReducer } from 'reduxsauce';

/*
   === Actions ===
*/
export const { Types, Creators } = createActions({
    membersRequest: null,
    membersSuccess: ['data'],
    membersFailure: ['error'],
    updateRolesRequest: ['roles', 'memberId'],
    updateRolesSuccess: ['roles', 'memberId'],
    updateRolesFailure: ['error'],
    openMembersModal: null,
    closeMembersModal: null,
});

export const MembersTypes = Types;
export const MembersCreators = Creators;

/*
    === Reducers ===
*/

const INITIAL_STATE = {
    data: [],
    error: null,
    membersModal: false,
    loading: false,
};

export const membersSuccess = (state, { data, pagination }) => {
    return produce(state, draft => {
        draft.data = data
        draft.pagination = pagination
        return draft;
    });
};

export const membersFailure = (state, { error }) => {
    return produce(state, draft => {
        draft.error = error;
        return draft;
    })
}

export const updateRolesRequest = (state, { memberId }) => {
    return produce(state, draft => {
        draft.loading = { value: true, id: memberId };
        return draft;
    })
}

export const updateRolesSuccess = (state, { memberId, roles }) => {
    return produce(state, draft => {
        draft.loading = false
        draft.data  = draft.data.map(member => member.id === memberId ? ({...member, roles }) : member)
        draft.error = null
        return draft;
    })
}

export const updateRolesFailure = (state, { error }) => {
    return produce(state, draft => {
        draft.loading = false;
        draft.error = error
        return draft;
    })
}

export const openMembersModal = (state, _) => {
    return produce(state, draft => {
        draft.membersModal = true;
        return draft;
    });
};

export const closeMembersModal = (state, _) => {
    return produce(state, draft => {
        draft.membersModal = false;
        return draft;
    });
};

const reducer = createReducer(INITIAL_STATE, {
    [Types.MEMBERS_SUCCESS]: membersSuccess,
    [Types.MEMBERS_FAILURE]: membersFailure,
    [Types.UPDATE_ROLES_REQUEST]: updateRolesRequest,
    [Types.UPDATE_ROLES_SUCCESS]: updateRolesSuccess,
    [Types.UPDATE_ROLES_FAILURE]: updateRolesFailure,
    [Types.OPEN_MEMBERS_MODAL]: openMembersModal,
    [Types.CLOSE_MEMBERS_MODAL]: closeMembersModal,
});

export default reducer;
