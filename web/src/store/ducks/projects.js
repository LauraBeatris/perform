import { produce } from 'immer';
import { createActions, createReducer } from 'reduxsauce';

/*
   === Actions ===
*/
export const { Types, Creators } = createActions({
    projectsRequest: null,
    projectsSuccess: ['data', 'pagination'],
    projectsFailure: ['error'],
    createProjectRequest: ['data'],
    createProjectSuccess: ['project'],
    createProjectFailure: ['error'],
    openCreateProjectModal: null,
    closeCreateProjectModal: null,
});

export const ProjectTypes = Types;
export const ProjectCreators = Creators;

/*
    === Reducers ===
*/

const INITIAL_STATE = {
    data: [],
    pagination: null,
    error: null,
    createProjectModal: false,
};

export const projectsSuccess = (state, { data, pagination }) => {
    return produce(state, draft => {
        draft = {
            ...draft,
            data,
            pagination,
        };
        return draft;
    });
};

export const projectsFailure = (state, { error }) => {
    return produce(state, draft => {
        draft.error = error;
        return draft;
    });
};

export const openCreateProjectModal = (state, _) => {
    return produce(state, draft => {
        draft.createProjectModal = true;
        return draft;
    });
};

export const closeCreateProjectModal = (state, _) => {
    return produce(state, draft => {
        draft.createProjectModal = false;
        return draft;
    });
};

export const createProject = (state, { project }) => {
    return produce(state, draft => {
        draft.data = [...draft.data, project];
        return draft;
    });
};

const reducer = createReducer(INITIAL_STATE, {
    [Types.PROJECTS_SUCCESS]: projectsSuccess,
    [Types.PROJECTS_FAILURE]: projectsFailure,
    [Types.OPEN_CREATE_PROJECT_MODAL]: openCreateProjectModal,
    [Types.CLOSE_CREATE_PROJECT_MODAL]: closeCreateProjectModal,
    [Types.CREATE_PROJECT_SUCCESS]: createProject,
});

export default reducer;
