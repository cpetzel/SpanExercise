import {combineReducers} from 'redux';

import {dataReducer} from 'src/models/spaces/Space.reducer';

export default combineReducers({
  orm: dataReducer,
});
