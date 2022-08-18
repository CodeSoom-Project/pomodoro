import { fireEvent, render } from '@testing-library/react';

import { RootState } from 'store/reducer';

import { useDispatch, useSelector } from 'react-redux';

import RetrospectContainer from '.';

import { Status } from 'typings/time';
import { initialState } from 'slice/time';
import { retroSpectInitialState } from 'slice/retrospect';
import { MemoryRouter } from 'react-router';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('RetrospectContainer', () => {
  const dispatch = jest.fn();

  const renderRetrospectContainer = () => {
    return render(
      <MemoryRouter>
        <RetrospectContainer />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

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

  it('회고가 나타납니다.', () => {
    const { container } = renderRetrospectContainer();

    const { retrospect } = useSelector((state: RootState) => state.retrospect);

    retrospect.forEach(({ contents }) =>
      expect(container).toHaveTextContent(contents)
    );
  });

  it('GoToMain을 클릭하면 navigate이벤트가 호출됩니다.', () => {
    const { getByText } = renderRetrospectContainer();

    fireEvent.click(getByText('GoToMain'));

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });
});
