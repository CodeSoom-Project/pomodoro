import { Route, Routes } from 'react-router-dom';

import { Global } from '@emotion/react';

import reset from 'styles/reset';

import SelectMode from 'pages/SelectMode';
import Focus from 'pages/Focus';

function App() {
  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route path="/" element={<SelectMode />} />
        <Route path="/focus" element={<Focus />} />
      </Routes>
    </>
  );
}

export default App;
