import RetrospectContainer from 'containers/RetrospectContainer';

import Header from 'styles/Header';
import Layouts from 'styles/Layouts';

const Retrospect = () => {
  return (
    <Layouts background="#76ba99">
      <Header>Today's</Header>
      <RetrospectContainer />
    </Layouts>
  );
};

export default Retrospect;
