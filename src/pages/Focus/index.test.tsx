import { render } from '@testing-library/react';

import { times } from 'common/times';
import { MemoryRouter } from 'react-router-dom';

import Focus from '.';

jest.mock('react-redux');

describe('Focus', () => {
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
