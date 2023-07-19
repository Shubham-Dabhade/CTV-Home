import React, { useState } from 'react';
import "./infoaboutus.css";

const InfoAboutUs = () => {
  const [toggleRead, setToggleRead] = useState(false);

  const handleToggleRead =(e)=>{
    setToggleRead(!toggleRead);
  }

  return (
    <div className='InfoAboutUs'>
        <div className='InsideInfoAboutUs'>
            <div className='infoaboutus_left'>
                <div className="infoaboutus_seg1 mar">
                  CTV is a reliable telecommunications provider, specializing in inter-regional, national, and last mile fiber connectivity. We bridge the digital divide and empower business and organizations across Africa with seamless connectivity.
                </div>
                <div className="infoaboutus_seg3 mar">
                  With our extensive and partner networks, we ensure comprehensive coverage and dependable connectivity in challenging areas and mature markets. As technoloy- driven pioneers, we offer Carrier Grade Network Solutions, including Ethernet, MPLS, DIA, SDN/SD-WAN, and Cloud-Based services.
                </div>
                <div className={`infoaboutus_seg4 mar ${toggleRead ? " " : "common"}`}>
                  We understand that reliable, high-speed fiber connectivity is vital for businesses to thrive in today's digital landscape. Our experts work closely with you to implement tailored last mile fiber solutions that meet your needs and budget. We provide robust connectivity for seamless communication, fast data transfer, and improved operational efficiency. Backed by local expertise, we offer total management capabilites and a deep understanding of the African market.
                </div>
                <div className={`infoaboutus_seg5 mar ${toggleRead ? " " : "common"}`}>
                  Our mission is to provide value for money, create a secure and connected future that drives growth, enhances lives, and contributes to Tanzania's digital ecosystem.
                </div>
                <div className={`infoaboutus_seg6 mar ${toggleRead ? " " : "common"}`}>
                  Partner with CTV Tanzania for reliable and innovative last mile fiber connectivity solutions. Let us be your trusted partner in keeping your business connected and empowering your growth. Together, let's build a connecte future for Africa.
                </div>
                <div className="infoaboutus_seg2 mar" onClick={handleToggleRead}>
                  {toggleRead?"Read Less":"Read More"}
                </div>
            </div>
            <div className="infoaboutus_right">
              <div className="upper_segment_1_info">
                <img className='upper_segment_1_info_img' src={require("../../../assets/image-01.png")} alt="" />
              </div>
              <div className="bottom_segment_2_info">
                <img className='block_data' src={require("../../../assets/Block 1-100.jpg")} alt="" />
                <img className='block_data' src={require("../../../assets/Block 2-100.jpg")} alt="" />
                <img className='block_data' src={require("../../../assets/Block 3-100.jpg")} alt="" />
                <img className='block_data' src={require("../../../assets/Block 4-100.jpg")} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default InfoAboutUs;