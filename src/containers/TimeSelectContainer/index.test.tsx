import { render } from '@testing-library/react';

import { times } from 'common/times';

import { MemoryRouter } from 'react-router-dom';

import TimeSelectContainer from '.';

jest.mock('react-redux');

describe('TimeSelectContainer', () => {
  it('시간 선택 버튼이 보여집니다.', () => {
    const { container } = render(
      <MemoryRouter>
        <TimeSelectContainer times={times} />
      </MemoryRouter>
    );

    times.forEach(time => expect(container).toHaveTextContent(time));
  });
});
