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
