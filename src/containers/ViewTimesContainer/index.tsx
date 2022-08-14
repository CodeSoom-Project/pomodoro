import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducer';

import { timer, setEndTime } from 'slice/time';
import { setTimeEnd } from 'slice/retrospect';

import { currentTimestampSeconds } from 'utils';

import RetrospectModalContiner from 'containers/RetrospectModalContainer';

import Time from 'components/Time';

const ViewTimesContainer = () => {
  const dispatch = useDispatch();

  const { state } = useLocation() as { state: number };

  const { remainTime } = useSelector((state: RootState) => state.time);

  const { isEnd } = useSelector((state: RootState) => state.retrospect);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(timer({ currentTime: currentTimestampSeconds() }));
    }, 1000);

    if (remainTime === '00 : 00') {
      clearInterval(intervalId);
      dispatch(setTimeEnd(true));
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
      {isEnd && <RetrospectModalContiner />}
    </>
  );
};

export default ViewTimesContainer;
