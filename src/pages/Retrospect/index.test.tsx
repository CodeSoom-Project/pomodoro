import { render } from '@testing-library/react';

import { RootState } from 'store/reducer';
import { useSelector } from 'react-redux';

import Retrospect from '.';

import { Status } from 'typings/time';
import { initialState } from 'slice/time';
import { retroSpectInitialState } from 'slice/retrospect';
import { MemoryRouter } from 'react-router';

describe('Retrospect', () => {
  const mockedUsedNavigate = jest.fn();

  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockedUsedNavigate,
    }));

    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            ...initialState,
            isPause: true,
            status: Status.Running,
            remainTime: '01 : 00',
          },
          retrospect: {
            ...retroSpectInitialState,
            isEnd: true,
          },
        })
    );
  });

  it('헤더가 나타납니다.', () => {
    const { container } = render(
      <MemoryRouter>
        <Retrospect />
      </MemoryRouter>
    );

    expect(container).toHaveTextContent("Today's");
  });
});
