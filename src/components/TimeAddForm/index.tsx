import styled from '@emotion/styled';

import { FC } from 'react';

import { TimeAddFormType } from 'typings';

import { Mode } from 'typings/time';

const Wrapper = styled.div<{ mode: Mode }>`
  display: flex;
  justify-content: center;

  & > input {
    padding: 0.2rem;

    border: none;

    background: ${props => (props.mode === Mode.Focus ? '#6aa789' : '#795a3e')};
    caret-color: whitesmoke;
    color: whitesmoke;

    font-weight: 600;
    text-align: center;

    opacity: 0.9;
    outline: none;

    ::placeholder {
      color: whitesmoke;
    }

    :focus::placeholder {
      color: transparent;
    }
  }

  & > button {
    margin-left: 0.5rem;
    padding: 1rem;

    border-radius: 1em;
    border: none;

    background: whitesmoke;
    color: ${props => (props.mode === Mode.Focus ? '#6aa789' : '#795a3e')};
  }
`;

const TimeAddForm: FC<TimeAddFormType> = ({
  addTime,
  onChange,
  onClick,
  mode,
}) => {
  return (
    <Wrapper mode={mode}>
      <input
        value={addTime}
        placeholder="시간(분)을 입력해주세요."
        type="text"
        onChange={onChange}
        maxLength={2}
      />
      <button onClick={() => onClick(addTime)}>등록</button>
    </Wrapper>
  );
};

export default TimeAddForm;
