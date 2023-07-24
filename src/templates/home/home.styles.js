import styled from "styled-components";
import constants from "../../utils/constants";
import homeResponsive from "./home.responsive";

export const Container = styled.main`
  width: 100%;
  height: 700px;

  .video-container {
    width: inherit;
    height: inherit;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(18, 18, 18,0.75);
      backdrop-filter: blur(5px);
    }
  }
  .brand-video {
    width: inherit;
    height: inherit;
    object-fit: cover;
    object-position: top;
  }

  .hero-container {
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    z-index: 999;
  }

  .hero-text {
    font-size: 30px;
    color: var(--white);
    text-align: center;
    line-height: 50px;
    font-weight: 600;

    .hero-bold {
      font-size: 40px;
      color: var(--bs-orange);
      font-weight: 800;
    }
  }

  .hero-tag {
    font-size: 16px;
    color: var(--white);
    text-align: center;
    letter-spacing: 1px;
    line-height:25px;
  }

  .header-button {
    width: 170px;
    height: 55px;
    border-radius: 50px;
    border: none;
    margin: 10px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.2px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(0.95);
    }
  }

  .header-our-products-button {
    background-color: var(--bs-orange);
    color: var(--white);
  }

  .header-know-more-button {
    background-color: transparent;
    border: 2px solid var(--white);
    color: var(--white);
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${homeResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${homeResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${homeResponsive.mobile};
  }
`;