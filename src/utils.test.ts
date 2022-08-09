import { convertToClock, setEnd, currentTimestampSeconds } from 'utils';

describe('utils', () => {
  describe('convertToClock', () => {
    describe('인자로 음수가 넘겨지면', () => {
      it('00 : 00이 반환됩니다.', () => {
        expect(convertToClock(-1)).toBe('00 : 00');
      });
    });

    describe('인자로 양수가 넘겨지면', () => {
      it('해당 수를 분으로 바꾸어 반환합니다.', () => {
        expect(convertToClock(122)).toBe('02 : 02');
      });
    });
  });

  describe('setEnd', () => {
    it('인자가 넘겨지면 현재시간 + 인자를 반환합니다.', () => {
      expect(setEnd('1500')).toBe(
        Math.floor(new Date().getTime() / 1000 + 1500 * 60)
      );
    });
  });

  describe('setNow', () => {
    it('timeStamp를 반환합니다.', () => {
      expect(currentTimestampSeconds()).toBe(
        Math.floor(new Date().getTime() / 1000)
      );
    });
  });
});
