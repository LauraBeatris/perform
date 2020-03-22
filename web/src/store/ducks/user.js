import { produce } from 'immer';
import { createActions, createReducer } from 'reduxsauce';

/*
   === Actions ===
*/
export const { Types, Creators } = createActions({
    loginRequest: ['email', 'password'],
    loginSuccess: ['token'],
    loginFailure: null,
});

export const UserTypes = Types;
export const UserCreators = Creators;

/*
    === Reducers ===
*/

const INITIAL_STATE = {
    signedIn: false,
    token: null,
};

export const success = (state, { token }) => {
    return produce(state, draft => {
        draft.signedIn = true;
        draft.token = token;
    });
};

const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_SUCCESS]: success,
});

export default reducer;
