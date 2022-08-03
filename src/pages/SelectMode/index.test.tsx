import { render } from '@testing-library/react';

import SelectMode from '.';

describe('SelectMode', () => {
  it('버튼들이 보여집니다.', () => {
    const { getByText } = render(<SelectMode />);

    expect(getByText('Focus')).not.toBeNull();
    expect(getByText('Break')).not.toBeNull();
  });
});
