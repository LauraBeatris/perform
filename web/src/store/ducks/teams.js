import { produce } from 'immer';
import { createActions, createReducer } from 'reduxsauce';

/*
   === Actions ===
*/
export const { Types, Creators } = createActions({
    teamsRequest: null,
    teamsSuccess: ['data'],
    teamsFailure: ['error'],
    selectTeam: ['team'],
});

export const TeamTypes = Types;
export const TeamCreators = Creators;

/*
    === Reducers ===
*/

const INITIAL_STATE = {
    data: [],
    error: null,
    active: JSON.parse(localStorage.getItem('perform:activeTeam')) || null,
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

export const selectTeam = (state, { team }) => {
    return produce(state, draft => {
        if (team) {
            draft.active = team;
            try {
                localStorage.setItem(
                    'perform:activeTeam',
                    JSON.stringify(team)
                );
            } catch (err) {
                draft.error = err;
            }
        }
        return draft;
    });
};

const reducer = createReducer(INITIAL_STATE, {
    [Types.TEAMS_SUCCESS]: teamsSuccess,
    [Types.TEAMS_FAILURE]: teamsFailure,
    [Types.SELECT_TEAM]: selectTeam,
});

export default reducer;
