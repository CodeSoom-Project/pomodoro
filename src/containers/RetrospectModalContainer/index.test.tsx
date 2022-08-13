import { render } from '@testing-library/react';

import RetrospectModalContiner from '.';

describe('RetrospectModalContainer', () => {
  const renderRetrospectModalContainer = () => {
    return render(<RetrospectModalContiner />);
  };
  it('헤더가 나타납니다.', () => {
    const { container } = renderRetrospectModalContainer();

    expect(container).toHaveTextContent('집중 시간동안 어떤 것을 하셨나요?');
  });
});
