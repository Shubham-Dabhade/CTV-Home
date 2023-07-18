import React from 'react';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-custom'>
        <nav class="navbar navbar-expand">
            <a class="navbar-brand" href="#"><img className="res-brand" src={require("../../assets/Business logo.png")} alt="logo"/></a>
            <div className="hamburger-button-toggle">
            <div className="dash">
                
            </div>
            <div className="dash">

            </div>
            <div className="dash">

            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;