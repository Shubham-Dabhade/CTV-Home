import React from 'react';
import "./carossel.css"

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
            <img src={require("../../../assets/new/Home banner-01@4x-100.jpg")} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
            <img src={require("../../../assets/new/Home banner-02@4x-100.jpg")} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
            <img src={require("../../../assets/new/Home banner-03@4x-100.jpg")} className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel;




{/* <div id="myCarousel" classNameName="carousel slide" data-bs-ride="carousel">
<ol classNameName="carousel-indicators">
<li data-target="#myCarousel" data-slide-to="0" classNameName="active"></li>
<li data-target="#myCarousel" data-slide-to="1"></li>
<li data-target="#myCarousel" data-slide-to="2"></li>
</ol>

<div classNameName="carousel-inner">
<div classNameName="carousel-item active" >
    <img src={require("../../../assets/new/Home banner-01@4x-100.jpg")} alt="Image 1" style={{width:"100%"}}/>
</div>
<div classNameName="carousel-item" >
    <img src={require("../../../assets/new/Home banner-02@4x-100.jpg")} alt="Image 2" style={{width:"100%"}}/>
</div>
<div classNameName="carousel-item">
    <img src={require("../../../assets/new/Home banner-03@4x-100.jpg")} alt="Image 3" style={{width:"100%"}}/>
</div>
</div>

<a classNameName="carousel-control-prev" href="#myCarousel" data-slide="prev">
<span classNameName="carousel-control-prev-icon"></span>
</a>
<a classNameName="carousel-control-next" href="#myCarousel" data-slide="next">
<span classNameName="carousel-control-next-icon"></span>
</a>
</div> */}
