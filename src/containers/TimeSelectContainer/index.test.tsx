import { RootState } from 'store/reducer';

import { fireEvent, render, waitFor } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { initialState } from 'slice/time';
import { retroSpectInitialState } from 'slice/retrospect';

import { MemoryRouter } from 'react-router-dom';

import TimeSelectContainer from '.';

describe('TimeSelectContainer', () => {
  const dispatch = jest.fn();

  const times = initialState.times;

  beforeEach(() => {
    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation(
      (state: (arg: RootState) => void) =>
        state({
          time: {
            ...initialState,
          },
          retrospect: retroSpectInitialState,
        })
    );
  });

  const renderTimeSelectContainer = ({ path }: any) => {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <TimeSelectContainer />
      </MemoryRouter>
    );
  };

  it('시간 선택 버튼이 보여집니다.', () => {
    const { container } = renderTimeSelectContainer({ path: '/foucs' });

    times.forEach(time => expect(container).toHaveTextContent(time));
  });

  describe('숫자를 입력하면', () => {
    it('onChange가 호출됩니다.', () => {
      const { getByPlaceholderText, container } = renderTimeSelectContainer({
        path: '/focus',
      });

      const inputEl = getByPlaceholderText('시간(분)을 입력해주세요.');

      fireEvent.change(inputEl, { target: { value: '2' } });

      expect(container).toHaveTextContent('2');
    });
  });

  describe('문자를 입력하면', () => {
    it('onChange가 호출되지 않습니다.', () => {
      const { getByPlaceholderText, container } = renderTimeSelectContainer({
        path: '/focus',
      });

      const inputEl = getByPlaceholderText('시간(분)을 입력해주세요.');

      fireEvent.change(inputEl, { target: { value: '없음' } });

      expect(container).not.toHaveTextContent('없음');
    });
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

  describe('등록 버튼을 누르면', () => {
    it('setTime 디스패치가 호출됩니다.', () => {
      const { getByText } = renderTimeSelectContainer({ path: '/break' });

      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalledWith({
        type: 'time/setTimes',
        payload: '',
      });
    });
  });
});
