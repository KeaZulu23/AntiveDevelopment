import React from "react";
import {Routes, Route} from 'react-router-dom'

import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;