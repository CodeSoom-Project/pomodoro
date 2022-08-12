import TimeButton from 'components/TimeButton';
import { FC, Fragment } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { Times } from 'typings';

import { setEnd } from 'utils';

const TimeSelectContainer: FC<Times> = ({ times }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isFocus = pathname === '/focus';

  const navigateHandler = () => {
    if (pathname === '/focus') {
      navigate('/break');
      return;
    }

    navigate('/focus');
  };

  const handleSetEnd = (selectedTime: string) => {
    if (selectedTime === 'Break' || selectedTime === 'Focus') {
      navigateHandler();
      return;
    }

    navigate('/viewtimes', { state: setEnd(selectedTime) });
  };

  return (
    <>
      {times.map((time, idx) => (
        <Fragment key={idx}>
          <TimeButton time={time} onClick={handleSetEnd} />
        </Fragment>
      ))}
      <TimeButton time={isFocus ? 'Break' : 'Focus'} onClick={handleSetEnd} />
    </>
  );
};

export default TimeSelectContainer;
