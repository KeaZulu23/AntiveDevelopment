import React from 'react'


import Navbar from '../components/Navbar.jsx';
import Termsconditions from '../components/terms/toc.jsx';
import Footer from '../components/Footer';

const TOC = () => {
  return (
    <div>
        <Navbar />
        <Termsconditions />
        <Footer />
    </div>
  );
}

export default TOC;
