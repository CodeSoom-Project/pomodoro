import { Global } from '@emotion/react';

import SelectMode from 'pages/SelectMode';

import reset from 'styles/reset';

function App() {
  return (
    <>
      <Global styles={reset} />
      <h1>포모도로 시간 관리</h1>
      <SelectMode />
    </>
  );
}

export default App;
