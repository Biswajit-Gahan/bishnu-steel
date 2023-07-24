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
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(18, 18, 18,0.75);
      backdrop-filter: blur(3px);
    }
  }
  .brand-video {
    width: inherit;
    height: inherit;
    object-fit: cover;
    object-position: top;
    animation: videoAnimation 3s;
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
    z-index: 998;
  }

  .hero-text {
    font-size: 30px;
    color: var(--white);
    text-align: center;
    line-height: 50px;
    font-weight: 600;
    animation: heroText 2s;

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
    animation: heroTag 2s;
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
    transition: transform 0.2s ease-in-out;
    animation: buttons 2s;
    &:hover {
      transform: scale(0.92);
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

  .about-steels-container {
    margin-top: 50px;
  }

  @keyframes buttons {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(1.2);
    }

    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes heroTag {
    0% {
      opacity: 0;
      transform: translateX(-20px) scale(1.1);
    }

    100% {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes heroText {
    0% {
      opacity: 0;
      transform: translateY(-20px) scale(1.1);
    }

    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes videoAnimation {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.3);
    }
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