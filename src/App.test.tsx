import { RootState } from 'store/reducer';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import { initialState } from 'slice/time';
import { retroSpectInitialState } from 'slice/retrospect';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  const times = initialState.times;

  beforeEach(() => {
    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

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

  const renderApp = (path: string) => {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    );
  };

  it('path가 / 일 때', () => {
    const { container } = renderApp('/');

    expect(container).toHaveTextContent('Focus');
    expect(container).toHaveTextContent('Break');
  });

  it('path가 /focus 일 때', () => {
    const { container } = renderApp('/focus');

    times.forEach(item => expect(container).toHaveTextContent(item));
  });

  it('path가 /break 일 때', () => {
    const { container } = renderApp('/break');

    times.forEach(item => expect(container).toHaveTextContent(item));
  });
});
