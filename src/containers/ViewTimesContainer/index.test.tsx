import { render, waitFor, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import { RootState } from 'store/reducer';

import { initialState } from 'slice/time';
import { retroSpectInitialState } from 'slice/retrospect';

import ViewTimesContainer from '.';

import { currentTimestampSeconds } from 'utils';

import { Mode, Status } from 'typings/time';

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
            ...initialState,
            remainTime: '01 : 00',
          },
          retrospect: retroSpectInitialState,
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

  describe('isEnd 상태이며 mode가 Focus일 때', () => {
    it('모달이 나타납니다.', () => {
      (useSelector as jest.Mock).mockImplementation(
        (state: (arg: RootState) => void) =>
          state({
            time: {
              ...initialState,
              isPause: true,
              status: Status.End,
            },
            retrospect: {
              ...retroSpectInitialState,
              isEnd: true,
            },
          })
      );
      const { container } = renderViewTimeContainer();

      expect(container).toHaveTextContent('작성하기');
    });
  });

  describe('isEnd 상태이며 mode가 Break일 때', () => {
    it('dispatch가 호출되고 navigate가 됩니다.', () => {
      (useSelector as jest.Mock).mockImplementation(
        (state: (arg: RootState) => void) =>
          state({
            time: {
              ...initialState,
              mode: Mode.Break,
              status: Status.End,
              isPause: true,
            },
            retrospect: {
              ...retroSpectInitialState,
              isEnd: true,
            },
          })
      );
      renderViewTimeContainer();

      expect(dispatch).toBeCalledWith({
        payload: Mode.Focus,
        type: 'time/setMode',
      });
    });
  });

  it('일정 종료 버튼을 누르면 endPomodoro가 호출됩니다.', () => {
    const { getByText } = renderViewTimeContainer();

    fireEvent.click(getByText('일정 종료'));

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });

  it('일시 정지 버튼을 누르면 pause가 디스패치와 함께 호출됩니다.', () => {
    const { getByText } = renderViewTimeContainer();

    fireEvent.click(getByText('일시 정지'));

    expect(dispatch).toBeCalledWith({
      payload: currentTimestampSeconds(),
      type: 'time/setPause',
    });
  });

  it('재개 버튼을 누르면 resume이 디스패치와 함께 호출됩니다.', async () => {
    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            ...initialState,
            status: Status.End,
            isPause: true,
          },
          retrospect: {
            ...retroSpectInitialState,
            isEnd: true,
          },
        })
    );

    const { getByText } = renderViewTimeContainer();

    fireEvent.click(getByText('재개'));

    expect(dispatch).toBeCalledWith({
      payload: Status.Resume,
      type: 'time/setStatus',
    });
  });

  it('Status가 resume일 때', async () => {
    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            ...initialState,
            remainTime: '02 : 00',
            status: Status.Resume,
          },
          retrospect: {
            ...retroSpectInitialState,
          },
        })
    );
    renderViewTimeContainer();

    expect(dispatch).toBeCalledWith({
      payload: { currentTime: currentTimestampSeconds(), endTime: null },
      type: 'time/setEndTime',
    });

    expect(dispatch).toBeCalledWith({
      payload: Status.Running,
      type: 'time/setStatus',
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
});
