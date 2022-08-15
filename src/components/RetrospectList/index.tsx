import { FC } from 'react';

import { Retrospect } from 'typings';

const RetrospectList: FC<Retrospect> = ({ retrospect }) => {
  return (
    <>
      <p>{retrospect.contents}</p>
    </>
  );
};

export default RetrospectList;
