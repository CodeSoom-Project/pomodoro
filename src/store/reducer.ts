import { combineReducers } from 'redux';

import time from 'slice/time';

const rootReducer = combineReducers({
  time,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
