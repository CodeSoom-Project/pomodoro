import { render } from '@testing-library/react';

import TimeButton from '.';

import { MemoryRouter } from 'react-router-dom';

describe('TimeButton', () => {
  const selectTimeHandler = jest.fn();
  const renderTimeButton = () => {
    return render(
      <MemoryRouter>
        <TimeButton onClick={selectTimeHandler} time="10" />
      </MemoryRouter>
    );
  };
  it('버튼들이 보여집니다.', () => {
    const { container } = renderTimeButton();

    expect(container).toHaveTextContent('10');
  });
});
