import { put } from 'redux-saga/effects';

import { TeamCreators } from '../ducks/teams';
import api from '~/services/api';

import addToast from '~/helpers/addToast';

export function* listTeams() {
    try {
        const teams = yield api.getTeams();
        yield put(TeamCreators.teamsSuccess(teams));
    } catch (err) {
        yield put(TeamCreators.teamsFailure(err));
        addToast(
            err.status
                ? 'Error trying to login, please try again.'
                : 'Invalid account, please write a valid email and password',
            {
                appearance: 'error',
                autoDismiss: true,
                pauseOnHover: false,
            }
        );
    }
}

export function* createTeam({ data }) {
    try {
        const team = yield api.createTeam(data);
        yield put(TeamCreators.createTeamSuccess(team));
        yield put(TeamCreators.closeCreateTeamModal());

        addToast(`${team.name} was successfully created!`, {
            appearance: 'success',
            autoDismiss: true,
            pauseOnHover: false,
        });
    } catch (err) {
        yield put(TeamCreators.createTeamFailure(err));
        addToast('Error trying to create a team, please try again.', {
            appearance: 'error',
            autoDismiss: true,
            pauseOnHover: false,
        });
    }
}
