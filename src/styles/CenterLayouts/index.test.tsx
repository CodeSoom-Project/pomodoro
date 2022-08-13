import { render } from '@testing-library/react';

import CenterLayouts from '.';

describe('ModeButton', () => {
  const renderModeButton = () => {
    return render(
      <CenterLayouts>
        <button>모드 버튼</button>
      </CenterLayouts>
    );
  };

  it('ModeButton의 children이 출력됩니다.', () => {
    const { container } = renderModeButton();

    expect(container).toHaveTextContent('모드 버튼');
  });
});
