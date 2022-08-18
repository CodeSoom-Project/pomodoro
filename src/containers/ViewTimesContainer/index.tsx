import { useCallback, useEffect, useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { RootState } from 'store/reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
  timer,
  setEndTime,
  setStatus,
  setMode,
  setPause,
  setIsPause,
} from 'slice/time';

import { currentTimestampSeconds, setResumeTime } from 'utils';

import RetrospectModalContiner from 'containers/RetrospectModalContainer';

import Time from 'components/Time';

import { Mode, Status } from 'typings/time';

const ViewTimesContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const intervalId = useRef<NodeJS.Timer | undefined>(undefined);

  const { state } = useLocation() as { state: number };

  const { remainTime, mode, status, isPause, pauseTime } = useSelector(
    (state: RootState) => state.time
  );

  const endPomodoro = () => {
    navigate('/retrospect');
  };

  const pause = useCallback(() => {
    dispatch(setPause(currentTimestampSeconds()));

    clearInterval(intervalId.current);
  }, []);

  const resume = useCallback(() => {
    dispatch(setStatus(Status.Resume));
    dispatch(setIsPause(false));
  }, []);

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
    if (status !== Status.Resume) {
      return;
    }

    intervalId.current = setInterval(() => {
      dispatch(timer({ currentTime: currentTimestampSeconds() }));
    }, 1000);

    dispatch(
      setEndTime({
        endTime: setResumeTime(pauseTime.toString()),
        currentTime: currentTimestampSeconds(),
      })
    );

    dispatch(setStatus(Status.Running));

    return () => {
      dispatch(setStatus(Status.Initial));
      clearInterval(intervalId.current);
    };
  }, [isPause]);

  useEffect(() => {
    dispatch(
      setEndTime({ endTime: state, currentTime: currentTimestampSeconds() })
    );
  }, []);

  useEffect(() => {
    if (status !== Status.End) {
      return;
    }

    if (mode === Mode.Focus) {
      setOpenModal(true);
      return;
    }

    dispatch(setMode(Mode.Focus));
    navigate(Mode.Focus);

    clearInterval(intervalId.current);

    return () => {
      dispatch(setStatus(Status.Initial));
    };
  }, [status]);

  useEffect(() => {
    dispatch(setIsPause(false));
  }, []);

  return (
    <>
      <div>
        <Time
          remainTime={remainTime}
          endPomodoro={endPomodoro}
          pause={pause}
          isPause={isPause}
          resume={resume}
        />
      </div>
      {openModal && <RetrospectModalContiner />}
    </>
  );
};

export default ViewTimesContainer;
