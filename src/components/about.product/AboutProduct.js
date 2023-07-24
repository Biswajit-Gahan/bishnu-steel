import React from "react";
import { Container } from "./about.product.styles";
import steelPipes from "../../assets/images/steel-pipes.jpg";

const AboutProduct = () => {
  return (
    <Container>
      <img src={steelPipes} alt="image" className="product-image" />
      <div className="product-details-container">
        <h1 className="product-header-text">Stainless Steel ERW / NB Pipe</h1>
        <p className="about-product-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem enim, asperiores eveniet dignissimos dolorem animi commodi sit accusantium qui saepe a dolores perferendis voluptas, dolore tempora nobis! Recusandae, expedita aperiam.</p>
      </div>
    </Container>
  );
};

export default AboutProduct;