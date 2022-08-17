import { FormEvent, useCallback, useState } from 'react';

import { useNavigate } from 'react-router';

import { useDispatch } from 'react-redux';
import { addRetrospect } from 'slice/retrospect';
import { setMode } from 'slice/time';

import styled from '@emotion/styled';

import RetrospectModal from 'components/RetrospectModal';

import { Mode } from 'typings/time';

const CenterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40em;
  margin: 20rem auto;
  padding: 3rem;

  border: 2px solid black;
  border-radius: 2rem;
  z-index: 4;
`;

const RetrospectModalContiner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [retrospect, setRetrospect] = useState({
    id: 0,
    contents: '',
  });

  const handleNavigate = () => {
    dispatch(setMode(Mode.Break));

    navigate(Mode.Break);
  };

  const handleChangeRetrospect = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setRetrospect({
        ...retrospect,
        contents: event.currentTarget.value,
      });
    },
    [setRetrospect]
  );

  const handleSubmitRetrospect = useCallback(() => {
    dispatch(addRetrospect(retrospect));
    handleNavigate();
  }, [dispatch, retrospect, handleNavigate]);

  return (
    <CenterLayout>
      <div>
        <h1>집중 시간동안 어떤 것을 하셨나요?</h1>
        <RetrospectModal
          onChangeRetrospect={handleChangeRetrospect}
          submitRetrospect={handleSubmitRetrospect}
          retrospect={retrospect}
        />
      </div>
    </CenterLayout>
  );
};

export default RetrospectModalContiner;
