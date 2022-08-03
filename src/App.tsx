import { Global } from '@emotion/react';

import SelectMode from 'pages/SelectMode';

import reset from 'styles/reset';

function App() {
  return (
    <>
      <Global styles={reset} />
      <SelectMode />
    </>
  );
}

export default App;
