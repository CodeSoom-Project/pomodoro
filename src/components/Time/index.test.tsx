import { render, fireEvent } from '@testing-library/react';

import Time from '.';

describe('Time', () => {
  const endPomodoro = jest.fn();

  const renderTime = () => {
    return render(<Time remainTime="14 : 33" endPomodoro={endPomodoro} />);
  };

  it('전달받은 시간이 렌더링 됩니다.', () => {
    const { container } = renderTime();

    expect(container).toHaveTextContent('14 : 33');
  });

  it('일정 종료 버튼을 누르면 endPomodoro가 호출됩니다.', () => {
    const { getByText } = renderTime();

    fireEvent.click(getByText('일정 종료'));

    expect(endPomodoro).toBeCalled();
  });
});
