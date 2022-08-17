import { render } from '@testing-library/react';

import { RootState } from 'store/reducer';
import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import ViewTimes from '.';

import { Status } from 'typings/time';
import { initialState } from 'slice/time';
import { retroSpectInitialState } from 'slice/retrospect';

jest.mock('react-redux');

describe('Break', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            ...initialState,
            status: Status.End,
            isPause: true,
          },
          retrospect: retroSpectInitialState,
        })
    );
  });

  it('시간이 보여집니다.', () => {
    const { container } = render(
      <MemoryRouter>
        <ViewTimes />
      </MemoryRouter>
    );

    expect(container).toHaveTextContent('00 : 00');
  });
});
