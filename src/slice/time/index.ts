import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { convertToClock } from 'utils';

import { EndTime, Timer, TimerState } from './types';

const initialState: TimerState = {
  endTime: 0,
  remainTime: '00:00',
};

const { actions, reducer } = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setEndTime: (
      state,
      { payload: { endTime, currentTime } }: PayloadAction<EndTime>
    ) => {
      return {
        ...state,
        endTime,
        remainTime: convertToClock(endTime - currentTime),
      };
    },
    timer: (state, { payload: { currentTime } }: PayloadAction<Timer>) => {
      return {
        ...state,
        remainTime: convertToClock(state.endTime - currentTime),
      };
    },
  },
});

export const { setEndTime, timer } = actions;

export default reducer;