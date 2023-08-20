import React from "react";
import { Container } from "./about.product.styles";
import constants from "../../utils/constants";

const AboutProduct = ({ headerText, aboutText, productImage }) => {

  return (
    <Container>
      <svg className="product-bg" width="1440" height="250" viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 78.5C662.262 250 369.375 2.66667 -1 0V250H1440V78.5Z" fill={constants.colors.bsBlue} fillOpacity="0.07" />
      </svg>
      <div className="product-image-container anime" data-move="move-left">
        <img src={productImage} alt="pipe-img" className="product-image" />
      </div>
      <div className="product-details-container">
        <h1 className="product-header-text anime" data-move="move-up">{headerText}</h1>
        <p className="about-product-text anime" data-move="move-right">{aboutText}</p>
      </div>
    </Container>
  );
};

export default AboutProduct;