import React from "react";
import { FooterContainer } from "./footer.styles";
import brandLogo from "../../assets/images/bs-footer-icon-2.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        {/* BRAND LOGO */}
        <img src={brandLogo} alt="brand-log" className="brand-logo" />

        {/* FOOTER CONTENT CONTAINER */}
        <div className="footer-content-container">

          {/* TOP CONTAINER */}
          <div className="top-container">
            {/* OFFICE ADDRESS CONTAINER*/}
            <div className="office-address-container">
              <p className="header-text">REGISTERED OFFICE</p>
              <p className="content-text">
                Academy of Management and Information Technology,<br />
                Plot No-836/2476, Khta No-238/1577,<br />
                Khordha Mouza, Maa Barunei Road, Garh khordha,<br />
                Near Khordha Industrial Area, Khordha,<br />
                Odisha, 752057
              </p>
            </div>

            {/* CONTACT DETAILS CONTAINER */}
            <div className="contact-details-container">
              {/* EMAIL DETAILS */}
              <div className="email-details">
                <p className="header-text">EMAIL</p>
                <p className="content-text">
                  bishnusteel@gmail.com
                </p>
              </div>

              {/* PHONE DETAILS */}
              <div className="phone-details">
                <p className="header-text">PHONE</p>
                <p className="content-text">
                  +91 9644002222
                </p>
              </div>
            </div>

            {/* SOCIAL MEDIA CONTAINER */}
            <div className="social-media-container">
              <p className="header-text">FOLLOW US ON</p>

              {/* SOCIAL MEDIA WRAPPER */}
              <div className="social-media-wrapper">
                <Link to="https://www.facebook.com" target="_blank"><FacebookIcon className="mui-icon" /></Link>
                <Link to="https://www.twitter.com" target="_blank"><TwitterIcon className="mui-icon" /></Link>
                <Link to="https://www.linkedin.com" target="_blank"><LinkedInIcon className="mui-icon" /></Link>
                <Link to="https://www.youtube.com" target="_blank"><YouTubeIcon className="mui-icon" /></Link>

              </div>
            </div>
          </div>

          {/* MIDDLE CONTAIENR */}
          {/* <div className="middle-container">
            <p className="header-text">IMPORTANT LINKS</p>
            <ul className="links">
              <li className="link">Home</li>
              <li className="link">Products</li>
              <li className="link">Quality</li>
              <li className="link">About Us</li>
              <li className="link">Contact Us</li>
            </ul>
          </div> */}

          {/* BOTTOM CONTAINER */}
          <div className="bottom-container">
            <div className="divider"></div>
            <div className="credits-container">
              <p className="copyright">Copyright © 2023 | Bishnu Steels. All right reserved.</p>
              <p className="credit">Designed & Developed by Shaik Mehaboob Subhani.</p>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;