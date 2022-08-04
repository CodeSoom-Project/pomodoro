import { FC, Fragment } from 'react';

interface Times {
  times: string[];
}

const TimeSelectContainer: FC<Times> = ({ times }) => {
  return (
    <>
      {times.map((time, idx) => (
        <Fragment key={idx}>
          <button>{time}</button>
        </Fragment>
      ))}
    </>
  );
};

export default TimeSelectContainer;
