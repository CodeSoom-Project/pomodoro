import { combineReducers } from 'redux';

import time from 'slice/time';
import retrospect from 'slice/retrospect';

const rootReducer = combineReducers({
  time,
  retrospect,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
