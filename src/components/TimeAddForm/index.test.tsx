import { fireEvent, render } from '@testing-library/react';

import { Mode } from 'typings/time';

import TimeAddForm from '.';

describe('TimeAddForm', () => {
  const onChange = jest.fn();

  const onClick = jest.fn();

  const optionHandler = jest.fn();

  const renderTimeAddForm = () => {
    return render(
      <TimeAddForm
        onChange={onChange}
        addTime={''}
        onClick={onClick}
        mode={Mode.Focus}
        isOption={true}
        optionHandler={optionHandler}
      />
    );
  };

  const renderTimeAddFormWithOptionFalse = () => {
    return render(
      <TimeAddForm
        onChange={onChange}
        addTime={''}
        onClick={onClick}
        mode={Mode.Focus}
        isOption={false}
        optionHandler={optionHandler}
      />
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

  describe('옵션 버튼을 누르면', () => {
    it('optionHandler가 호출됩니다.', () => {
      const { getByText } = renderTimeAddFormWithOptionFalse();

      fireEvent.click(getByText('options'));

      expect(optionHandler).toBeCalled();
    });
  });

  describe('등록 버튼을 누르면', () => {
    it('onClick이 호출됩니다.', () => {
      const { getByText } = renderTimeAddForm();

      fireEvent.click(getByText('등록'));

      expect(onClick).toBeCalled();
    });
  });

  describe('Mode가 Focus이면', () => {
    it('배경컬러가 #6aa789가 됩니다.', () => {
      const { container } = renderTimeAddForm();

      expect(container).toHaveStyle('background: rgba(106, 167, 137');
    });
  });

  describe('Mode가 Break이면', () => {
    it('배경컬러가 #795a3e가 됩니다.', () => {
      const { container } = render(
        <TimeAddForm
          onChange={onChange}
          addTime={''}
          onClick={onClick}
          mode={Mode.Break}
          isOption={true}
          optionHandler={optionHandler}
        />
      );

      expect(container).toHaveStyle('background : rgba(121, 90, 62)');
    });
  });
});
