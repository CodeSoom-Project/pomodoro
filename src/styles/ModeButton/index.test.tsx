import { render } from '@testing-library/react';

import ModeButton from '.';

describe('ModeButton', () => {
  const renderModeButton = () => {
    return render(<ModeButton>모드 버튼</ModeButton>);
  };
  it('ModeButton의 children이 출력됩니다.', () => {
    const { container } = renderModeButton();

    expect(container).toHaveTextContent('모드 버튼');
  });
});
