import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
const Home: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Footer />
    </div>
  );
};

export default Home;