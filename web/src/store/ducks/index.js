import { combineReducers } from 'redux';

import user from './user';
import teams from './teams';
import projects from './projects';
import members from './members';

export default combineReducers({ user, teams, projects, members });
