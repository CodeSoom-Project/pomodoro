import { render } from '@testing-library/react';

import { RootState } from 'store/reducer';
import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import ViewTimes from '.';

import { Status } from 'typings/time';

jest.mock('react-redux');

describe('Break', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            endTime: 0,
            remainTime: '00 : 00',
            location: '',
            status: Status.End,
          },
          retrospect: {
            isEnd: false,
            retrospect: [],
          },
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
