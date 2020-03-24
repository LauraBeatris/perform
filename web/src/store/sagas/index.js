import { all, takeLatest } from 'redux-saga/effects';

/* User Sagas */
import { UserTypes } from '../ducks/user';
import { login, logout } from './user';

export default function* rootSaga() {
    return yield all([
        takeLatest(UserTypes.LOGIN_REQUEST, login),
        takeLatest(UserTypes.LOGOUT_REQUEST, logout)
    ]);
}
