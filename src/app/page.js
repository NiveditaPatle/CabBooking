"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Contact from '@/components/Contact/Contact';
import BestCabs from '@/components/BestCabs/BestCabs';
import About from '@/components/About/About';
import AppStore from '@/components/AppStore/AppStore';
import Testmonial from '@/components/Testmonial/Testmonial';
// import Footer from '@/components/Footer/Footer';

const page = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <div className='dark:bg-dark dark:text-white'>
      {/* <Navbar/> */}
      <Hero/>
      <Contact/>
      <BestCabs/>
      <About/>
      <AppStore/>
      <Testmonial/>
      {/* <Footer/> */}
    </div>
  )
}

export default page