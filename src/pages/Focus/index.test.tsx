import { render } from '@testing-library/react';

import { times } from 'common/times';

import Focus from '.';

describe('Focus', () => {
  it('시간 선택 버튼이 보여집니다.', () => {
    const { container } = render(<Focus />);

    times.forEach(time => expect(container).toHaveTextContent(time));
  });
});
