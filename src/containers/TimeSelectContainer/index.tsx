import { FC, Fragment } from 'react';

import { useNavigate } from 'react-router-dom';

import { setEnd } from 'utils';
interface Times {
  times: string[];
}

const TimeSelectContainer: FC<Times> = ({ times }) => {
  const navigate = useNavigate();

  const handleSetEnd = (seconds: string) => {
    if (Number(seconds)) {
      navigate('/viewtimes', { state: setEnd(seconds) });
    }
  };

  return (
    <>
      {times.map((time, idx) => (
        <Fragment key={idx}>
          <button onClick={() => handleSetEnd(time)}>{time}</button>
        </Fragment>
      ))}
    </>
  );
};

export default TimeSelectContainer;
