import { render } from '@testing-library/react';
import SelectModeContainer from '.';

describe('SelectModeContainer', () => {
  it('버튼이 렌더링됩니다.', () => {
    const { getByText } = render(<SelectModeContainer />);

    expect(getByText('Focus')).not.toBeNull();
    expect(getByText('Break')).not.toBeNull();
  });
});
