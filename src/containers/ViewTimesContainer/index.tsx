import { FC, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { timer, setEndTime } from 'slice/time';

import { setNow } from 'utils';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/reducer';

const ViewTimesContainer = () => {
  const dispatch = useDispatch();

  const { state } = useLocation();

  const { remainTime } = useSelector((state: RootState) => state.time);

  const cleanUpRemainTime = () => {
    dispatch(setEndTime(0));
  };

  useEffect(() => {
    setInterval(() => {
      dispatch(timer(setNow()));
    }, 1000);

    return () => cleanUpRemainTime();
  }, []);

  useEffect(() => {
    dispatch(setEndTime(state));
  }, []);

  return (
    <>
      <div>
        <p>{remainTime}</p>
      </div>
    </>
  );
};

export default ViewTimesContainer;
