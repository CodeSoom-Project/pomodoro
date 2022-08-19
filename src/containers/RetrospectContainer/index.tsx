import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { RootState } from 'store/reducer';

import RetrospectList from 'components/RetrospectList';

const RetrospectBox = styled.div`
  width: 40rem;
  max-width: 80%;
  height: 50vh;

  padding: 2rem;

  margin: -3rem auto;

  border-radius: 3rem;

  background: #fff5e1;
  color: #876445;

  text-align: left;
  font-size: 1.5rem;

  overflow-x: hidden;
`;

const Button = styled.button`
  display: block;
  margin: 4rem auto;
  padding: 1rem;

  border: none;
  border-radius: 1rem;

  background: #eddfb3;
  color: #876445;
`;

const RetrospectContainer = () => {
  const navigate = useNavigate();

  const { retrospect } = useSelector((state: RootState) => state.retrospect);

  const navigateHandler = () => {
    navigate('/');
  };
  return (
    <>
      <RetrospectBox>
        {retrospect.map((retrospect, id) => {
          return (
            <Fragment key={id}>
              <RetrospectList id={id} retrospect={retrospect} />
            </Fragment>
          );
        })}
      </RetrospectBox>
      <Button onClick={navigateHandler}>GoToMain</Button>
    </>
  );
};

export default RetrospectContainer;
