import { times } from 'common/times';

import TimeSelectContainer from 'containers/TimeSelectContainer';

const Break = () => {
  return (
    <>
      <h1>Break</h1>
      <TimeSelectContainer times={times} />
    </>
  );
};

export default Break;
