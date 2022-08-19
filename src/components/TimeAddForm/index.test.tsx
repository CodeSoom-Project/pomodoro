import { fireEvent, render } from '@testing-library/react';

import TimeAddForm from '.';

describe('TimeAddForm', () => {
  const onChange = jest.fn();

  const onClick = jest.fn();

  const renderTimeAddForm = () => {
    return render(
      <TimeAddForm onChange={onChange} addTime={''} onClick={onClick} />
    );
  };

  describe('숫자를 입력하면', () => {
    it('onChange가 호출됩니다.', () => {
      const { getByPlaceholderText } = renderTimeAddForm();

      const inputEl = getByPlaceholderText('시간(분)을 입력해주세요.');

      fireEvent.change(inputEl, { target: { value: '2' } });

      expect(onChange).toBeCalled();
    });
  });

  describe('문자를 입력하면', () => {
    it('onChange가 호출되지 않습니다.', () => {
      const { getByPlaceholderText } = renderTimeAddForm();

      const inputEl = getByPlaceholderText('시간(분)을 입력해주세요.');

      fireEvent.change(inputEl, { target: { value: 'ㅇㅇ' } });

      expect(onChange).toBeCalled();
    });
  });

  describe('등록 버튼을 누르면', () => {
    it('onClick이 호출됩니다.', () => {
      const { getByText } = renderTimeAddForm();

      fireEvent.click(getByText('등록'));

      expect(onClick).toBeCalled();
    });
  });
});
