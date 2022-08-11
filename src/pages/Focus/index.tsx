import { times } from 'common/times';

import TimeSelectContainer from 'containers/TimeSelectContainer';

const Focus = () => {
  return (
    <>
      <h1>Focus</h1>
      <TimeSelectContainer times={times} />
    </>
  );
};

export default Focus;
