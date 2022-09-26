import React, { Fragment, useCallback, useState } from 'react';

import styled from '@emotion/styled';

import { useNavigate, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducer';

import { setIsOption, setMode, setTimes } from 'slice/time';

import { setEnd } from 'utils';

import TimeButton from 'components/TimeButton';
import TimeAddForm from 'components/TimeAddForm';

import { Mode } from 'typings/time';

const Wrapper = styled.div`
  max-width: 25rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;

  & :first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
  }

  & :nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;

    margin-top: -5rem;
    margin-left: 5rem;

    font-size: 1.5rem;
  }

  & :nth-of-type(3) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 6rem;
    height: 6rem;

    margin-top: -2rem;

    font-size: 1.5rem;
  }

  & :nth-of-type(4) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 7rem;
    height: 7rem;

    margin-top: -14rem;
    margin-left: 10rem;

    font-size: 1.5rem;
  }

  & :nth-of-type(5) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 9rem;
    height: 9rem;

    margin-left: 5em;

    font-size: 1.5rem;
  }

  & :nth-of-type(6) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 9rem;
    height: 9rem;

    margin-top: -3rem;
    margin-left: 0rem;

    font-size: 1.5rem;
  }

  & :nth-of-type(7) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 10rem;
    height: 10rem;

    margin-top: -6rem;
    margin-left: 9rem;

    font-size: 2rem;
  }
`;

const TimeSelectContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addTime, setAddTime] = useState('');

  const { pathname } = useLocation();

  const isFocus = pathname === Mode.Focus;

  const { times, mode, isOption } = useSelector(
    (state: RootState) => state.time
  );

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

  const optionHandler = useCallback(() => {
    dispatch(setIsOption());
  }, [isOption]);

  return (
    <Wrapper>
      <TimeAddForm
        mode={mode}
        onClick={addTimeHandler}
        addTime={addTime}
        onChange={timeHandler}
        isOption={isOption}
        optionHandler={optionHandler}
      />
      <ButtonWrapper>
        {times.map((time, idx) => (
          <Fragment key={idx}>
            <TimeButton time={time} onClick={handleSetEnd} />
          </Fragment>
        ))}
      </ButtonWrapper>
      <TimeButton time={isFocus ? 'Break' : 'Focus'} onClick={handleSetEnd} />
    </Wrapper>
  );
};

export default TimeSelectContainer;
