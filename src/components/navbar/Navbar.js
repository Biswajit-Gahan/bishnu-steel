import React, { useState } from "react";
import { NavbarContainer } from "./navbar.styles";
import brandHeaderLogo from "../../assets/images/bs-footer-icon-2.png";
// ICONS
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { Link, NavLink } from "react-router-dom";
import QuotationModal from "../modals/quotation.modal/QuotationModal";
import constants from "../../utils/constants";

const Navbar = () => {
  // USESTATE FOR SHOW QUOTATION MODAL
  const [showQuotationModal, setShowQuotationModal] = useState(() => (false));

  // FUNCTION FOR HADLER SHOW QUOTATION MODAL
  const showQuotationModalHandler = () => {
    setShowQuotationModal((prevData) => (!prevData));
  };

  // FUNCTION FOR ALL PRODUCTS
  const browseAllProducts = (element) => {
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavbarContainer>
      {/* QUOTATION MODAL */}
      {
        showQuotationModal && <QuotationModal clickEvent={showQuotationModalHandler} />
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
            <li className="navbar-item">Products</li>
            <li className="navbar-item"><NavLink to="quality" style={({ isActive }) => ({ color: isActive ? `${constants.colors.bsPinkDefault}` : "" })}>Quality</NavLink></li>
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
        <div className="hamberger-menu">
          <MenuTwoToneIcon className="hamberger-icon" />
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;