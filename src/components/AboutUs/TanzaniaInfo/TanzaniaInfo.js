import React from 'react';
import "./tanzaniaInfo.css"

const TanzaniaInfo = () => {
  return (
    <div className="tanzaniaInfo">
        <div className="innerTanzaniaInfo">
            <div className="main-container1">
                <div className="leftblock1">
                    <div className="service_heading1">
                        Servicing businesses across Tanzania
                    </div>
                    <div className="img11">
                        <img className='inside_img11' src={require("../../../assets/Icons HP.png")} alt="icon"/>
                    </div>
                </div>
                <div className="img21">
                    <img className='Tanzania_img1' src={require("../../../assets/Tanzania Map.png")} alt="map"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TanzaniaInfo;