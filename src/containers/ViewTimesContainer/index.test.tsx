import { render, waitFor, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import { RootState } from 'store/reducer';

import ViewTimesContainer from '.';

import { currentTimestampSeconds } from 'utils';

import { Status } from 'typings/time';

jest.mock('react-redux');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

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
            location: '/focus',
            status: Status.Initial,
          },
          retrospect: {
            isEnd: false,
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

    expect(dispatch).toBeCalledWith({
      payload: { currentTime: currentTimestampSeconds(), endTime: null },
      type: 'time/setEndTime',
    });

    await waitFor(
      () =>
        expect(dispatch).toBeCalledWith({
          payload: { currentTime: currentTimestampSeconds() },
          type: 'time/timer',
        }),
      { timeout: 2000 }
    );
  });

  it('isEnd가 True고 location이 "/focus"면 모달이 나타납니다.', () => {
    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            endTime: 0,
            remainTime: '00 : 00',
            location: '/focus',
            status: Status.End,
          },
          retrospect: {
            isEnd: true,
            retrospect: [],
          },
        })
    );

    const { container } = renderViewTimeContainer();

    expect(container).toHaveTextContent('작성하기');
  });

  it('종료 버튼을 누르면 endPomodoro가 호출됩니다.', () => {
    const { getByText } = renderViewTimeContainer();

    fireEvent.click(getByText('종료'));

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });
});
