import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { convertToClock } from 'utils';

import { EndTime, Timer, TimerState, Status } from 'typings/time';

const initialState: TimerState = {
  endTime: 0,
  remainTime: '00 : 00',
  location: '',
  status: Status.Initial,
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
        status: Status.Running,
      };
    },
    timer: (state, { payload: { currentTime } }: PayloadAction<Timer>) => {
      if (state.endTime < currentTime) {
        return {
          ...state,
          status: Status.End,
        };
      }

      return {
        ...state,
        remainTime: convertToClock(state.endTime - currentTime),
        status: Status.Running,
      };
    },

    setLocation: (state, { payload }) => {
      return {
        ...state,
        location: payload,
      };
    },
    setStatus: (state, { payload }) => {
      return {
        ...state,
        status: payload,
      };
    },
  },
});

export const { setEndTime, timer, setLocation, setStatus } = actions;

export default reducer;
