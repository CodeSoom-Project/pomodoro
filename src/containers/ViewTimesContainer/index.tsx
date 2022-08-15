import { useEffect, useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { RootState } from 'store/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { timer, setEndTime, setStatus, setLocation } from 'slice/time';

import { currentTimestampSeconds } from 'utils';

import RetrospectModalContiner from 'containers/RetrospectModalContainer';

import Time from 'components/Time';

import { Status } from 'typings/time';

const ViewTimesContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [abledModal, setAbledModal] = useState(false);

  const intervalId = useRef<NodeJS.Timer | undefined>(undefined);

  const { state } = useLocation() as { state: number };

  const { remainTime, location } = useSelector(
    (state: RootState) => state.time
  );

  const { status } = useSelector((state: RootState) => state.time);

  const endPomodoro = () => {
    navigate('/retrospect');
  };

  useEffect(() => {
    if (status !== Status.Initial) {
      return;
    }

    intervalId.current = setInterval(() => {
      dispatch(timer({ currentTime: currentTimestampSeconds() }));
    }, 1000);

    dispatch(setStatus(Status.Running));

    return () => {
      dispatch(setStatus(Status.Initial));
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    if (status !== Status.End) {
      return;
    }

    clearInterval(intervalId.current);

    return () => {
      dispatch(setStatus(Status.Initial));
    };
  }, [status]);

  useEffect(() => {
    dispatch(
      setEndTime({ endTime: state, currentTime: currentTimestampSeconds() })
    );
  }, []);

  useEffect(() => {
    if (status !== Status.End) return;

    if (location === '/focus') {
      return setAbledModal(true);
    }

    dispatch(setLocation('/focus'));
    navigate('/focus');
  }, [status]);

  return (
    <>
      <div>
        <Time remainTime={remainTime} endPomodoro={endPomodoro} />
      </div>
      {abledModal && <RetrospectModalContiner />}
    </>
  );
};

export default ViewTimesContainer;
