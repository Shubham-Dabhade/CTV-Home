import React from 'react';
import "./ourpromiseIn.css";

const Ourpromise = () => {
  return (
    <div class="promise">
        <div class="banner">
            <img src={require("../../assets/Promise Banner-100.jpg")} alt="pbanner" style={{width:"100%;"}}/>
        </div>
        <div class="upperblock">
            <div class="flex-item">
                <img src={require("../../assets/Promise block 1.png")} alt=""/>
            </div>
            <div class="flex-item">
                <img src={require("../../assets/Promise block 2.png")} alt=""/>
            </div>
            <div class="flex-item">
                <img src={require("../../assets/Promise block 3.png")} alt=""/>
            </div>
        </div>
        <div class="lowerblock">
            <div class="flex-item">
                <img src={require("../../assets/Promise block 4.png")} alt=""/>
            </div>
            <div class="flex-item">
                <img src={require("../../assets/Promise block 5.png")} alt=""/>
            </div>
            <div class="flex-item">
                <img src={require("../../assets/Promise block 6.png")} alt=""/>
            </div>
        </div>
        <div class="img7">
            <img src={require("../../assets/Promise block 7.png")} alt=""/>
        </div>
    </div>
  )
}

export default Ourpromise;