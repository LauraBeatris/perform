import { all, takeLatest } from 'redux-saga/effects';

/* User Sagas */
import { UserTypes } from '../ducks/user';
import { login, logout } from './user';

/* Team Sagas */
import { TeamTypes } from '../ducks/teams';
import { listTeams, createTeam } from './teams';

export default function* rootSaga() {
    return yield all([
        takeLatest(UserTypes.LOGIN_REQUEST, login),
        takeLatest(UserTypes.LOGOUT_REQUEST, logout),

        takeLatest(TeamTypes.TEAMS_REQUEST, listTeams),
        takeLatest(TeamTypes.CREATE_TEAM_REQUEST, createTeam),
    ]);
}
