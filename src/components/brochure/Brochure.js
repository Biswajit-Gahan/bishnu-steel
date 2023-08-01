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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sint ex quas illum labore! Nemo, perferendis, voluptate, in at eos praesentium enim error blanditiis magni deserunt consequuntur officia accusamus ipsum.
          Iure, accusamus quod. Laudantium, rem. Maxime sed quo, perferendis sequi quasi quis id ipsum corporis beatae voluptatem voluptates tempore, aut, expedita nemo et. Voluptatum accusantium aspernatur vero cum enim ratione.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat eius officiis nesciunt, voluptas praesentium dignissimos ipsum asperiores placeat explicabo numquam dolores amet quia deserunt quam impedit beatae sint ab!
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