import React from "react";
import { styled } from "@mui/material/styles";
import "./infoblock.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const InfoBlock1 = () => {
  return (
    <div className="new_info_block_container">
      <div className="new_info_block_inside">
        <div className="new_info_inside_left">
          <div className="new_info_inside_left_elements element1 radialBackGround">
            Tailor-made Network Solution for clients
            <img
              src={require("../../../assets/top c .png")}
              alt=""
              className="item-info-block-c-new"
            />
          </div>
          <div className="new_info_inside_left_elements element2 radialBackGround">
            Construction and Maintenance of METRO Fiber
            <img
              src={require("../../../assets/top c .png")}
              alt=""
              className="item-info-block-c-new"
            />
          </div>
          <div className="new_info_inside_left_elements element3 radialBackGround">
            Extensive knowledge of the Tanzanian Market Extensive knowledge of
            the Tanzanian Broadband and ISP market
            <img
              src={require("../../../assets/top c .png")}
              alt=""
              className="item-info-block-c-new"
            />
          </div>
          <div className="new_info_inside_left_elements element4 radialBackGround">
            Low overhead expenses and streamlined internal processes.
            <img
              src={require("../../../assets/top c .png")}
              alt=""
              className="item-info-block-c-new"
            />
          </div>
        </div>
        <div className="new_info_inside_right">
          <div className="new_info_inside_right_image_container">
            <img
              src={require("../../../assets/new/aboutus/About us-para image@4x-100.jpg")}
              alt=""
              className="new_info_inside_right_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock1;

{
  /*<div className="infoBlock1">*/
}
{
  /* <div className="innerInfoBlock1">
        <div className="leftBlock1">
          <div className="item-info-block radialBackGround">
            Tailor made Network Solution for clients
            <img
              src={require("../../../assets/top c .png")}
              alt=""
              className="item-info-block-c"
            />
          </div>
          <div className="item-info-block radialBackGround">
            Builders of the METRO Fibre Infrastructure Construction and
            Maintenance of METRO Fiber
            <img
              src={require("../../../assets/top c .png")}
              alt=""
              className="item-info-block-c"
            />
          </div>
          <div className="item-info-block radialBackGround">
            Extensive knowledge of the Tanzanian Market Extensive knowledge of
            the Tanzanian Broadband and ISP market
            <img
              src={require("../../../assets/top c .png")}
              alt=""
              className="item-info-block-c"
            />
          </div>
          <div className="item-info-block radialBackGround">
            Low overhead expenses and streamlined internal processes.
            <img
              src={require("../../../assets/top c .png")}
              alt=""
              className="item-info-block-c"
            />
          </div>
        </div>
        <div className="rightBlock1">
          <img
            className="rightBlock1Img"
            src={require("../../../assets/image-01.png")}
            alt=""
          />
        </div>
      </div> */
}
{
  /*</div>*/
}
