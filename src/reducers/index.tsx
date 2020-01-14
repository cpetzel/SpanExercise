import {combineReducers} from 'redux';
import {createReducer} from 'redux-orm';

import spanOrm from '../models/ORM';

export default combineReducers({
  orm: createReducer(spanOrm), // This will be the Redux-ORM state.
  // … potentially other reducers
});
