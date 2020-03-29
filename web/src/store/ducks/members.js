import { produce } from 'immer';
import { createActions, createReducer } from 'reduxsauce';

/*
   === Actions ===
*/
export const { Types, Creators } = createActions({
    openMembersModal: null,
    closeMembersModal: null,
});

export const MembersTypes = Types;
export const MembersCreators = Creators;

/*
    === Reducers ===
*/

const INITIAL_STATE = {
    membersModal: false,
};

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
    [Types.OPEN_MEMBERS_MODAL]: openMembersModal,
    [Types.CLOSE_MEMBERS_MODAL]: closeMembersModal,
});

export default reducer;
