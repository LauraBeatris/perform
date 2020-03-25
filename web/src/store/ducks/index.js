import { combineReducers } from 'redux';

import user from './user';
import teams from './teams';

export default combineReducers({ user, teams });
