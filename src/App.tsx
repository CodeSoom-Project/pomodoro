import { Route, Routes } from 'react-router-dom';

import { Global } from '@emotion/react';

import reset from 'styles/reset';

import SelectMode from 'pages/SelectMode';
import Focus from 'pages/Focus';
import Break from 'pages/Break';
import ViewTimes from 'pages/ViewTimes';

function App() {
  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route path="/" element={<SelectMode />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/break" element={<Break />} />
        <Route path="/viewtimes" element={<ViewTimes />} />
      </Routes>
    </>
  );
}

export default App;
