import React from "react";
import { Container } from "./about.company.tag.styles";

const AboutCompanyTag = ({ aboutCompanyContent }) => {
  return (
    <Container>
      <div className="wrapper">
        <div className="content-container">
          <div className="top-container">
            <div className="header-container">
              <h1 className="heading">About Bishnu Steel</h1>
              <p className="about-tag">Commited to strict quality control and thoughtful customer services.</p>
            </div>
            <div className="about-content-container">
              <p className="about-content" dangerouslySetInnerHTML={{ __html: aboutCompanyContent }} ></p>
            </div>
          </div>
          <div className="bottom-container">
            <div className="left-container">
              <p className="couter-header">Founded In</p>
              <h1 className="counter">2022</h1>
            </div>
            <div className="middle-container">
              <p className="couter-header">Head Counts</p>
              <h1 className="counter">50</h1>
            </div>
            <div className="right-container">
              <p className="couter-header">Warehouse Space</p>
              <h1 className="counter">20,000 <span className="mini-text">Sq. Ft.</span></h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutCompanyTag;