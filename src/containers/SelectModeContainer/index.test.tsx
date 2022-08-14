import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SelectModeContainer from '.';
import { useDispatch } from 'react-redux';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('SelectModeContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);
  });

  const renderSelectModeContainer = () => {
    return render(
      <MemoryRouter>
        <SelectModeContainer />
      </MemoryRouter>
    );
  };

  it('버튼이 렌더링됩니다.', () => {
    const { getByText } = renderSelectModeContainer();

    expect(getByText('Focus')).not.toBeNull();
    expect(getByText('Break')).not.toBeNull();
  });

  it('Foucs로 이동합니다', () => {
    const { getByText } = renderSelectModeContainer();

    fireEvent.click(getByText('Focus'));

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });

  it('Break로 이동합니다', () => {
    const { getByText } = renderSelectModeContainer();

    fireEvent.click(getByText('Break'));

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });
});
