import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { convertToClock } from 'utils';

import { EndTime, Timer, TimerState, Status, Mode } from 'typings/time';

export const initialState: TimerState = {
  endTime: 0,
  remainTime: '00 : 00',
  pauseTime: 0,
  mode: Mode.Focus,
  status: Status.Initial,
  isPause: false,
  times: ['5', '10', '15', '20', '25'],
  isOption: false,
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
    setMode: (state, { payload }) => {
      return {
        ...state,
        mode: payload,
      };
    },
    setStatus: (state, { payload }) => {
      return {
        ...state,
        status: payload,
      };
    },
    setPause: (state, { payload }) => {
      return {
        ...state,
        pauseTime: state.endTime - payload,
        status: Status.Pause,
        isPause: true,
      };
    },
    setIsPause: (state, { payload }) => {
      return {
        ...state,
        isPause: payload,
      };
    },
    setTimes: (state, { payload }) => {
      return {
        ...state,
        times: [...state.times, payload],
      };
    },
    setIsOption: state => {
      return {
        ...state,
        isOption: !state.isOption,
      };
    },
  },
});

export const {
  setEndTime,
  timer,
  setMode,
  setStatus,
  setPause,
  setIsPause,
  setTimes,
  setIsOption,
} = actions;

export default reducer;
