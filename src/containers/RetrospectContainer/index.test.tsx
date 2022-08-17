import { render } from '@testing-library/react';

import { RootState } from 'store/reducer';

import { useDispatch, useSelector } from 'react-redux';

import RetrospectContainer from '.';

import { Mode, Status } from 'typings/time';
import { initialState } from 'slice/time';
import { retroSpectInitialState } from 'slice/retrospect';

describe('RetrospectContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
    // running pause true
    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            ...initialState,
            status: Status.Running,
            isPause: true,
          },
          retrospect: {
            ...retroSpectInitialState,
            isEnd: true,
            retrospect: [
              { id: 0, contents: '회고' },
              { id: 1, contents: '회고는 좋다' },
            ],
          },
        })
    );
  });

  it('헤더가 나타납니다.', () => {
    const { container } = render(<RetrospectContainer />);

    expect(container).toHaveTextContent('오늘의 회고 목록');
  });

  it('회고가 나타납니다.', () => {
    const { container } = render(<RetrospectContainer />);

    const { retrospect } = useSelector((state: RootState) => state.retrospect);

    retrospect.forEach(({ contents }) =>
      expect(container).toHaveTextContent(contents)
    );
  });
});
