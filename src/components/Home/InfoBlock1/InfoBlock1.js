import React from 'react';
import "./infoblock.css"

const InfoBlock1 = () => {
  return (
    <div className="infoBlock1">
        <div className="innerInfoBlock1">
            <div className="leftBlock1">
                <img className='leftBlock1Img' src={require("../../../assets/Block 1-100.jpg")} alt="" />
                <img className='leftBlock1Img' src={require("../../../assets/Block 2-100.jpg")} alt="" />
                <img className='leftBlock1Img' src={require("../../../assets/Block 3-100.jpg")} alt="" />
                <img className='leftBlock1Img' src={require("../../../assets/Block 4-100.jpg")} alt="" />
            </div>
            <div className="rightBlock1">
                <img className='rightBlock1Img' src={require("../../../assets/image-01.png")} alt="" />
            </div>
        </div>
    </div>
  )
}

export default InfoBlock1