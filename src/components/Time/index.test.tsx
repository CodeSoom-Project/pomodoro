import { render } from '@testing-library/react';

import Time from '.';

describe('Time', () => {
  it('전달받은 시간이 렌더링 됩니다.', () => {
    const { container } = render(<Time remainTime="14 : 33" />);

    expect(container).toHaveTextContent('14 : 33');
  });
});
