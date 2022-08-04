import { render } from '@testing-library/react';

import { times } from 'common/times';

import Break from '.';

describe('Break', () => {
  it('시간 선택 버튼이 보여집니다.', () => {
    const { container } = render(<Break />);

    times.forEach(time => expect(container).toHaveTextContent(time));
  });
});
