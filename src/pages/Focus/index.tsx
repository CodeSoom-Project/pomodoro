import { times } from 'common/times';

import TimeSelectContainer from 'containers/TimeSelectContainer';
import ButtonWrapper from 'styles/ButtonWrapper';

import TimeSelectHeaders from 'styles/TimeSelectHeaders';
import TimeSelectLayouts from 'styles/TimeSelectLayouts';

const Focus = () => {
  return (
    <TimeSelectLayouts background="#76BA99">
      <TimeSelectHeaders>Focus</TimeSelectHeaders>
      <ButtonWrapper>
        <TimeSelectContainer times={times} />
      </ButtonWrapper>
    </TimeSelectLayouts>
  );
};

export default Focus;
