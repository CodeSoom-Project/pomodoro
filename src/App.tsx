import { Route, Routes } from 'react-router-dom';

import { Global } from '@emotion/react';

import SelectMode from 'pages/SelectMode';

import reset from 'styles/reset';

function App() {
  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route path="/" element={<SelectMode />} />
      </Routes>
    </>
  );
}

export default App;
