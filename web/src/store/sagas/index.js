import { all, takeLatest } from 'redux-saga/effects';

/* User Sagas */
import { UserTypes } from '../ducks/user';
import { login, logout } from './user';

/* Team Sagas */
import { TeamTypes } from '../ducks/teams';
import { listTeams } from './teams';

export default function* rootSaga() {
    return yield all([
        takeLatest(UserTypes.LOGIN_REQUEST, login),
        takeLatest(UserTypes.LOGOUT_REQUEST, logout),

        takeLatest(TeamTypes.TEAMS_REQUEST, listTeams),
    ]);
}
