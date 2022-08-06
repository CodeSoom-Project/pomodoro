import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import ViewTimesContainer from 'containers/ViewTimesContainer';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/reducer';

import { timer, setEndTime } from 'slice/time';

import { setNow } from 'utils';

const ViewTimes = () => {
  const dispatch = useDispatch();

  const { state } = useLocation();

  const { remainTime } = useSelector((state: RootState) => state.time);

  useEffect(() => {
    setInterval(() => {
      dispatch(timer(setNow()));
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch(setEndTime(state));
  }, []);

  return (
    <>
      <ViewTimesContainer remainTime={remainTime} />
    </>
  );
};

export default ViewTimes;
