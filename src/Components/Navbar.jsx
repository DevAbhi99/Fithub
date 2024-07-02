import React, { useState, useRef } from 'react';
import './Navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';


function Navbar() {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  setInterval(() => {
    alert('Time to check your water intake!');
  }, 3600000);

  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const close = () => {
    window.location.reload();
  };

  return (
    <>
      <div className='nav_bar'>
        <div className='title_bar'>
          <p className="title_fitapp"><i>FitHub</i></p>
        </div>
        <div className='navbar_main'>
          <div className='settings_main' ref={dropdownRef}>
            <Dropdown show={dropdownOpen} onToggle={handleToggle}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                ⚙️
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <button id="close_btn" onClick={close}>X</button>
                <Dropdown.Item href="http://localhost:3000/weighttraining">Weight Training</Dropdown.Item>
                <Dropdown.Item href="http://localhost:3000/zumba">Zumba</Dropdown.Item>
                <Dropdown.Item href="http://localhost:3000/martialarts">Martial Arts</Dropdown.Item>
                <Dropdown.Item href="http://localhost:3000/diettracker">Diet Tracker</Dropdown.Item>
                <Dropdown.Item href="http://localhost:3000/caloriereq">Calorie Requirement</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='water_main'>
            <a href="/waterintake"><button id="water_btn"><b>Hydrate 💧</b></button></a>
          </div>
          <div className='profile_main'>
            <span><img id="profile_pic" src="https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg" /></span>
            <a href="/profile"><button id="profile_btn">DevAbhi99</button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;