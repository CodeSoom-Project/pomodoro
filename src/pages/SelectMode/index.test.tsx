import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import SelectMode from '.';

describe('SelectMode', () => {
  it('버튼들이 보여집니다.', () => {
    const { getByText } = render(
      <MemoryRouter>
        <SelectMode />
      </MemoryRouter>
    );

    expect(getByText('Focus')).not.toBeNull();
    expect(getByText('Break')).not.toBeNull();
  });
});
