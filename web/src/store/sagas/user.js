import { put } from 'redux-saga/effects';

import { UserCreators } from '../ducks/user';
import api from '~/services/api';
import history from '~/routes/history';

import addToast from '~/helpers/addToast'

export function* login(data) {
    try {
        const response = yield api.login(data);
        yield put(UserCreators.loginSuccess(response.token));

        addToast('Successfully login', {
            appearance: 'success',
            autoDismiss: true,
            pauseOnHover: false,
        });

        history.push('/dashboard');
    } catch (err) {
        yield put(UserCreators.loginFailure());
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
