import React from 'react'


import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';

import HeroPricing from '../components/pricing-components/heroPricing.jsx';

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroPricing />
        <Footer />
    </div>
  );
}

export default Pricing;
