import { times } from 'common/times';

import TimeSelectContainer from 'containers/TimeSelectContainer';

import TimeSelectHeaders from 'styles/TimeSelectHeaders';
import TimeSelectLayouts from 'styles/TimeSelectLayouts';
import ButtonWrapper from 'styles/ButtonWrapper';

const Break = () => {
  return (
    <TimeSelectLayouts background="#876445">
      <TimeSelectHeaders>Break</TimeSelectHeaders>
      <ButtonWrapper>
        <TimeSelectContainer times={times} />
      </ButtonWrapper>
    </TimeSelectLayouts>
  );
};

export default Break;
