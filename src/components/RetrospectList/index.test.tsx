import { render } from '@testing-library/react';

import { retrospect } from 'fixtures/retrospect';

import RetrospectList from '.';

describe('RetrospectList', () => {
  it('retrospect가 보여집니다.', () => {
    const { container } = render(<RetrospectList retrospect={retrospect} />);

    expect(container).toHaveTextContent(retrospect.contents);
  });
});
