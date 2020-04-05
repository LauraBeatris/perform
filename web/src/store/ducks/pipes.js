import { produce } from 'immer';
import { createActions, createReducer } from 'reduxsauce';

/*
   === Actions ===
*/
export const { Types, Creators } = createActions({
    pipesRequest: null,
    pipesSuccess: ['data'],
    pipesFailure: ['error'],
    createPipeRequest: ['data'],
    createPipeSuccess: ['pipe'],
    createPipeFailure: ['error'],
    openCreatePipeModal: null,
    closeCreatePipeModal: null,
    move: ['to', 'from', 'fromPipe', 'toPipe'],
});

export const PipeTypes = Types;
export const PipeCreators = Creators;

/*
    === Reducers ===
*/

const INITIAL_STATE = {
    data: [],
    error: null,
    createPipeModal: false,
};

export const move = (state, { to, from, fromPipe, toPipe }) => {
    return produce(state, draft => {
        const dragged = state.data[fromPipe].tasks[from];

        draft.data[fromPipe].tasks.splice(from, 1);
        draft.data[toPipe].tasks.splice(to, 0, dragged);
        return draft;
    });
};

export const pipesSuccess = (state, { data }) => {
    return produce(state, draft => {
        draft.data = data;
        data.error = null;
        return draft;
    });
};

export const pipesFailure = (state, { error }) => {
    return produce(state, draft => {
        draft.error = error;
        return draft;
    });
};

export const openCreatePipeModal = (state, _) => {
    return produce(state, draft => {
        draft.createPipeModal = true;
        return draft;
    });
};

export const closeCreatePipeModal = (state, _) => {
    return produce(state, draft => {
        draft.createPipeModal = false;
        return draft;
    });
};

export const createPipe = (state, { project }) => {
    return produce(state, draft => {
        draft.data = [...draft.data, project];
        return draft;
    });
};

const reducer = createReducer(INITIAL_STATE, {
    [Types.PIPES_SUCCESS]: pipesSuccess,
    [Types.PIPES_FAILURE]: pipesFailure,
    [Types.OPEN_CREATE_PIPE_MODAL]: openCreatePipeModal,
    [Types.CLOSE_CREATE_PIPE_MODAL]: closeCreatePipeModal,
    [Types.CREATE_PIPE_SUCCESS]: createPipe,
    [Types.MOVE]: move,
});

export default reducer;
