import { render } from '@testing-library/react';
import { times } from 'common/times';
import { MemoryRouter } from 'react-router';

import { useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
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
