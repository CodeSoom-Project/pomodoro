import reducer, { setEndTime, timer } from '.';
import { endTime } from 'fixtures/times';

describe('time', () => {
  describe('이전 상태가 정의되지 않은 경우', () => {
    const initialState = {
      endTime: 0,
      remainTime: '00:00',
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setEndTime', () => {
    it('endTime을 변경합니다.', () => {
      const initialState = {
        endTime: 0,
        remainTime: '00:00',
      };

      const state = reducer(
        initialState,
        setEndTime({ endTime, currentTime: endTime - 25 * 60 })
      );

      expect(state.endTime).toEqual(endTime);
      expect(state.remainTime).toEqual('25 : 00');
    });
  });

  describe('timer', () => {
    it('remainTime을 시간으로 변경합니다.', () => {
      const initialState = {
        endTime: 122,
        remainTime: '00:00',
      };

      const state = reducer(initialState, timer({ currentTime: 0 }));

      expect(state.remainTime).toEqual('02 : 02');
    });
  });
});
