import React from "react";
import { Container } from "./about.product.styles";
import steelPipes from "../../assets/images/steel-pipes.jpg";

const AboutProduct = () => {
  return (
    <Container>
      {/* <div className="product-background-container"> */}
      <svg className="product-bg" width="1440" height="250" viewBox="0 0 1440 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 78.5C662.262 250 369.375 2.66667 -1 0V250H1440V78.5Z" fill="#008A91" fillOpacity="0.14" />
      </svg>
      {/* </div> */}
      <div className="product-image-container">
        <img src={steelPipes} alt="pipe-img" className="product-image" />
      </div>
      <div className="product-details-container">
        <h1 className="product-header-text">Stainless Steel ERW / NB Pipe</h1>
        <p className="about-product-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem enim, asperiores eveniet dignissimos dolorem animi commodi sit accusantium qui saepe a dolores perferendis voluptas, dolore tempora nobis! Recusandae, expedita aperiam.</p>
      </div>
    </Container>
  );
};

export default AboutProduct;