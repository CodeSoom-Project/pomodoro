import { FC } from 'react';

import { RemainTime } from 'typings';

const Time: FC<RemainTime> = ({ remainTime }) => {
  return <div>{remainTime}</div>;
};

export default Time;
