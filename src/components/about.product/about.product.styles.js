import styled from "styled-components";
import constants from "../../utils/constants";
import aboutProductResponsive from "./about.product.responsive";

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
    ${constants.boxShadow};

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
    z-index: 997;
  }

  .product-header-text {
    color: var(--bs-orange);
    letter-spacing: 0.5px;
    ${constants.fontSize.header.default};
  }

  .about-product-text {
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${aboutProductResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${aboutProductResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${aboutProductResponsive.mobile};
  }
`;