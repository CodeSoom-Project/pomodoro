import { render } from '@testing-library/react';

import RetrospectModal from '.';

describe('RetrospectModal', () => {
  const renderRetrospectModal = () => {
    return render(<RetrospectModal />);
  };

  it('Input이 보여집니다.', () => {
    const { getByPlaceholderText } = renderRetrospectModal();

    expect(getByPlaceholderText('간단한 회고를 작성해주세요.')).not.toBeNull();
  });
});
