import React from 'react';
import "./tanzaniaInfo.css"

const TanzaniaInfo = () => {
  return (
    <div className="new_info_block_2_container1">
        <div className="inside_new_info_block_2_container1 reverse">
            <div className="new_info_block_2_left_container1">
            <div className="info_block_2_left_container_title1">
                Servicing businesses across Tanzania and beyond
            </div>
            <div className="info_block_2_left_services_container1">
                {/* block1 */}
                <div className="info_block_2_service_contents1">
                <img
                    src={require("../../../assets/new/home/Telco_ISP.png")}
                    alt=""
                    className="info_block_2_service_img1"
                />
                <div className="info_block_2_service_name1">TELCOs & ISP</div>
                </div>
                {/* block2 */}
                <div className="info_block_2_service_contents1">
                <img
                    src={require("../../../assets/new/home/Bank.png")}
                    alt=""
                    className="info_block_2_service_img1"
                />
                <div className="info_block_2_service_name1">Banks</div>
                </div>
                {/* block3 */}
                <div className="info_block_2_service_contents1">
                <img
                    src={require("../../../assets/new/home/NGOs.png")}
                    alt=""
                    className="info_block_2_service_img1"
                />
                <div className="info_block_2_service_name1">NGOs</div>
                </div>
                {/* block4 */}
                <div className="info_block_2_service_contents1">
                <img
                    src={require("../../../assets/new/home/Ind enterprise.png")}
                    alt=""
                    className="info_block_2_service_img1"
                />
                <div className="info_block_2_service_name1">
                    Individual Enterprises
                </div>
                </div>
                {/* block5 */}
                <div className="info_block_2_service_contents1">
                <img
                    src={require("../../../assets/new/home/Business corp.png")}
                    alt=""
                    className="info_block_2_service_img1"
                />
                <div className="info_block_2_service_name1">
                    Business Corporations
                </div>
                </div>
                {/* block6 */}
                <div className="info_block_2_service_contents1">
                <img
                    src={require("../../../assets/new/home/Edu institutes.png")}
                    alt=""
                    className="info_block_2_service_img1"
                />
                <div className="info_block_2_service_name1">
                    Educational Institutes
                </div>
                </div>
            </div>
            </div>
            <div className="new_info_block_2_right_container1">
            <div className="new_info_block_tanzania_image_container1">
                <img
                src={require("../../../assets/new/home/Tanza map@4x-8.png")}
                alt=""
                className="tanzania_image_new_info_block_img1"
                />
            </div>
            </div>
        </div>
        </div>
  )
}

export default TanzaniaInfo;