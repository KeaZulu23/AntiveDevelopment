import React from "react";
import {Routes, Route} from 'react-router-dom'
import posthog from 'posthog-js' // new
import CookieBanner from "./CookieBanner";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import Pricing from "./routes/Pricing";
import Contact from "./routes/Contact";
import TOC from "./routes/TOC";
import Services from "./routes/Services";
import Graphicdesign from "./routes/Graphic Design";
import Fullstack from "./routes/Full Stack";
import NativeApp from "./routes/Native Mobile";
import Ecommerce from "./routes/ecommerce";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/termsconditions' element={<TOC />} />
        <Route path='/services' element={<Services />} />
        <Route path='/graphicdesign' element={<Graphicdesign />} />
        <Route path='/fullstack' element={<Fullstack />} />
        <Route path='/nativeapp' element={<NativeApp />} />
        <Route path='/ecommerce' element={<Ecommerce />} />
      </Routes>
    </>
  );
}

export default App;