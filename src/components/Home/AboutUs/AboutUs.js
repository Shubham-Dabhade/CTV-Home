import React from 'react';
import "./aboutus.css"

const AboutUs = () => {
  return (
    <div className="AboutusHome">
        <div className="innerAboutUsHome">
            <div className="aboutus_segment-1_top">
                <div className="segment1_left">
                    <div className="segment1_title">
                        About Us
                    </div>
                    <div className="segment1_content">
                        <div className="segment1_content_top">
                            CTV was the first company to set-up fiber infrastructure on the ground early on. CTV as unified entity, offers highspeed Fiber Internet, Pay-TV Services, and leases capacity on its METRO fivre infrastructure, and provides point to point and point to mutli-point passive optical links to corporates and other communications.
                        </div>
                        <div className="segment1_content_bottom">
                            CTV Business is our vertical focused on corporates, enterprises, NGOs and institutes.
                        </div>
                    </div>
                    <div className="segment1_button">
                        Read More
                    </div>
                </div>
                <div className="segment1_right">
                    <img className='segment1_img' src={require("../../../assets/About Us image.png")} alt="" />
                </div>
            </div>
            <div className="aboutus_segment-2_top">
                <div className="segment2_left">
                    <div className="segment2_title">
                        Our Promise
                    </div>
                    <div className="segment2_content">
                        <div className="segment2_content_top">
                            At CTV Business, we are pursuing a mutli-offerings strategy in the connectivity and communications space. Leveraging our strengths, we build superior partner relationships and offer better business solutions. This ofcourse, not only establishes a winning presence for us but it helps us enable our clients to have better relation-ships with their end-customers and user.
                        </div>
                    </div>
                    <div className="segment2_button">
                        Read More
                    </div>
                </div>
                <div className="segment2_right">
                    <img className='segment2_img' src={require("../../../assets/Our Promise image.png")} alt="" />
                </div>
            </div>
            <div className="aboutus_segment-1_top">
                <div className="segment1_left">
                    <div className="segment1_title">
                        Our Edge
                    </div>
                    <div className="segment1_content">
                        <div className="segment1_content_top">
                            At CTV Business, we are pursuing a mutli-offerings strategy in the connectivity and communications space. Leveraging our strengths, we build superior partner relationships and offer better business solutions. This ofcourse, not only establishes a winning presence for us but it helps us enable our clients to have better relation-ships with their end-customers and user.
                        </div>
                    </div>
                    <div className="segment1_button">
                        Read More
                    </div>
                </div>
                <div className="segment1_right">
                    <img className='segment1_img' src={require("../../../assets/Our Edge image.png")} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs