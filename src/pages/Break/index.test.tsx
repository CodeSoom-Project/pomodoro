import { RootState } from 'store/reducer';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { initialState } from 'slice/time';
import { retroSpectInitialState } from 'slice/retrospect';

import { MemoryRouter } from 'react-router-dom';

import Break from '.';

jest.mock('react-redux');

describe('Break', () => {
  const times = initialState.times;
  beforeEach(() => {
    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            ...initialState,
          },
          retrospect: retroSpectInitialState,
        })
    );
  });
  const renderBreak = () => {
    return render(
      <MemoryRouter>
        <Break />
      </MemoryRouter>
    );
  };

  it('헤더가 보여집니다.', () => {
    const { container } = renderBreak();

    expect(container).toHaveTextContent('Break');
  });

  it('시간 선택 버튼이 보여집니다.', () => {
    const { container } = renderBreak();

    times.forEach(time => expect(container).toHaveTextContent(time));
  });
});
