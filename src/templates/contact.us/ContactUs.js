import React, { useEffect } from "react";
import { ContactUsContainer } from "./contact.us.styles";
import Map from "../../components/map/Map";
import PageTitle from "../../components/page.title/PageTitle";
import { Link } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MessageBox from "../../components/message.box/MessageBox";
import localdb from "../../utils/localdb";
import observer from "../../utils/observer";

const ContactUs = () => {
  useEffect(() => {
    const anime = document.querySelectorAll(".anime");
    observer(Object.values(anime));
  }, []);

  return (
    <ContactUsContainer>
      {/* CONTACT US SECTION */}
      <section className="contact-us-section">
        <PageTitle pageName="Contact Us"/>
      </section>

      {/* ADDRESS SECTION */}
      <section className="address-section">
        <div className="address-wrapper">
          {/* ADDRESS HEADER TITLE */}
          <h4 className="address-header-title">Contact Details</h4>

          {/* ALL ADDRESS CONTAINER */}
          <div className="all-address-container">
            {/* TOP ADDRESS WRAPPER */}
            <div className="top-address-wrapper">
              {/* CONTACT NUMBER CONTAINER*/}
              <div className="contact-number-container type-container">
                {/* CONTACT NUMBER HEADER TITLE */}
                <h4 className="contact-number-header-title type-header-title">Contact Number</h4>
                
                {/* CONTACT NUMBER CONTENT */}
                <Link to="tel:9644002222">
                  <div className="contaict-number-content type-content">
                    <CallIcon className="mui-icon" /> +91 9644002222
                  </div>
                </Link>
              </div>

              {/* EMAIL ADDRESS CONTAINER*/}
              <div className="email-address-container type-container">
                {/* EMAIL ADDRESS HEADER TITLE */}
                <h4 className="email-address-header-title type-header-title">Email</h4>

                {/* EMAIL ADDRESS CONTENT */}
                <Link to="mailto:bishnusteel@gmail.com">
                  <div className="email-address-content type-content">
                    <EmailIcon className="mui-icon" /> bishnusteel@gmail.com
                  </div>
                </Link>
              </div>

              {/* SOCIAL MEDIA CONTAINER */}
              <div className="social-media-container type-container">
                {/* SOCIAL MEDIA HEADER TITLE */}
                <h4 className="social-media-header-title type-header-title">Social Media</h4>

                {/* SOCIAL MEDIA CONTENT */}
                <div className="social-media-content type-content">
                  <Link to="https://www.facebook.com" target="_blank"><FacebookIcon className="mui-icon" /></Link>
                  <Link to="https://www.twitter.com" target="_blank"><TwitterIcon className="mui-icon" /></Link>
                  <Link to="https://www.linkedin.com" target="_blank"><LinkedInIcon className="mui-icon" /></Link>
                  <Link to="https://www.youtube.com" target="_blank"><YouTubeIcon className="mui-icon" /></Link>
                </div>
              </div>
            </div>

            {/* BOTTOM ADDRESS WRAPPER */}
            <div className="bottom-address-wrapper">
              {/* OFFICE ADDRESS CONTAINER*/}
              <div className="office-address-container type-container">
                {/* OFFICE ADDRESS HEADER TITLE */}
                <h4 className="office-address-header-title type-header-title">Office Address</h4>

                {/* OFFICE ADDRESS CONTENT */}
                <Link to={`https://www.google.com/maps/dir//${localdb.bsLocation.lat},%20${localdb.bsLocation.long}`} target="_blank">
                  <p className="office-address-content type-content">
                    Academy of Management and Information Technology, Plot No-836/2476, Khta No-238/1577, Khordha Mouza, Maa Barunei Road, Garh khordha, Near Khordha Industrial Area, Khordha, Odisha, 752057
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        {/* MAP WRAPPER */}
        <div className="map-wrapper">
          {/* MAP HEADER TEXT */}
          <h4 className="locate-us-heading">Find Us On Earth.</h4>

          {/* MAP CONTAINER */}
          <div className="map-container">
            <Map />
          </div>
        </div>
      </section>

      {/* NEED HELP SECTION */}
      <section className="need-help">
        <MessageBox />
      </section>
    </ContactUsContainer>
  );
};

export default ContactUs;