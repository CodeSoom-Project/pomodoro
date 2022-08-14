import { render, fireEvent } from '@testing-library/react';

import RetrospectModal from '.';

describe('RetrospectModal', () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleSubmit.mockImplementation(event => {
      event.preventDefault();
    });
  });

  const renderRetrospectModal = () => {
    return render(<RetrospectModal submitRetrospect={handleSubmit} />);
  };

  it('Input이 보여집니다.', () => {
    const { getByPlaceholderText } = renderRetrospectModal();

    expect(getByPlaceholderText('간단한 회고를 작성해주세요.')).not.toBeNull();
  });

  it('작성하기 버튼을 누르면 handleSubmit이 호출됩니다.', () => {
    const { getByText } = renderRetrospectModal();

    fireEvent.click(getByText('작성하기'));

    expect(handleSubmit).toBeCalled();
  });
});
