import { render, fireEvent } from '@testing-library/react';

import ModeButtons from '.';

describe('ModeButton', () => {
  const handleClick = jest.fn();

  const renderModeButton = () => {
    return render(<ModeButtons onClick={handleClick}>모드 버튼</ModeButtons>);
  };
  it('ModeButton의 children이 출력됩니다.', () => {
    const { container } = renderModeButton();

    expect(container).toHaveTextContent('모드 버튼');
  });

  it('클릭이벤트가 호출됩니다.', () => {
    const { getByText } = renderModeButton();

    fireEvent.click(getByText('모드 버튼'));

    expect(handleClick).toBeCalled();
  });
});
