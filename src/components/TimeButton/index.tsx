import { FC } from 'react';

import styled from '@emotion/styled';

import { SelectableTime } from 'typings';

const Button = styled.button({
  width: '5em',

  margin: '1rem',
  padding: '2em 0',

  border: '6px solid #EDDFB3',
  borderRadius: '50%',

  fontSize: '1rem',
  textAlign: 'center',
  wordBreak: 'break-all',

  color: '#CA955C',

  '&:hover': {
    fontSize: '1.5rem',
    color: '#876445',
  },
});

const TimeButton: FC<SelectableTime> = ({ time, onClick }) => {
  return (
    <>
      <Button onClick={() => onClick(time)}>{time}</Button>
    </>
  );
};

export default TimeButton;
