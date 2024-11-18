// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import UseState from './React_Hooks/UseState';
import UseEffect from './React_Hooks/UseEffect';
import UseContext from './React_Hooks/UseContext';
import UseReff from './React_Hooks/UseReff';
import UseReduserabc from './React_Hooks/UseReduserabc';
import UseLayoutEffect from './React_Hooks/UseLayoutEffect';
import UseMemo from './React_Hooks/UseMemo';
import Usecallbackabc from './React_Hooks/Usecallbackabc'
import ReactHokks from './React_Hooks/ReactHokks';
function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/reacthokks" element={<ReactHokks />} />
          <Route path="/" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-context" element={<UseContext />} />
          <Route path="/use-ref" element={<UseReff />} />
          <Route path="/use-reducer" element={<UseReduserabc />} />
          <Route path="/use-layout-effect" element={<UseLayoutEffect />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-callback" element={<Usecallbackabc  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
