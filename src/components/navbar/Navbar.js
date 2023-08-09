import React from "react";
import { NavbarContainer } from "./navbar.styles";
import brandHeaderLogo from "../../assets/images/bs-footer-icon-2.png";
// ICONS
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      {/* NAVBAR WRAPPER */}
      <div className="navbar-wrapper">
        {/* LEFT CONTAINER */}
        <div className="left-container">
          {/* BRAND LOGO */}
          <Link to="/"><img className="brand-header-logo" src={brandHeaderLogo} alt="brand-logo" /></Link>
        </div>

        {/* MIDDLE CONTAINER */}
        <div className="middle-container">
          {/* NAVBAR LIST */}
          <ul className="navbar-list">
            <li className="navbar-item">Home</li>
            <li className="navbar-item">Products</li>
            <li className="navbar-item">Quality</li>
            <li className="navbar-item">About Us</li>
            <li className="navbar-item">Contact Us</li>
          </ul>
        </div>

        {/* RIGHT CONTAINER */}
        <div className="right-container">
          {/* REQUEST QUOTE BUTTON */}
          <button type="button" className="request-quote-button">REQUEST A QUOTE</button>
        </div>

        {/* HAMBURGER MENU*/}
        <div className="hamberger-menu">
          <MenuTwoToneIcon className="hamberger-icon" />
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;