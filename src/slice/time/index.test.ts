import reducer, { setEndTime, setLocation, timer } from '.';

import { endTime } from 'fixtures/times';

import { Status } from 'typings/time';
import { setStatus } from 'slice/time';

describe('time', () => {
  const initialState = {
    endTime: 0,
    remainTime: '00 : 00',
    location: '',
    status: Status.Initial,
  };
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
        const initialState = {
          endTime: 122,
          remainTime: '00:00',
          location: '',
          status: Status.Initial,
        };

        const state = reducer(initialState, timer({ currentTime: 0 }));

        expect(state.remainTime).toEqual('02 : 02');
      });
    });
    describe('endTIme이 currentTime보다 작으면', () => {
      it('status가 End상태로 변경됩니다.', () => {
        const initialState = {
          endTime: 122,
          remainTime: '00:00',
          location: '',
          status: Status.Initial,
        };

        const state = reducer(
          initialState,
          timer({ currentTime: endTime + 1 })
        );

        expect(state.status).toEqual(Status.End);
      });
    });
  });

  describe('setLocation', () => {
    it('현재 path를 저장합니다.', () => {
      const state = reducer(initialState, setLocation('Focus'));

      expect(state.location).toEqual('Focus');
    });
  });

  describe('setStatus', () => {
    it('현재 status를 저장합니다.', () => {
      const state = reducer(initialState, setStatus(Status.Running));

      expect(state.status).toEqual(Status.Running);
    });
  });
});
