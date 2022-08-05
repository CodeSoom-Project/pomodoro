import { FC, Fragment, useEffect } from 'react';

import { setEndTime, timer } from 'slice/time';

import { useDispatch } from 'react-redux';
interface Times {
  times: string[];
}

const TimeSelectContainer: FC<Times> = ({ times }) => {
  const dispatch = useDispatch();

  const end = Math.floor(new Date().getTime() / 1000 + 1500);

  useEffect(() => {
    setInterval(() => {
      const now = Math.floor(new Date().getTime() / 1000);
      dispatch(timer(now));
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch(setEndTime(end));
  }, []);

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
