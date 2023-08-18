import React from "react";
import "./ourpromiseIn.css";

const Ourpromise = () => {
  return (
    <div className="promise">
      <div className="banner">
        <img
          className="banner-img"
          src={require("../../assets/new/Promise banner@4x-100.jpg")}
          alt="pbanner"
          style={{ width: "100%" }}
        />
      </div>
      <div className="our_promise_new_container">
        <div className="inside_our_promise_container">
          <div className="new_our_promise_upper_block">
            <div className="new_our_promise_upper_block_contents_container radialBackGround">
              <div className="different_upper_block_container_title">
                OUR PROMISE
              </div>
              <div className="different_upper_block_container_desc">
                At CTV, we take your connectivity seriously. Here's how we
                ensure a seamless experience for our customers:
              </div>
              <img src={require("../../assets/top c .png")} alt="" className="our_promise_c_image" />
            </div>
            <div className="new_our_promise_upper_block_contents_container">
              <div className="same_upper_container_title">
                Proactive Monitoring:
              </div>
              <div className="same_upper_container_desc">
                Our advanced tools constantly track network performance,
                detecting and resolving potential issues before they impact your
                connectivity.
              </div>
              <img src={require("../../assets/top c .png")} alt="" className="our_promise_c_image" />
            </div>
            <div className="new_our_promise_upper_block_contents_container">
              <div className="same_upper_container_title">
                Streamlined Ticket System:
              </div>
              <div className="same_upper_container_desc">
                Easily report concerns or service requests through our efficient
                ticket system, ensuring prompt assistance from our dedicated
                support team.
              </div>
              <img src={require("../../assets/top c .png")} alt="" className="our_promise_c_image" />
            </div>
            <div className="new_our_promise_upper_block_contents_container">
              <div className="same_upper_container_title">
                Technical Service Center (TSC):
              </div>
              <div className="same_upper_container_desc">
                Our experienced team provides proactive support and timely
                resolution of any technical issues you may encounter.
              </div>
              <img src={require("../../assets/top c .png")} alt="" className="our_promise_c_image" />
            </div>
            <div className="new_our_promise_upper_block_contents_container">
              <div className="same_upper_container_title">
                Reliable Service Level Agreements (SLAs):
              </div>
              <div className="same_upper_container_desc">
                We adhere to rigorous SLAs, guaranteeing the reliability and
                performance of our services.
              </div>
              <img src={require("../../assets/top c .png")} alt="" className="our_promise_c_image" />
            </div>
            <div className="new_our_promise_upper_block_contents_container">
              <div className="same_upper_container_title">
                Valuing Your Feedback:
              </div>
              <div className="same_upper_container_desc">
                We appreciate your input and continuously improve our services
                based on your valuable feedback.
              </div>
              <img src={require("../../assets/top c .png")} alt="" className="our_promise_c_image" />
            </div>
          </div>
          <div className="new_our_promise_lower_block radialBackGround">
            <div className="lower_block_content">
              Experience the reliability and satisfaction of seamless
              connectivity with CTV.
            </div>
            <div className="lower_block_content">
              We prioritize monitoring and managing our services to ensure your
              success.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourpromise;


