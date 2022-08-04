import { times } from 'common/times';

import TimeSelectContainer from 'containers/TimeSelectContainer';

const Break = () => {
  return (
    <>
      <TimeSelectContainer times={times} />
    </>
  );
};

export default Break;
