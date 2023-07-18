import React from 'react';
import "./otherBrands.css"

const OtherBrands = () => {
  return (
    <div className="OtherBrands_Home">
        <div className="innerOtherBrands_Home">
            <div className="otherBrandsTitle_Home">
                Our Other Brands
            </div>
            <div className="other_brands_home">
                <div className="brand1_block">
                    <img className='brand1_home' src={require("../../../assets/Tanzania banner.png")} alt="" />
                </div>
                <div className="brand2_block">
                    <img className='brand2_home' src={require("../../../assets/Faiba Fasta Banner.png")} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OtherBrands