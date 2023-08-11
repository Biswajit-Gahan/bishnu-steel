import React, { useState } from "react";
import { NavbarContainer } from "./navbar.styles";
import brandHeaderLogo from "../../assets/images/bs-footer-icon-2.png";
// ICONS
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { Link, NavLink } from "react-router-dom";
import QuotationModal from "../modals/quotation.modal/QuotationModal";
import constants from "../../utils/constants";
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  // USESTATE FOR SHOW QUOTATION MODAL
  const [showQuotationModal, setShowQuotationModal] = useState(() => (false));

  // USESTATE FOR SHOW HAMBURGER MENU
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(() => (false));

  // FUNCTION FOR HADLER SHOW QUOTATION MODAL
  const showQuotationModalHandler = () => {
    setShowQuotationModal((prevData) => (!prevData));
  };

  // FUNCTION FOR HANDLE SHOW HAMBURGER MENU
  const showHamburgerMenuHandler = () => {
    setShowHamburgerMenu((prevData) => (!prevData));
  }

  return (
    <NavbarContainer>
      {/* QUOTATION MODAL */}
      {
        showQuotationModal &&
        <QuotationModal clickEvent={showQuotationModalHandler} />
      }

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
            <li className="navbar-item"><NavLink to="/" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>Home</NavLink></li>
            <li className="navbar-item products-li">
              Products
              <div className="products-list-container">
                <ul className="products-list">
                  <Link to="products/round"><li className="products-item">Round Stainless Steel</li></Link>
                  <Link to="products/square"><li className="products-item">Square Stainless Steel</li></Link>
                  <Link to="products/rectangle"><li className="products-item">Rectangle Stainless Steel</li></Link>
                  <Link to="https://google.com"><li className="products-item">Product Quality</li></Link>
                </ul>
              </div>
            </li>
            <li className="navbar-item"><NavLink to="end-uses" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>End Uses</NavLink></li>
            <li className="navbar-item"><NavLink to="about-us" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>About Us</NavLink></li>
            <li className="navbar-item"><NavLink to="contact-us" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* RIGHT CONTAINER */}
        <div className="right-container">
          {/* REQUEST QUOTE BUTTON */}
          <button type="button" className="request-quote-button" onClick={showQuotationModalHandler}>REQUEST A QUOTE</button>
        </div>

        {/* HAMBURGER MENU*/}
        <div className="hamberger-menu" onClick={showHamburgerMenuHandler}>
          <MenuTwoToneIcon className="hamberger-icon" />
        </div>
      </div>

      {/* HAMBURGER MENU TRAY */}
      {
        showHamburgerMenu &&
        <div className="hamburger-menu-tray-container">
          {/* HAMBURGER MENU TRAY */}
          <div className="hamburger-menu-tray">
            {/* HAMBURGER MENU LIST */}
            <ul className="hamburger-menu-list" onClick={showHamburgerMenuHandler}>
              <li className="hamburger-menu-item"><NavLink to="/" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>Home</NavLink></li>
              <li className="hamburger-menu-item">Products</li>
              <li className="hamburger-menu-item"><NavLink to="end-uses" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>End Uses</NavLink></li>
              <li className="hamburger-menu-item"><NavLink to="about-us" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>About Us</NavLink></li>
              <li className="hamburger-menu-item"><NavLink to="contact-us" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>Contact Us</NavLink></li>
            </ul>
            {/* HAMBURGER CLOSE BUTTON */}
            <button type="button" className="hamburger-close-button" onClick={showHamburgerMenuHandler}><CloseIcon /></button>
          </div>
        </div>
      }
    </NavbarContainer>
  );
};

export default Navbar;