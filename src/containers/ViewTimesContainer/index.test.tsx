import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import { RootState } from 'store/reducer';

import ViewTimesContainer from '.';

jest.mock('react-redux');

describe('ViewTimesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            endTime: 0,
            remainTime: '00 : 00',
          },
        })
    );
  });

  it('시간이 보여집니다.', () => {
    const { container } = render(
      <MemoryRouter>
        <ViewTimesContainer />
      </MemoryRouter>
    );

    expect(container).toHaveTextContent('00 : 00');
  });
});
