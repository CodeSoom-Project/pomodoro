import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('버튼이 보여집니다.', () => {
    const { getByText } = render(<App />);

    expect(getByText('Focus')).not.toBeNull();
    expect(getByText('Break')).not.toBeNull();
  });
});
