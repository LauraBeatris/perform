import { produce } from 'immer';
import { createActions, createReducer } from 'reduxsauce';

/*
   === Actions ===
*/
export const { Types, Creators } = createActions({
    loginRequest: ['email', 'password'],
    loginSuccess: ['token', 'name', 'email'],
    signUpRequest: ['email', 'name', 'password', 'password_confirmation'],
    signUpSuccess: null,
    signUpFailure: null,
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
    email: null,
    name: null,
};

export const login = (state, { token, name, email }) => {
    return produce(state, draft => {
        draft = {
            ...draft,
            signedIn: true,
            token,
            name,
            email,
        };

        return draft;
    });
};

export const logout = state => {
    return produce(state, draft => {
        draft.signedIn = false;
        draft.token = null;
    });
};

const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_SUCCESS]: login,
    [Types.LOGOUT_SUCCESS]: logout,
});

export default reducer;
