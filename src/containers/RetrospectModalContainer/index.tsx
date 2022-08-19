import { FormEvent, useCallback, useState } from 'react';

import { useNavigate } from 'react-router';

import { useDispatch } from 'react-redux';
import { addRetrospect } from 'slice/retrospect';
import { setMode } from 'slice/time';

import styled from '@emotion/styled';

import RetrospectModalForm from 'components/RetrospectModalForm';

import { Mode } from 'typings/time';

import { fadeIn } from 'animation/fade';

const CenterLayout = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  min-width: 10em;
  width: 40em;
  max-width: 90%;
  height: 50%;
  min-height: 32em;
  padding: 3rem;

  border: 2px solid #ca955c;
  border-radius: 2rem;

  background-color: #eddfb3;
  z-index: 5;

  animation: ${fadeIn} 1s ease;

  & > div {
    text-align: center;
    color: #ca955c;
  }
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
        <RetrospectModalForm
          onChangeRetrospect={handleChangeRetrospect}
          submitRetrospect={handleSubmitRetrospect}
          retrospect={retrospect}
        />
      </div>
    </CenterLayout>
  );
};

export default RetrospectModalContiner;
