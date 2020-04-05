import { produce } from 'immer';
import { createActions, createReducer } from 'reduxsauce';

import history from '~/routes/history';
import { UserTypes } from './user';

/*
   === Actions ===
*/
export const { Types, Creators } = createActions({
    teamsRequest: null,
    teamsSuccess: ['data'],
    teamsFailure: ['error'],
    selectTeam: ['team'],
    openCreateTeamModal: null,
    closeCreateTeamModal: null,
    createTeamRequest: ['data'],
    createTeamSuccess: ['team'],
    createTeamFailure: ['error'],
    openTeamSwitcher: null,
    closeTeamSwitcher: null,
    toggleTeamSwitcher: null,
});

export const TeamTypes = Types;
export const TeamCreators = Creators;

/*
    === Reducers ===
*/

const INITIAL_STATE = {
    data: [],
    error: null,
    active: JSON.parse(localStorage.getItem('perform:activeTeam')) || null,
    createTeamModal: false,
    teamSwitcher: false,
};

export const teamsSuccess = (state, { data }) => {
    return produce(state, draft => {
        draft.data = data;
        draft.error = null;
        return draft;
    });
};

export const teamsFailure = (state, { error }) => {
    return produce(state, draft => {
        draft.error = error;
        return draft;
    });
};

export const selectTeam = (state, { team }) => {
    return produce(state, draft => {
        if (team) {
            draft.active = team;

            /*
                Verify if the active team was null, meaning that is the first time that the user is selecting a active team
                and redirect to the projects page
            */
            if (draft.active) history.push('/team/projects');

            try {
                localStorage.setItem(
                    'perform:activeTeam',
                    JSON.stringify(team)
                );
            } catch (err) {
                draft.error = err;
            }
        }
        return draft;
    });
};

export const openCreateTeamModal = (state, _) => {
    return produce(state, draft => {
        draft.createTeamModal = true;
        return draft;
    });
};

export const closeCreateTeamModal = (state, _) => {
    return produce(state, draft => {
        draft.createTeamModal = false;
        return draft;
    });
};

export const openTeamSwitcher = (state, _) => {
    return produce(state, draft => {
        draft.teamSwitcher = true;
        return draft;
    });
};

export const closeTeamSwitcher = (state, _) => {
    return produce(state, draft => {
        draft.teamSwitcher = false;
        return draft;
    });
};

export const toggleTeamSwitcher = (state, _) => {
    return produce(state, draft => {
        draft.teamSwitcher = !state.teamSwitcher;
        return draft;
    });
};

export const createTeam = (state, { team }) => {
    return produce(state, draft => {
        draft.data = [...draft.data, team];
        return draft;
    });
};

export const logout = state => {
    return produce(state, draft => {
        draft.active = null;

        try {
            localStorage.removeItem('perform:activeTeam');
        } catch (err) {
            draft.error = err;
        }

        return draft;
    });
};

const reducer = createReducer(INITIAL_STATE, {
    [Types.TEAMS_SUCCESS]: teamsSuccess,
    [Types.TEAMS_FAILURE]: teamsFailure,
    [Types.SELECT_TEAM]: selectTeam,
    [Types.OPEN_CREATE_TEAM_MODAL]: openCreateTeamModal,
    [Types.CLOSE_CREATE_TEAM_MODAL]: closeCreateTeamModal,
    [Types.CREATE_TEAM_SUCCESS]: createTeam,
    [Types.OPEN_TEAM_SWITCHER]: openTeamSwitcher,
    [Types.CLOSE_TEAM_SWITCHER]: closeTeamSwitcher,
    [Types.TOGGLE_TEAM_SWITCHER]: toggleTeamSwitcher,
    [UserTypes.LOGOUT_SUCCESS]: logout,
});

export default reducer;
