import TimeButton from 'components/TimeButton';
import { FC, Fragment } from 'react';

import { useNavigate } from 'react-router-dom';

import { Times } from 'typings';

import { setEnd } from 'utils';

const TimeSelectContainer: FC<Times> = ({ times }) => {
  const navigate = useNavigate();

  const handleSetEnd = (seconds: string) => {
    navigate('/viewtimes', { state: setEnd(seconds) });
  };

  return (
    <>
      {times.map((time, idx) => (
        <Fragment key={idx}>
          <TimeButton time={time} onClick={handleSetEnd} />
        </Fragment>
      ))}
    </>
  );
};

export default TimeSelectContainer;
