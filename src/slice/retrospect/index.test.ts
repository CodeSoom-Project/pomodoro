import reducer, { addRetrospect, setTimeEnd } from '.';
import { retroSpectInitialState as initialState } from './index';

describe('retrospect', () => {
  describe('이전 상태가 정의되지 않은 경우', () => {
    it('returns initial State', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setTimeEnd', () => {
    it('isEnd상태를 변경합니다.', () => {
      const state = reducer(initialState, setTimeEnd(true));

      expect(state.isEnd).toEqual(true);
    });
  });

  describe('addRetrospect', () => {
    it('회고가 추가됩니다.', () => {
      const state = reducer(
        initialState,
        addRetrospect({ id: 1, contents: '회고' })
      );

      expect(state.retrospect).toEqual([{ id: 1, contents: '회고' }]);
    });
  });
});
