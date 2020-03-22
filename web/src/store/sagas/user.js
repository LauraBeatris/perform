import { put } from 'redux-saga/effects';
import lodash from 'lodash';

import { UserCreators } from '../ducks/user';
import api from '~/services/api';
import history from '~/routes/history';

export function* login(data) {
    const addToast = lodash.get(window, '__react_toast_provider.current.add');

    try {
        const response = yield api.login(data);
        yield put(UserCreators.loginSuccess(response.token));

        if (addToast) {
            addToast('Successfully login', {
                appearance: 'success',
                autoDismiss: true,
                pauseOnHover: false,
            });
            history.push('/dashboard');
        }
    } catch (err) {
        yield put(UserCreators.loginFailure());
        if (addToast) {
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
}
