import React from 'react';
import Empowering from '../../components/AboutUs/Empowering/Empowering';
import InfoAboutUs from '../../components/AboutUs/InfoAboutUs/InfoAboutUs';
import Navbar from '../../components/Navbar/Navbar';
import "./aboutus.css";
import TanzaniaInfo from '../../components/AboutUs/TanzaniaInfo/TanzaniaInfo';
import Footer from '../../components/Footer/Footer';
import InfoBlock1 from '../../components/Home/InfoBlock1/InfoBlock1';

const AboutUs = () => {
  return (
    <div className='AboutUs'>
        <Empowering/>
        <InfoAboutUs/>
        <InfoBlock1/>
        <TanzaniaInfo/>
        <Footer/>
    </div>
  )
}

export default AboutUs;