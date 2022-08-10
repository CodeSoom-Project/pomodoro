import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { timer, setEndTime } from 'slice/time';

import { currentTimestampSeconds } from 'utils';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/reducer';
import Time from 'components/Time';

const ViewTimesContainer = () => {
  const dispatch = useDispatch();

  const { state } = useLocation() as { state: number };

  const { remainTime } = useSelector((state: RootState) => state.time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(timer({ currentTime: currentTimestampSeconds() }));
    }, 1000);

    if (remainTime === '00 : 00') {
      clearInterval(intervalId);
    }
  }, [remainTime]);

  useEffect(() => {
    dispatch(
      setEndTime({ endTime: state, currentTime: currentTimestampSeconds() })
    );
  }, []);

  return (
    <>
      <div>
        <Time remainTime={remainTime} />
      </div>
    </>
  );
};

export default ViewTimesContainer;
