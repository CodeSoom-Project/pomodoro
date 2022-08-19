import reducer, {
  setEndTime,
  setIsPause,
  setMode,
  setPause,
  timer,
  initialState,
  setTimes,
} from '.';

import { endTime } from 'fixtures/times';

import { Status } from 'typings/time';
import { setStatus } from 'slice/time';

describe('time', () => {
  describe('이전 상태가 정의되지 않은 경우', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setEndTime', () => {
    it('endTime을 변경합니다.', () => {
      const state = reducer(
        initialState,
        setEndTime({ endTime, currentTime: endTime - 25 * 60 })
      );

      expect(state.endTime).toEqual(endTime);
      expect(state.remainTime).toEqual('25 : 00');
    });
  });

  describe('timer', () => {
    describe('endTime이 currentTime보다 크면', () => {
      it('remainTime을 시간으로 변경합니다.', () => {
        const state = reducer(
          {
            ...initialState,
            endTime: 122,
          },
          timer({ currentTime: 0 })
        );

        expect(state.remainTime).toEqual('02 : 02');
      });
    });
    describe('endTIme이 currentTime보다 작으면', () => {
      it('status가 End상태로 변경됩니다.', () => {
        const state = reducer(
          initialState,
          timer({ currentTime: endTime + 1 })
        );

        expect(state.status).toEqual(Status.End);
      });
    });
  });

  describe('setMode', () => {
    it('현재 path를 저장합니다.', () => {
      const state = reducer(initialState, setMode('Focus'));

      expect(state.mode).toEqual('Focus');
    });
  });

  describe('setStatus', () => {
    it('현재 status를 저장합니다.', () => {
      const state = reducer(initialState, setStatus(Status.Running));

      expect(state.status).toEqual(Status.Running);
    });
  });

  describe('setPause', () => {
    const endTime = 100;
    const pauseTime = 50;

    it('현재 상태와 정지 시간을 정해주고 상태를 업데이트합니다.', () => {
      const state = reducer(
        {
          ...initialState,
          endTime,
        },
        setPause(pauseTime)
      );

      expect(state.pauseTime).toEqual(endTime - pauseTime);
      expect(state.status).toEqual(Status.Pause);
      expect(state.isPause).toBe(true);
    });
  });

  describe('setIsPause', () => {
    it('정지 상태를 핸들링합니다.', () => {
      const state = reducer(initialState, setIsPause(true));

      expect(state.isPause).toBe(true);
    });
  });

  describe('setTimes', () => {
    it('시간이 추가됩니다.', () => {
      const state = reducer(initialState, setTimes('40'));

      expect(state.times).toEqual(['5', '10', '15', '20', '25', '40']);
    });
  });
});
