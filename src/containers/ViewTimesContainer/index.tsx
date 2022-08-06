import { FC } from 'react';

interface RemainTime {
  remainTime: string;
}

const ViewTimesContainer: FC<RemainTime> = ({ remainTime }) => {
  return (
    <>
      <div>
        <p>{remainTime}</p>
      </div>
    </>
  );
};

export default ViewTimesContainer;
