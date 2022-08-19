import { RootState } from 'store/reducer';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { initialState } from 'slice/time';
import { retroSpectInitialState } from 'slice/retrospect';

import Focus from '.';

jest.mock('react-redux');

describe('Focus', () => {
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

  const renderFocus = () => {
    return render(
      <MemoryRouter>
        <Focus />
      </MemoryRouter>
    );
  };

  it('Header가 렌더링됩니다.', () => {
    const { container } = renderFocus();

    expect(container).toHaveTextContent('Focus');
  });
  it('시간 선택 버튼이 보여집니다.', () => {
    const { container } = renderFocus();

    times.forEach(time => expect(container).toHaveTextContent(time));
  });
});
