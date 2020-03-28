import { put } from 'redux-saga/effects';

import { ProjectCreators } from '../ducks/projects';
import api from '~/services/api';

import addToast from '~/lib/addToast';

export function* listProjects() {
    try {
        const { data, page, perPage, lastPage } = yield api.getProjects();
        yield put(
            ProjectCreators.projectsSuccess(data, { page, perPage, lastPage })
        );
    } catch (err) {
        yield put(ProjectCreators.projectsFailure(err));
        addToast('Error trying to list projects', {
            appearance: 'error',
            autoDismiss: true,
            pauseOnHover: false,
        });
    }
}

export function* createProject({ data }) {
    try {
        const project = yield api.createProject(data);
        yield put(ProjectCreators.createProjectSuccess(project));
        yield put(ProjectCreators.closeCreateProjectModal());

        addToast(`${project.title} was successfully created!`, {
            appearance: 'success',
            autoDismiss: true,
            pauseOnHover: false,
        });
    } catch (err) {
        yield put(ProjectCreators.createProjectFailure(err));
        addToast('Error trying to create a project, please try again.', {
            appearance: 'error',
            autoDismiss: true,
            pauseOnHover: false,
        });
    }
}
