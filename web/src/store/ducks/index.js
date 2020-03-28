import { combineReducers } from 'redux';

import user from './user';
import teams from './teams';
import projects from './projects';

export default combineReducers({ user, teams, projects });
