import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className="new_about_us_container">
    <div className="new_about_us_container_inside">
      <div className="new_about_us_content_element">
        <div className="new_about_us_element_title">About Us</div>
        <div className="new_about_us_element_desc">
          CTV is a reliable telecommunications provider, specializing in
          inter-regional, national, and last mile fiber connectivity. We
          bridge the digital divide and empower business and organizations
          across Africa with seamless connectivity.
        </div>
        <div className="new_about_us_element_read_more"><a href="/aboutus">Read More</a></div>
      </div>
      <div className="new_about_us_content_image">
          <div className="new_about_us_content_image_inside">
              <img src={require("../../../assets/new/HP-About us@4x-100.jpg")} alt="" className="new_about_us_content_image_img"/>
          </div>    
      </div>


      <div className="under_row new_about_us_content_image">
          <div className="new_about_us_content_image_inside">
              <img src={require("../../../assets/new/Hp-Solutions@4x-100.jpg")} alt="" className="new_about_us_content_image_img"/>
          </div>        
      </div>
      <div className="under_row our_promise_new new_about_us_content_element">
        <div className="new_about_us_element_title">Our Solutions</div>
        <div className="new_about_us_element_desc new_desc_color">
          At CTV Business, we are pursuing a mutli-offerings strategy in the
          connectivity and communications space. Leveraging our strengths, we
          build superior partner relationships and offer better business
          solutions. This ofcourse, not only establishes a winning presence
          for us but it helps us enable our clients to have better
          relation-ships with their end-customers and user.
        </div>
        <div className="new_about_us_element_read_more about_us_read_more"><a href="/solutions">Read More</a></div>
      </div>


      <div className="under_column our_promise_new new_about_us_content_element">
        <div className="new_about_us_element_title">Our Solutions</div>
        <div className="new_about_us_element_desc new_desc_color">
          At CTV Business, we are pursuing a mutli-offerings strategy in the
          connectivity and communications space. Leveraging our strengths, we
          build superior partner relationships and offer better business
          solutions. This ofcourse, not only establishes a winning presence
          for us but it helps us enable our clients to have better
          relation-ships with their end-customers and user.
        </div>
        <div className="new_about_us_element_read_more about_us_read_more"><a href="/solutions">Read More</a></div>
      </div>
      <div className="under_column new_about_us_content_image">
          <div className="new_about_us_content_image_inside">
              <img src={require("../../../assets/new/Hp-Solutions@4x-100.jpg")} alt="" className="new_about_us_content_image_img"/>
          </div>        
      </div>


      <div className="new_about_us_content_element">
        <div className="new_about_us_element_title">Our Edge</div>
        <div className="new_about_us_element_desc">
          Discover the competitive edge of CTV's data centre services tailored
          for enterprises, ISPs, and communication service providers in
          Tanzania. Our secure facility ensures seamless connectivity while
          safeguarding your critical infrastructure.
        </div>
        <div className="new_about_us_element_read_more"><a href="/ouredge">Read More</a></div>
      </div>
      <div className="new_about_us_content_image">
          <div className="new_about_us_content_image_inside">
              <img src={require("../../../assets/new/Hp-edge@4x-100.jpg")} alt="" className="new_about_us_content_image_img"/>
          </div>        
      </div>
    </div>
  </div>
  );
};

export default AboutUs;
