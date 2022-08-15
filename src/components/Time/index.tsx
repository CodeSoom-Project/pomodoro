import { FC } from 'react';

import { RemainTime } from 'typings';

const Time: FC<RemainTime> = ({ remainTime, endPomodoro }) => {
  return (
    <>
      <div>{remainTime}</div>
      <button onClick={endPomodoro}>종료</button>
    </>
  );
};

export default Time;
