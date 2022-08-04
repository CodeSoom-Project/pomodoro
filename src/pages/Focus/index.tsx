import { times } from 'common/times';

import TimeSelectContainer from 'containers/TimeSelectContainer';

const Focus = () => {
  return (
    <>
      <TimeSelectContainer times={times} />
    </>
  );
};

export default Focus;
