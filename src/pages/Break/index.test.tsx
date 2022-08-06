import { render } from '@testing-library/react';

import { times } from 'common/times';

import { MemoryRouter } from 'react-router-dom';

import Break from '.';

jest.mock('react-redux');

describe('Break', () => {
  it('시간 선택 버튼이 보여집니다.', () => {
    const { container } = render(
      <MemoryRouter>
        <Break />
      </MemoryRouter>
    );

    times.forEach(time => expect(container).toHaveTextContent(time));
  });
});
