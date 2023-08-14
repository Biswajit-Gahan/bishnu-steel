import styled from "styled-components";
import constants from "../../utils/constants";
import aboutUsResponsive from "./about.us.responsive";

export const AboutUsContainer = styled.main`
  /* page-name-section */
  .page-name-section {
    margin-bottom: 50px;
  }

  /* our-mission-section */
  .our-mission-section {
    margin-bottom: 50px;
  }

  .our-mission-container {
    width: 900px;
    margin: 0 auto;
  }

  .our-mission-header-text {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.header.default};
    position: relative;
    display: inline-block;
    margin-bottom: 20px;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: ${constants.colors.bsPinkDefault};
    }
  }

  .our-mission-content {
    color: ${constants.colors.bsTextDefault};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 22px;
  }

  /* our-vision-section */
  .our-vision-section {
    margin-bottom: 50px;
  }

  .our-vision-container {
    width: 900px;
    margin: 0 auto;
  }

  .our-vision-header-text {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.header.default};
    position: relative;
    display: inline-block;
    margin-bottom: 20px;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: ${constants.colors.bsPinkDefault};
    }
  }

  .our-vision-content {
    color: ${constants.colors.bsTextDefault};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 22px;
  }

  /* about-us-section */
  .about-us-section {
    margin-bottom: 50px;
  }

  /* our-products-section */
  .our-products-section {
    margin-bottom: 50px;
  }

  .our-products-container {
    width: 900px;
    margin: 0 auto;
  }

  .our-products-header-text {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.header.default};
    position: relative;
    display: inline-block;
    margin-bottom: 20px;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: ${constants.colors.bsPinkDefault};
    }
  }

  .our-products-content {
    color: ${constants.colors.bsTextDefault};
    ${constants.fontSize.paragraph.tablet};
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 22px;
  }

  .products-container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .need-help-section {
    margin-bottom: 50px;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${aboutUsResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${aboutUsResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${aboutUsResponsive.mobile};
  }
`;