import { all, takeLatest } from 'redux-saga/effects';

/* User Sagas */
import { UserTypes } from '../ducks/user';
import { login, logout, signUp } from './user';

/* Team Sagas */
import { TeamTypes } from '../ducks/teams';
import { listTeams, createTeam } from './teams';

/* Project Sagas */
import { ProjectTypes } from '../ducks/projects';
import { listProjects, createProject } from './projects';

/* Members Sagas */
import { MembersTypes } from '../ducks/members';
import { listMembers, updateRoles } from './members';

export default function* rootSaga() {
    return yield all([
        takeLatest(UserTypes.SIGN_UP_REQUEST, signUp),
        takeLatest(UserTypes.LOGIN_REQUEST, login),
        takeLatest(UserTypes.LOGOUT_REQUEST, logout),

        takeLatest(TeamTypes.TEAMS_REQUEST, listTeams),
        takeLatest(TeamTypes.CREATE_TEAM_REQUEST, createTeam),

        takeLatest(ProjectTypes.PROJECTS_REQUEST, listProjects),
        takeLatest(ProjectTypes.CREATE_PROJECT_REQUEST, createProject),

        takeLatest(MembersTypes.MEMBERS_REQUEST, listMembers),
        takeLatest(MembersTypes.UPDATE_ROLES_REQUEST, updateRoles),
    ]);
}
