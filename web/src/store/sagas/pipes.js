import { put } from 'redux-saga/effects';

import { PipeCreators } from '../ducks/pipes';
import api from '~/services/api';

import addToast from '~/lib/addToast';

export function* listPipes() {
    try {
        const data = yield api.getPipes();
        yield put(PipeCreators.pipesSuccess(data));
    } catch (err) {
        yield put(PipeCreators.pipesFailure(err));
        addToast('Error trying to list pipes', {
            appearance: 'error',
            autoDismiss: true,
            pauseOnHover: false,
        });
    }
}

export function* createPipe({ data }) {
    try {
        const project = yield api.createPipe(data);
        yield put(PipeCreators.createPipeSuccess(project));
        yield put(PipeCreators.closeCreatePipeModal());

        addToast(`${project.title} was successfully created!`, {
            appearance: 'success',
            autoDismiss: true,
            pauseOnHover: false,
        });
    } catch (err) {
        yield put(PipeCreators.createPipeFailure(err));
        addToast('Error trying to create a project, please try again.', {
            appearance: 'error',
            autoDismiss: true,
            pauseOnHover: false,
        });
    }
}
