import React from "react";
import "./solution.css";
import Footer from "../../components/Footer/Footer";

const Solutions = () => {
  return (
    <>
      <div className="Solutions">
        <div className="banner">
          <img
            className="top-banner-img"
            src={require("../../assets/new/solutions/Solutions banner@4x-100.jpg")}
            alt=""
          />
        </div>
        <div className="bottom-content">
          <div className="bottom-seg1-content">
            At CTV Business, we are pursuing a multi-offerings strategy in the
            connectivity and communications space. Leveraging our strengths, we
            build superior partner relationships and offer better business
            solutions. This, of course, not only establishes a winning presence
            for us, but it helps us enable our clients to have better
            relationships with their end-customers and users.
          </div>
          <div className="bottom-seg2-content-container">
            {/* container1 */}
            <div className="container-blue bottom-seg2-content-container-contents">
              <div className="bottom-seg2-new-title">Fiber Connectivity:</div>
              <div className="bottom-seg2-new-bigger-desc">
                Reliable and high-speed internet access with seamless
                communication and improved efficiency.
              </div>
              <div className="bottom-seg2-new-smaller-desc">
                With our fiber connectivity solutions, we provide reliable and
                high-speed internet access directly to your business location.
                Our extensive fiber-optic network infrastructure ensures
                seamless communication, fast data transfer, and improved
                operational efficiency. Whether you are an enterprise seeking
                reliable connectivity or an ISP/telecoms service provider
                looking to enhance your offerings, our fiber solutions deliver
                exceptional performance and reliability.
              </div>
              <img
                src={require("../../assets/new/solutions/C.png")}
                alt=""
                className="bottom-seg2-solutions-c-image"
              />
              <div className="bottom-seg2-solutions-png-container">
                <img
                  src={require("../../assets/new/solutions/FIber connectivity.png")}
                  alt=""
                  className="bottom-seg2-solutions-png-image"
                />
              </div>
            </div>
            {/* container-2 */}
            <div className="container-grey bottom-seg2-content-container-contents">
              <div className="bottom-seg2-new-title">
                Wireless Connectivity:
              </div>
              <div className="bottom-seg2-new-bigger-desc">
                Extend connectivity to remote areas with flexibility and quick
                deployment.
              </div>
              <div className="bottom-seg2-new-smaller-desc">
                In areas where laying fiber-optic cables may not be feasible or
                cost-effective, our wireless connectivity solutions come into
                play. By leveraging wireless technology, we extend connectivity
                to remote or challenging locations, enabling businesses to
                overcome geographical limitations. Our wireless solutions offer
                flexibility, quick deployment, and adaptability, ensuring
                reliable internet access wherever you need it.
              </div>
              <img
                src={require("../../assets/new/solutions/C.png")}
                alt=""
                className="bottom-seg2-solutions-c-image"
              />
              <div className="bottom-seg2-solutions-png-container">
                <img
                  src={require("../../assets/new/solutions/Wireless connectivity.png")}
                  alt=""
                  className="bottom-seg2-solutions-png-image"
                />
              </div>
            </div>
            {/* container-3 */}
            <div className="container-grey bottom-seg2-content-container-contents">
              <div className="bottom-seg2-new-title">Hybrid Connectivity: </div>
              <div className="bottom-seg2-new-bigger-desc">
                Combine fiber and wireless technologies for tailored, robust,
                and scalable connectivity.
              </div>
              <div className="bottom-seg2-new-smaller-desc">
                To provide the best of both worlds, we offer hybrid connectivity
                solutions that combine the advantages of fiber and wireless
                technologies. Our hybrid solutions seamlessly integrate fiber
                and wireless components, creating a cohesive network
                infrastructure. This approach allows us to tailor the solution
                to your specific requirements, delivering robust and scalable
                connectivity. Whether you need high-speed internet access,
                seamless communication across multiple locations, or reliable
                connectivity for your customers, our hybrid solutions provide
                optimal performance and reliability.
              </div>
              <img
                src={require("../../assets/new/solutions/C.png")}
                alt=""
                className="bottom-seg2-solutions-c-image"
              />
              <div className="bottom-seg2-solutions-png-container">
                <img
                  src={require("../../assets/new/solutions/Hybrid connectivity.png")}
                  alt=""
                  className="bottom-seg2-solutions-png-image"
                />
              </div>
            </div>
            {/* container-4 */}
            <div className="container-blue bottom-seg2-content-container-contents">
              <div className="bottom-seg2-new-title">
                Dedicated Internet Access (DIA):
              </div>
              <div className="bottom-seg2-new-bigger-desc">
                Uninterrupted high-speed internet access for businesses and
                service providers.
              </div>
              <div className="bottom-seg2-new-smaller-desc">
                Experience uninterrupted connectivity that fuels the success of
                businesses and service providers with CTV's Dedicated Internet
                Access (DIA) solutions. As the backbone of reliable and
                high-speed internet access, we understand its critical
                importance. That's why we offer DIA solutions tailored to
                enterprises and service providers, ensuring seamless
                connectivity. Say goodbye to shared bandwidth and network
                congestion and say hello to a dedicated internet connection that
                empowers your operations to stay ahead in today's digital
                landscape.
              </div>
              <img
                src={require("../../assets/new/solutions/C.png")}
                alt=""
                className="bottom-seg2-solutions-c-image"
              />
              <div className="bottom-seg2-solutions-png-container">
                <img
                  src={require("../../assets/new/solutions/DIA.png")}
                  alt=""
                  className="bottom-seg2-solutions-png-image"
                />
              </div>
            </div>
            {/* container-5 */}
            <div className="container-blue bottom-seg2-content-container-contents">
              <div className="bottom-seg2-new-title">VPN Services:</div>
              <div className="bottom-seg2-new-bigger-desc">
                Secure and seamless connections for remote workers and multiple
                office locations.
              </div>
              <div className="bottom-seg2-new-smaller-desc">
                Secure and Seamless Connectivity for Your Business. Connect
                securely and effortlessly with CTV's VPN services. Our Virtual
                Private Network offers encrypted and private connections,
                ensuring your data remains confidential and your communications
                are protected. With flexible solutions for remote workers,
                multiple office locations, and secure partnerships, CTV keeps
                your business connected and safe. Trust in our expertise and
                unlock the full potential of secure remote access for your
                organization. Choose CTV VPN services for seamless connectivity
                and peace of mind.
              </div>
              <img
                src={require("../../assets/new/solutions/C.png")}
                alt=""
                className="bottom-seg2-solutions-c-image"
              />
              <div className="bottom-seg2-solutions-png-container">
                <img
                  src={require("../../assets/new/solutions/VPN.png")}
                  alt=""
                  className="bottom-seg2-solutions-png-image"
                />
              </div>
            </div>
            {/* container-6 */}
            <div className="container-purple bottom-seg2-content-container-contents">
              <div className="unqiue-bottom-seg2-content-new">
                Partner with CTV Tanzania for reliable and innovative last mile
                fiber connectivity solutions. Let us be your trusted partner in
                keeping your business connected and empowering your growth.
                Together, let's build a connected future for Africa.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Solutions;

{
  /* <div className="bottom-seg2-content">
<div className="left-seg2-content blue one">
  <div className="bottom-left-title">Fiber Connectivity:</div>
  <div className="bottom-left-top-content">
    Extend connectivity to remote areas with flexibility and quick
    deployment.
  </div>
  <div className="bottom-left-bottom-content">
    In areas where laying fiber-optic cables may not be feasible or
    cost-effective, our wireless connectivity solutions come into
    play. By leveraging wireless technology, we extend connectivity
    to remote or challenging locations, enabling businesses to
    overcome geographical limitations. Our wireless solutions offer
    flexibility, quick deployment, and adaptability, ensuring
    reliable internet access wherever you need it.
  </div>
  <div className="bottom-left-image1">
    <img
      className="bottom-left-img1"
      src={require("../../assets/top c .png")}
      alt=""
    />
  </div>
  <div className="bottom-left-image2">
    <img
      src={require("../../assets/fiber connectivity.png")}
      alt=""
      className="bottom-left-img2"
    />
  </div>
</div>
<div className="left-seg2-content grey two">
  <div className="bottom-left-title">Wireless Connectivity:</div>
  <div className="bottom-left-top-content">
    Reliable and high-speed internet access with seamless
    communication and improved efficiency.
  </div>
  <div className="bottom-left-bottom-content">
    With our fiber connectivity solutions, we provide reliable and
    high-speed internet access directly to your business location.
    Our extensive fiber-optic network infrastructure ensures
    seamless communication, fast data transfer, and improved
    operational efficiency. Whether you are an enterprise seeking
    reliable connectivity or an ISP/telecoms service provider
    looking to enhance your offerings, our fiber solutions deliver
    exceptional performance and reliability.
  </div>
  <div className="bottom-left-image1">
    <img
      className="bottom-left-img1"
      src={require("../../assets/top c .png")}
      alt=""
    />
  </div>
  <div className="bottom-left-image2">
    <img
      src={require("../../assets/wireless connect.png")}
      alt=""
      className="bottom-left-img2"
    />
  </div>
</div>
</div>

<div className="bottom-seg2-content">
<div className="left-seg2-content grey three">
  <div className="bottom-left-title">Hybrid Connectivity:</div>
  <div className="bottom-left-top-content">
    Combine fiber and wireless technologies for tailored, robust,
    and scalable connectivity.
  </div>
  <div className="bottom-left-bottom-content">
    To provide the best of both worlds, we offer hybrid connectivity
    solutions that combine the advantages of fiber and wireless
    technologies. Our hybrid solutions seamlessly integrate fiber
    and wireless components, creating a cohesive network
    infrastructure. This approach allows us to tailor the solution
    to your specific requirements, delivering robust and scalable
    connectivity. Whether you need high-speed internet access,
    seamless communication across multiple locations, or reliable
    connectivity for your customers, our hybrid solutions provide
    optimal performance and reliability.
  </div>
  <div className="bottom-left-image1">
    <img
      className="bottom-left-img1"
      src={require("../../assets/top c .png")}
      alt=""
    />
  </div>
  <div className="bottom-left-image2">
    <img
      src={require("../../assets/Hybrid connect.png")}
      alt=""
      className="bottom-left-img2"
    />
  </div>
</div>
<div className="left-seg2-content blue four">
  <div className="bottom-left-title">
    Dedicated Internet Access (DIA):
  </div>
  <div className="bottom-left-top-content">
    Uninterrupted high-speed internet access for businesses and
    service providers.
  </div>
  <div className="bottom-left-bottom-content">
    Experience uninterrupted connectivity that fuels the success of
    businesses and service providers with CTV's Dedicated Internet
    Access (DIA) solutions. As the backbone of reliable and
    high-speed internet access, we understand its critical
    importance. That's why we offer DIA solutions tailored to
    enterprises and service providers, ensuring seamless
    connectivity. Say goodbye to shared bandwidth and network
    congestion and say hello to a dedicated internet connection that
    empowers your operations to stay ahead in today's digital
    landscape.
  </div>
  <div className="bottom-left-image1">
    <img
      className="bottom-left-img1"
      src={require("../../assets/top c .png")}
      alt=""
    />
  </div>
  <div className="bottom-left-image2">
    <img
      src={require("../../assets/Dedicate dconnect.png")}
      alt=""
      className="bottom-left-img2"
    />
  </div>
</div>
</div>

<div className="bottom-seg2-content segment3-change">
<div className="left-seg2-content blue five">
  <div className="bottom-left-title">VPN Services:</div>
  <div className="bottom-left-top-content">
    Secure and seamless connections for remote workers and multiple
    office locations.
  </div>
  <div className="bottom-left-bottom-content">
    Secure and Seamless Connectivity for Your Business. Connect
    securely and effortlessly with CTV's VPN services. Our Virtual
    Private Network offers encrypted and private connections,
    ensuring your data remains confidential and your communications
    are protected. With flexible solutions for remote workers,
    multiple office locations, and secure partnerships, CTV keeps
    your business connected and safe. Trust in our expertise and
    unlock the full potential of secure remote access for your
    organization. Choose CTV VPN services for seamless connectivity
    and peace of mind.
  </div>
  <div className="bottom-left-image1">
    <img
      className="bottom-left-img1"
      src={require("../../assets/top c .png")}
      alt=""
    />
  </div>
  <div className="bottom-left-image2">
    <img
      src={require("../../assets/VPN .png")}
      alt=""
      className="bottom-left-img2"
    />
  </div>
</div>
<div className="left-seg2-content purple six">
  Partner with CTV Tanzania for reliable and innovative last mile
  fiber connectivity solutions. Let us be your trusted partner in
  keeping your business connected and empowering your growth.
  Together, let's build a connected future for Africa.
</div>
</div> */
}
