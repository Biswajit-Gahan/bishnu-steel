import styled from "styled-components";
// import productBgImage from "../../assets/images/bs-products-bg-curve.svg";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  position: relative;

  .product-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
  }

  .product-image-container {
    width: 400px;
    height: 250px;
    min-height: 200px;
    min-width: 300px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(18, 18, 18,0.3);
    }
  }

  .product-image {
    width: inherit;
    height: inherit;
    min-width: inherit;
    min-height: inherit;
    object-fit: cover;
  }

  .product-details-container {
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .product-header-text {
    color: var(--bs-yellow);
    letter-spacing: 0.5px;
  }

  .about-product-text {
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0.5px;
  }
`;