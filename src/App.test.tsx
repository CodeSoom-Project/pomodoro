import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('헤더 문구가 보여집니다.', () => {
    const { getByText } = render(<App />);

    expect(getByText('포모도로 시간 관리')).not.toBeNull();
  });
});
