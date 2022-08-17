import { FC, Fragment } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setMode } from 'slice/time';

import { setEnd } from 'utils';

import TimeButton from 'components/TimeButton';

import { Times } from 'typings';
import { Mode } from 'typings/time';

const TimeSelectContainer: FC<Times> = ({ times }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isFocus = pathname === Mode.Focus;

  const navigateHandler = () => {
    if (pathname === Mode.Focus) {
      dispatch(setMode(Mode.Focus));

      navigate(Mode.Break);
      return;
    }

    dispatch(setMode(Mode.Focus));

    navigate(Mode.Focus);
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
