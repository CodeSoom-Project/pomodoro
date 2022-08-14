import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { convertToClock } from 'utils';

import { EndTime, Timer, TimerState } from 'typings/time';

const initialState: TimerState = {
  endTime: 0,
  remainTime: '00:00',
  location: '',
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
    setLocation: (state, { payload }) => {
      return {
        ...state,
        location: payload,
      };
    },
  },
});

export const { setEndTime, timer, setLocation } = actions;

export default reducer;
