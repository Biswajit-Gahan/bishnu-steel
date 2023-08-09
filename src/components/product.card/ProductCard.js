import React from "react";
import { Container } from "./product.card.styles";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productName, productImg, productType }) => {
  const navigate = useNavigate();

  return (
    <Container $productName={productName} onClick={() => { navigate(`products/${productType}`) }}>
      {/* PRODUCT IMAGE CONTAINER */}
      <div className="product-image-container">
        <img className="card-product-img" src={productImg} alt="product-img" />
      </div>
    </Container>
  );
};

export default ProductCard;