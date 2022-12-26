import React from 'react'


import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';

import HeroPricing from '../components/pricing-components/heroPricing.jsx';
import PricingCTA from '../components/pricing-components/pricingCTA.jsx';

const Pricing = () => {
  return (
    <div>
        <Navbar />
        {/* <HeroPricing />
        <PricingCTA /> */}
        <Footer />
    </div>
  );
}

export default Pricing;
