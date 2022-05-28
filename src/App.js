import React from "react";
import {Routes, Route} from 'react-router-dom'

import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import Pricing from "./routes/Pricing";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;