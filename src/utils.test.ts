import { get, equal, convertToClock, setEnd, setNow } from 'utils';

describe('utils', () => {
  const state = {
    name: '우종혁',
  };

  it('get', () => {
    const f = get('name');
    const g = get('age');

    expect(f(state)).toBe('우종혁');
    expect(g(state)).toBeUndefined();
  });

  it('equal', () => {
    const f = equal('name', '우종혁');
    const g = equal('name', '맥도날드');

    expect(f(state)).toBeTruthy();
    expect(g(state)).toBeFalsy();
  });

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
      expect(setNow()).toBe(Math.floor(new Date().getTime() / 1000));
    });
  });
});
