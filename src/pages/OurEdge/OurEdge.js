import React from "react";
import "./ouredge.css";
import Footer from "../../components/Footer/Footer";

const OurEdge = () => {
  return (
    <>
      <div className="OurEdge">
        <div className="main-block">
          <div className="ouredgebanner">
            <img src={require("../../assets/new/edge/Edge banner@4x-100.jpg")} alt="" />
          </div>
          <div className="content">
            <div className="heading">
              <h1>CTV Data Centre Services:</h1>
              <p>Unleash the Power of Connectivity and Security</p>
            </div>
            <div className="para">
              <p className="no-res">
                Discover the competitive edge of CTV's data centre services
                tailored
              </p>
              <p className="no-res">
                for enterprises, ISPs, and communication service providers in
              </p>
              <p className="no-res">
                Tanzania. Our secure facility ensures seamless connectivity
                while
              </p>
              <p className="no-res">
                safeguarding your critical infrastructure.
              </p>
              <p className="new_res">
                Discover the competitive edge of CTV's data centre services
                tailored for enterprises, ISPs, and communication service
                providers in Tanzania. Our secure facility ensures seamless
                connectivity while safeguarding your critical infrastructure.
              </p>
            </div>
          </div>
        </div>
        <div className="divder">
          <p>Benefit from:</p>
        </div>
        <div className="uppersection">
          <div className="flex-item">
            <img src={require("../../assets/new/edge/Icon-01.png")} alt="" />
            <div className="content1">
              <p>Dedicated rack space</p>
              <p>prioritizing convenience and</p>
              <p>protection for your essential</p>
              <p>equipment.</p>
            </div>
          </div>
          <div className="flex-item">
            <img src={require("../../assets/new/edge/Icon-02.png")} alt="" />
            <div className="content1">
              <p>Robust systems including</p>
              <p> HVAC, fire suppression, and</p>
              <p>24/7 surveillance for</p>
              <p>reliability and security.</p>
            </div>
          </div>
          <div className="flex-item">
            <img src={require("../../assets/new/edge/Icon-03.png")} alt="" />
            <div className="content1">
              <p>Access control and</p>
              <p>fingerprint authentication</p>
              <p>for enhanced data centre</p>
              <p>security.</p>
            </div>
          </div>
          <div className="flex-item">
            <img src={require("../../assets/new/edge/Icon-04.png")} alt="" />
            <div className="content1">
              <p>Raised floors for efficient</p>
              <p>cabling and protection</p>
              <p>against water damage.</p>
            </div>
          </div>
        </div>
        <div className="lowersection">
          <div className="flex-item1">
            <img src={require("../../assets/new/edge/Icon-05.png")} alt="" />
            <div className="content2">
              <p>Power continuity with private</p>
              <p> transformers, backup</p>
              <p>generators, and hybrid solar</p>
              <p>systems with battery backups.</p>
            </div>
          </div>
          <div className="flex-item1">
            <img src={require("../../assets/new/edge/Icon-06.png")} alt="" />
            <div className="content2">
              <p>High-speed fiber connectivity</p>
              <p>to major marine cables, mobile</p>
              <p>operators, and internet</p>
              <p>exchanges.</p>
            </div>
          </div>
          <div className="flex-item1">
            <img src={require("../../assets/new/edge/Icon-07.png")} alt="" />
            <div className="content2">
              <p>Additional co-location options</p>
              <p> at Data Labs (T) Ltd and Tigo</p>
              <p>Datacenter for increased</p>
              <p>flexibility.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurEdge;
