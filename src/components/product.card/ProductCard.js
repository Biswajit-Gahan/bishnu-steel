import React from "react";
import { Container } from "./product.card.styles";

const ProductCard = ({ productName, productImg }) => {
  return (
    <Container $productName={productName}>
      {/* PRODUCT IMAGE CONTAINER */}
      <div className="product-image-container">
        <img className="card-product-img" src={productImg} alt="product-img" />
      </div>
    </Container>
  );
};

export default ProductCard;