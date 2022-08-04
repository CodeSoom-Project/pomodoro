import { render } from '@testing-library/react';

import { times } from 'common/times';

import TimeSelectContainer from '.';

describe('TimeSelectContainer', () => {
  it('시간 선택 버튼이 보여집니다.', () => {
    const { container } = render(<TimeSelectContainer times={times} />);

    times.forEach(time => expect(container).toHaveTextContent(time));
  });
});
