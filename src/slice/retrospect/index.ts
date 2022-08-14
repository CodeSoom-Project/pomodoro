import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RetrospectState } from 'typings/retrospect';
import { Retrospect } from 'typings/retrospect';

const initialState: RetrospectState = {
  isEnd: false,
  retrospect: [],
};

const { actions, reducer } = createSlice({
  name: 'retrospect',
  initialState,
  reducers: {
    setTimeEnd: (state, { payload }) => {
      return {
        ...state,
        isEnd: payload,
      };
    },
    addRetrospect: (
      state,
      { payload: { id, contents } }: PayloadAction<Retrospect>
    ) => {
      const { retrospect } = state;
      return {
        ...state,
        isEnd: false,
        retrospect: [...retrospect, { id, contents }],
      };
    },
  },
});

export const { setTimeEnd, addRetrospect } = actions;

export default reducer;
