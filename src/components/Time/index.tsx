import { FC } from 'react';

import { RemainTime } from 'typings';

const Time: FC<RemainTime> = ({
  remainTime,
  endPomodoro,
  isPause,
  pause,
  resume,
}) => {
  return (
    <>
      <div>{remainTime}</div>
      <button onClick={endPomodoro}>일정 종료</button>
      {!isPause && <button onClick={pause}>일시 정지</button>}
      {isPause && <button onClick={resume}>재개</button>}
    </>
  );
};

export default Time;
