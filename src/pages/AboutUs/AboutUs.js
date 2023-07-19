import React from 'react';
import Empowering from '../../components/AboutUs/Empowering/Empowering';
import InfoAboutUs from '../../components/AboutUs/InfoAboutUs/InfoAboutUs';
import Navbar from '../../components/Navbar/Navbar';
import "./aboutus.css";
import TanzaniaInfo from '../../components/AboutUs/TanzaniaInfo/TanzaniaInfo';

const AboutUs = () => {
  return (
    <div className='AboutUs'>
        <Navbar/>
        <Empowering/>
        <InfoAboutUs/>
        <TanzaniaInfo/>
    </div>
  )
}

export default AboutUs;