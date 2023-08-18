import React from 'react';
import "./ourBrands.css";
import Footer from '../../components/Footer/Footer';

const OurBrands = () => {
  return (
    <>
      <div className="OurBrands">
          <div className="upperBanner_partner">
              <img src={require("../../assets/new/brands/Brands banner@4x-100.jpg")} alt="" className="partner_banner" />
          </div>
          <div className="lowerBanner_partner">
            <div className="inside_lower_banner_partner">
              <div className="tanzania-banner-container">
                <img src={require("../../assets/new/brands/HP-other brand tanz@4x-100.jpg")} alt="" className="tanzania_banner_partner" />
              </div>
              <div className="faiba-banner-container">
                <a href="https://faibafasta.co.tz/" className="faiba-banner-link-container" target='_blank'>
                  <img src={require("../../assets/new/brands/Hp-other brands-faiba@4x-100.jpg")} alt="" className="faiba_banner_partner" />
                </a>
              </div>
            </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default OurBrands