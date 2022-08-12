import { fireEvent, render, waitFor } from '@testing-library/react';

import { times } from 'common/times';
import { act } from 'react-dom/test-utils';

import { MemoryRouter } from 'react-router-dom';

import TimeSelectContainer from '.';

jest.mock('react-redux');

describe('TimeSelectContainer', () => {
  const renderTimeSelectContainer = ({ path }: any) => {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <TimeSelectContainer times={times} />
      </MemoryRouter>
    );
  };

  it('시간 선택 버튼이 보여집니다.', () => {
    const { container } = renderTimeSelectContainer({ path: '/foucs' });

    times.forEach(time => expect(container).toHaveTextContent(time));
  });

  describe('path가 /focus 일 때', () => {
    it('/break로 넘어갑니다.', () => {
      const { getByText, container } = renderTimeSelectContainer({
        path: '/focus',
      });

      const skip = getByText('Break');

      fireEvent.click(skip);

      waitFor(() => {
        expect(container).toHaveTextContent('Break');
      });
    });
  });

  describe('path가 /break 일 때', () => {
    it('/focus로 넘어갑니다.', () => {
      const { getByText, container } = renderTimeSelectContainer({
        path: '/break',
      });

      const skip = getByText('Focus');

      fireEvent.click(skip);

      waitFor(() => {
        expect(container).toHaveTextContent('Focus');
      });
    });
  });

  describe('시간을 선택하면', () => {
    it('남은 시간이 보여집니다.', () => {
      const { container, getByText } = renderTimeSelectContainer({
        path: '/break',
      });

      const fiveMinutes = getByText(5);

      fireEvent.click(fiveMinutes);

      waitFor(() => {
        expect(container).toHaveTextContent('05 : 00');
      });
    });
  });
});
