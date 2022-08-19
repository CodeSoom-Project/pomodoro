import TimeSelectContainer from 'containers/TimeSelectContainer';

import Header from 'styles/Header';
import Layouts from 'styles/Layouts';
import ButtonWrapper from 'styles/ButtonWrapper';

const Break = () => {
  return (
    <Layouts background="#876445">
      <Header>Break</Header>
      <ButtonWrapper>
        <TimeSelectContainer />
      </ButtonWrapper>
    </Layouts>
  );
};

export default Break;
