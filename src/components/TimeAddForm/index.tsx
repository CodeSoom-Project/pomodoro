import styled from '@emotion/styled';

import { FC } from 'react';

import { TimeAddFormType } from 'typings';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  & > input {
    padding: 0.2rem;

    border: none;

    background: #6aa789;
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
    color: #6aa789;
  }
`;

const TimeAddForm: FC<TimeAddFormType> = ({ addTime, onChange, onClick }) => {
  return (
    <Wrapper>
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
