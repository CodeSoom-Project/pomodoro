import React, { Fragment, useCallback, useState } from 'react';

import styled from '@emotion/styled';

import { useNavigate, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducer';

import { setMode, setTimes } from 'slice/time';

import { setEnd } from 'utils';

import TimeAddForm from 'components/TimeAddForm';
import TimeButton from 'components/TimeButton';

import { Mode } from 'typings/time';

const Wrapper = styled.div`
  max-width: 25rem;
`;

const TimeSelectContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addTime, setAddTime] = useState('');

  const { pathname } = useLocation();

  const isFocus = pathname === Mode.Focus;

  const { times, mode } = useSelector((state: RootState) => state.time);

  const navigateHandler = () => {
    if (pathname === Mode.Focus) {
      dispatch(setMode(Mode.Break));

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

  const timeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const regex = /^[0-9\b]{0,13}$/;
    if (regex.test(value)) {
      setAddTime(value);
    }
  };

  const addTimeHandler = useCallback((time: string) => {
    dispatch(setTimes(time));
  }, []);

  return (
    <Wrapper>
      <TimeAddForm
        mode={mode}
        onClick={addTimeHandler}
        addTime={addTime}
        onChange={timeHandler}
      />
      <>
        {times.map((time, idx) => (
          <Fragment key={idx}>
            <TimeButton time={time} onClick={handleSetEnd} />
          </Fragment>
        ))}
      </>
      <TimeButton time={isFocus ? 'Break' : 'Focus'} onClick={handleSetEnd} />
    </Wrapper>
  );
};

export default TimeSelectContainer;
