import { put } from 'redux-saga/effects';

import { UserCreators } from '~/store/ducks/user';
import api from '~/services/api';
import history from '~/routes/history';

import addToast from '~/lib/addToast';

export function* login(data) {
    try {
        const { id, token, name, email } = yield api.login(data);
        yield put(UserCreators.loginSuccess(id, token, name, email));

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

export function* signUp(data) {
    try {
        yield api.signUp(data);

        // The invite id is provided by a query string ?invite=id and captured by the sigup page
        if (data.invite) {
            try {
                yield api.confirmInvite(data.invite);
            } catch (err) {
                console.error('Error trying to confirm a invitation');
            }
        }

        yield put(UserCreators.signUpSuccess());

        addToast('Successfully login', {
            appearance: 'success',
            autoDismiss: true,
            pauseOnHover: false,
        });

        history.push('/signin');
    } catch (err) {
        yield put(UserCreators.loginFailure());
        addToast('Error trying to sign up, please try again.', {
            appearance: 'error',
            autoDismiss: true,
            pauseOnHover: false,
        });
    }
}

export function* logout() {
    history.push('/signin');
    addToast('Successfully logout', {
        appearance: 'success',
        autoDismiss: true,
        pauseOnHover: false,
    });

    yield put(UserCreators.logoutSuccess());
}
