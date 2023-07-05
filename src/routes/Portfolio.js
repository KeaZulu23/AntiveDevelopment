import React from 'react'

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';

import Client from '../components/Client';

import PortfolioAbout from '../components/portfolio-components/portfolioAbout';
import PPhotoGrid from '../components/portfolio-components/pPhotoGrid';

const Portfolio = () => {
  return (
    <div>
        <Navbar />
        {/* <Client /> */}
        <PPhotoGrid />
        <PortfolioAbout />
        <Footer />
    </div>
  );
}

export default Portfolio;