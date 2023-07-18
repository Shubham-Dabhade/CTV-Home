import React from 'react';
import "./carossel.css"

const Carousel = () => {
  return (
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src={require("../../../assets/HOME-banner-01.jpg")} alt="Image 1" style={{width:"100%"}}/>
        </div>
        <div class="carousel-item">
            <img src={require("../../../assets/HOME-banner-02.jpg")} alt="Image 2" style={{width:"100%"}}/>
        </div>
        <div class="carousel-item">
            <img src={require("../../../assets/HOME-banner-03.jpg")} alt="Image 3" style={{width:"100%"}}/>
        </div>
        </div>
    
        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
        <span class="carousel-control-next-icon"></span>
        </a>
    </div>
  )
}

export default Carousel