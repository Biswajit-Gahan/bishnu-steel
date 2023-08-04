import React from "react";
import { Container } from "./about.company.tag.styles";

const AboutCompanyTag = () => {
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
              <p className="about-content">
                Bishnu Steel is a visionary stainless steel tube manufacturing company located in Khurda, Barunai Industrial unit known for its commitment to excellence and innovation. With a daily production capacity of 10 tons, our state-of-the-art manufacturing unit is equipped with imported machinery, ensuring precision, efficiency, and high-quality output.<br /><br />
                We understand the importance of design in the stainless steel tube industry. Our dedicated team  work tirelessly to create innovative designs that meet the evolving needs of our customers. We offer a wide range of sizes, catering to various industries such as home decor, furniture, kitchenware, automobile and ancillaries and fabrication.<br /><br />
              </p>
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