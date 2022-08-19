import TimeSelectContainer from 'containers/TimeSelectContainer';

import Layouts from 'styles/Layouts';
import Header from 'styles/Header';
import ButtonWrapper from 'styles/ButtonWrapper';

const Focus = () => {
  return (
    <Layouts background="#76BA99">
      <Header>Focus</Header>
      <ButtonWrapper>
        <TimeSelectContainer />
      </ButtonWrapper>
    </Layouts>
  );
};

export default Focus;
