import { FC } from 'react';
import { SelectableTime } from 'typings';

const TimeButton: FC<SelectableTime> = ({ time, onClick }) => {
  return (
    <>
      <button onClick={() => onClick(time)}>{time}</button>
    </>
  );
};

export default TimeButton;
