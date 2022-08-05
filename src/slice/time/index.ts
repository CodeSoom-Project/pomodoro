import { createSlice } from '@reduxjs/toolkit';

import { convertToClock } from 'utils';

const initialState = {
  endTime: 0,
  remainTime: '00:00',
};

const { actions, reducer } = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setEndTime: (state, action: any) => {
      return {
        ...state,
        endTime: action.payload,
      };
    },
    timer: (state, action: any) => {
      return {
        ...state,
        remainTime: convertToClock(state.endTime - action.payload),
      };
    },
  },
});

export const { setEndTime, timer } = actions;

export default reducer;
