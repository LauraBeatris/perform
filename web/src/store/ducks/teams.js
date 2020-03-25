import { produce } from 'immer';
import { createActions, createReducer } from 'reduxsauce';

/*
   === Actions ===
*/
export const { Types, Creators } = createActions({
    teamsRequest: null,
    teamsSuccess: ['data'],
    teamsFailure: ['error'],
});

export const TeamTypes = Types;
export const TeamCreators = Creators;

/*
    === Reducers ===
*/

const INITIAL_STATE = {
    data: [],
    error: null,
};

export const teamsSuccess = (state, { data }) => {
    return produce(state, draft => {
        draft.data = data;
        draft.error = null;
        return draft;
    });
};

export const teamsFailure = (state, { error }) => {
    return produce(state, draft => {
        draft.error = error;
        return draft;
    });
};

const reducer = createReducer(INITIAL_STATE, {
    [Types.TEAMS_SUCCESS]: teamsSuccess,
    [Types.TEAMS_FAILURE]: teamsFailure,
});

export default reducer;
