import { render, waitFor } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import { RootState } from 'store/reducer';

import ViewTimesContainer from '.';

import { currentTimestampSeconds } from 'utils';

jest.mock('react-redux');

describe('ViewTimesContainer', () => {
  const dispatch = jest.fn();

  const renderViewTimeContainer = () => {
    return render(
      <MemoryRouter>
        <ViewTimesContainer />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            endTime: 0,
            remainTime: '01 : 00',
          },
          retrospect: {
            isEnd: true,
            retrospect: [],
          },
        })
    );
  });

  it('시간이 보여집니다.', () => {
    const { container } = renderViewTimeContainer();

    expect(container).toHaveTextContent('01 : 00');
  });

  it('디스패치가 호출됩니다.', () => {
    renderViewTimeContainer();

    expect(dispatch).toBeCalledWith({
      payload: { currentTime: currentTimestampSeconds(), endTime: null },
      type: 'time/setEndTime',
    });
  });

  it('시간이 지나면 디스패치가 추가로 호출됩니다.', async () => {
    renderViewTimeContainer();

    await waitFor(
      () =>
        expect(dispatch).toBeCalledWith({
          payload: { currentTime: currentTimestampSeconds(), endTime: null },
          type: 'time/setEndTime',
        }),
      { timeout: 2000 }
    );
    await waitFor(
      () =>
        expect(dispatch).toBeCalledWith({
          payload: { currentTime: currentTimestampSeconds() },
          type: 'time/timer',
        }),
      { timeout: 2000 }
    );
  });

  it('isEnd가 True면 모달이 나타납니다.', () => {
    const { container } = renderViewTimeContainer();

    expect(container).toHaveTextContent('작성하기');
  });
});
