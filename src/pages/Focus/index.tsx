import { times } from 'common/times';

import TimeSelectContainer from 'containers/TimeSelectContainer';
import ButtonWrapper from 'styles/ButtonWrapper';

import Header from 'styles/Header';
import Layouts from 'styles/Layouts';

const Focus = () => {
  return (
    <Layouts background="#76BA99">
      <Header>Focus</Header>
      <ButtonWrapper>
        <TimeSelectContainer times={times} />
      </ButtonWrapper>
    </Layouts>
  );
};

export default Focus;
