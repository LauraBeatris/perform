import { produce } from 'immer';
import { createActions, createReducer } from 'reduxsauce';

/*
   === Actions ===
*/
export const { Types, Creators } = createActions({
    loginRequest: ['email', 'password'],
    loginSuccess: ['token'],
    loginFailure: null,
    logoutRequest: null,
    logoutSuccess: null,
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

export const login = (state, { token }) => {
    return produce(state, draft => {
        draft.signedIn = true;
        draft.token = token;
    });
};

export const logout = (state) => {
    return produce(state, draft => {
        draft.signedIn = false;
        draft.token = null
    })
}

const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_SUCCESS]: login,
    [Types.LOGOUT_SUCCESS]: logout
});

export default reducer;
