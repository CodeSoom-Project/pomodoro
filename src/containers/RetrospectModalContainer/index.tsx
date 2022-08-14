import { FormEvent, useCallback, useState } from 'react';

import styled from '@emotion/styled';

import RetrospectModal from 'components/RetrospectModal';

import { useDispatch } from 'react-redux';
import { addRetrospect } from 'slice/retrospect';

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

  const [retrospect, setRetrospect] = useState({
    id: 0,
    contents: '',
  });

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
  }, [dispatch, retrospect]);

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
