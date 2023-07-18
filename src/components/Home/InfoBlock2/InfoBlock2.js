import React from 'react';
import "./infoBlock2.css"

const InfoBlock2 = () => {
  return (
    <div className="InfoBlock2">
        <div className='infoBlock2_top'>
            <img src={require("../../../assets/hP banner 02.png")} style={{width: "100%", backgroundColor: "white;"}}/>
            <div className="infoBlock2_top_button">
                Read More
            </div>
        </div>
        
        <div className="main-container">
            <div className="leftblock">
                <div className="service_heading">
                    Servicing businesses across Tanzania
                </div>
                <div className="img1">
                    <img className='inside_img1' src={require("../../../assets/Icons HP.png")} alt="icon"/>
                </div>
            </div>
            <div className="img2">
                <img className='Tanzania_img' src={require("../../../assets/Tanzania Map.png")} alt="map"/>
            </div>
        </div>
    </div>
  )
}

export default InfoBlock2