import React from 'react'


import Navbar from '../components/Navbar.jsx';
import ServicesCom from '../components/services-components/services.jsx';
import TechStack from '../components/services-components/techstack.jsx';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div>
        <Navbar />
        <ServicesCom />
        <TechStack />
        <Footer />
    </div>
  );
}

export default Services;
