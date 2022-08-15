import { useSelector } from 'react-redux';
import { Fragment } from 'react';

import { RootState } from 'store/reducer';

import RetrospectList from 'components/RetrospectList';

const RetrospectContainer = () => {
  const { retrospect } = useSelector((state: RootState) => state.retrospect);

  return (
    <>
      <h1>오늘의 회고 목록</h1>
      {retrospect.map((retrospect, id) => {
        return (
          <Fragment key={id}>
            <RetrospectList retrospect={retrospect} />
          </Fragment>
        );
      })}
    </>
  );
};

export default RetrospectContainer;
