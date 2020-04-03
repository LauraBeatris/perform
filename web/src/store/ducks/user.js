import { produce } from 'immer';
import { createActions, createReducer } from 'reduxsauce';

/*
   === Actions ===
*/
export const { Types, Creators } = createActions({
    loginRequest: ['email', 'password'],
    loginSuccess: ['id', 'token', 'name', 'email'],
    signUpRequest: [
        'email',
        'name',
        'password',
        'password_confirmation',
        'invite',
    ],
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
    id: null,
    signedIn: false,
    token: null,
    email: null,
    name: null,
};

export const login = (state, { id, token, name, email }) => {
    return produce(state, draft => {
        draft = {
            ...draft,
            id,
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
