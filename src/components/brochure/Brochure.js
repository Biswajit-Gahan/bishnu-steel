import React from "react";
import { Container } from "./brochure.styles";

const Brochure = () => {
  return (
    <Container>
      {/* BROCHURE HEADER CONTAINER */}
      <div className="brochure-header-container">
        <h2 className="brochure-header-text">Strict Quality Control Stystem</h2>
        <div className="header-divider"></div>
      </div>

      {/* BROCHURE CONTENT CONTAINER */}
      <div className="brochure-content-container">
        <p className="brochure-content">
          Quality is checked at every stage from the material selection to slitting, pipe making, polishing,
          finished- product testing, packaging and warehousing every stage is strictly controlled , to ensure
          best product reaches in hand of customers.
          <br />
          <br />
          We are equipped with the most advanced and sophisticated products testing equipment to
          control our product quality at stage.
        </p>
      </div>

      {/* BROCHURE BUTTON CONTAINER */}
      <div className="brochure-button-container">
        <button type="button" className="brochure-button">Download Brochure</button>
      </div>
    </Container>
  );
};

export default Brochure;