import React, { Fragment, useState } from 'react';
import "./navbar.css";
import Drawer from '@mui/material/Drawer';
import ClearIcon from '@mui/icons-material/Clear';
import Backdrop from '@mui/material/Backdrop';

const Navbar = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };


  return (
    <div className="navbar_whole">
    <div className='navbar-custom'>
        <nav class="navbar navbar-expand">
            <a class="navbar-brand" href="/"><img className="res-brand" src={require("../../assets/Business logo.png")} alt="logo"/></a>
              <div className="hamburger-button-toggle" onClick={toggleDrawer(true)}>
                <div className="dash">
                    
                </div>
                <div className="dash">

                </div>
                <div className="dash">

                </div>
              </div>
        </nav>
    </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: "777"}}
        open={state}
      >
      </Backdrop>
    <div className={`right_toggled_segment ${state?" ":"remove"}`}>
      <ClearIcon  className='clearIcon' onClick={toggleDrawer(false)}/>
      <ul className='right_toggled_list'>
        <li className="right_toggled_list_items"><a href="/">Home</a></li>
        <li className="right_toggled_list_items"><a href="/aboutus">AboutUs</a></li>
        <li className="right_toggled_list_items"><a href="/ourpromise">Our Promise</a></li>
        <li className="right_toggled_list_items"><a href="#">Our Solutions</a></li>
        <li className="right_toggled_list_items"><a href="#">Our Edge</a></li>
        <li className="right_toggled_list_items"><a href="#">Our Brands</a></li>
        <li className="right_toggled_list_items"><a href="#">Contact us</a></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar;