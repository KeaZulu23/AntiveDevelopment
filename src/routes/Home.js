import React from 'react'

import About from '../components/About';
import Developers from '../components/Developers';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Subscribe from '../components/Subscribe';
import Client from '../components/Client';
import CookieBanner from '../CookieBanner';
import Navbar from '../components/Navbar.jsx';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <CookieBanner />
        <About />
        <Client />
        <Developers />
        <Subscribe />
        <Footer />
    </div>
  );
}

export default Home;
