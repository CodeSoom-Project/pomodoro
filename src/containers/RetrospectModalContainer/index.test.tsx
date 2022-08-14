import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router';

import RetrospectModalContiner from '.';

describe('RetrospectModalContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
  });

  const renderRetrospectModalContainer = () => {
    return render(
      <MemoryRouter>
        <RetrospectModalContiner />
      </MemoryRouter>
    );
  };
  it('헤더가 나타납니다.', () => {
    const { container } = renderRetrospectModalContainer();

    expect(container).toHaveTextContent('집중 시간동안 어떤 것을 하셨나요?');
  });

  it('textArea에 "회고"를 입력하면 value가 회고가됩니다.', () => {
    const { getByRole, container } = renderRetrospectModalContainer();

    fireEvent.change(getByRole('textbox'), { target: { value: '회고' } });

    expect(container).toHaveTextContent('회고');
  });

  it('작성하기 버튼을 클릭하면 dispatch가 호출됩니다.', () => {
    const { getByText } = renderRetrospectModalContainer();

    fireEvent.click(getByText('작성하기'));

    expect(dispatch).toBeCalledWith({
      type: 'retrospect/addRetrospect',
      payload: { contents: '', id: 0 },
    });
  });
});
