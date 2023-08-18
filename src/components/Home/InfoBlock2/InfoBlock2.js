import React from "react";
import "./infoBlock2.css";

const InfoBlock2 = () => {
  return (
    <>
        <div className="infoBlock2_top">
            <img
            src={require("../../../assets/new/Hp-seamless banner@4x-100.jpg")}
            style={{ width: "100%", backgroundColor: "white" }}
            />
            <div className="infoBlock2_top_button">Read More</div>
        </div>
        <div className="new_info_block_2_container">
        <div className="inside_new_info_block_2_container">
            <div className="new_info_block_2_left_container">
            <div className="info_block_2_left_container_title">
                Servicing businesses across Tanzania and beyond
            </div>
            <div className="info_block_2_left_services_container">
                {/* block1 */}
                <div className="info_block_2_service_contents">
                <img
                    src={require("../../../assets/new/home/Telco_ISP.png")}
                    alt=""
                    className="info_block_2_service_img"
                />
                <div className="info_block_2_service_name">TELCOs & ISP</div>
                </div>
                {/* block2 */}
                <div className="info_block_2_service_contents">
                <img
                    src={require("../../../assets/new/home/Bank.png")}
                    alt=""
                    className="info_block_2_service_img"
                />
                <div className="info_block_2_service_name">Banks</div>
                </div>
                {/* block3 */}
                <div className="info_block_2_service_contents">
                <img
                    src={require("../../../assets/new/home/NGOs.png")}
                    alt=""
                    className="info_block_2_service_img"
                />
                <div className="info_block_2_service_name">NGOs</div>
                </div>
                {/* block4 */}
                <div className="info_block_2_service_contents">
                <img
                    src={require("../../../assets/new/home/Ind enterprise.png")}
                    alt=""
                    className="info_block_2_service_img"
                />
                <div className="info_block_2_service_name">
                    Individual Enterprises
                </div>
                </div>
                {/* block5 */}
                <div className="info_block_2_service_contents">
                <img
                    src={require("../../../assets/new/home/Business corp.png")}
                    alt=""
                    className="info_block_2_service_img"
                />
                <div className="info_block_2_service_name">
                    Business Corporations
                </div>
                </div>
                {/* block6 */}
                <div className="info_block_2_service_contents">
                <img
                    src={require("../../../assets/new/home/Edu institutes.png")}
                    alt=""
                    className="info_block_2_service_img"
                />
                <div className="info_block_2_service_name">
                    Educational Institutes
                </div>
                </div>
            </div>
            </div>
            <div className="new_info_block_2_right_container">
            <div className="new_info_block_tanzania_image_container">
                <img
                src={require("../../../assets/new/home/Tanza map@4x-8.png")}
                alt=""
                className="tanzania_image_new_info_block_img"
                />
            </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default InfoBlock2;

{
  /* <div className="InfoBlock2">
<div className='infoBlock2_top'>
    <img src={require("../../../assets/new/Hp-seamless banner@4x-100.jpg")} style={{width: "100%", backgroundColor: "white"}}/>
    <div className="infoBlock2_top_button">
        Read More
    </div>
</div>

<div className="main-container">
    <div className="leftblock">
        <div className="service_heading">
            Servicing businesses across Tanzania and Beyond
        </div>
        <div className="img1">
            <img className='inside_img1' src={require("../../../assets/Icons HP.png")} alt="icon"/>
        </div>
    </div>
    <div className="img2">
        <img className='Tanzania_img' src={require("../../../assets/new/Tanza map@4x-8.png")} alt="map"/>
    </div>
</div>
</div> */
}
