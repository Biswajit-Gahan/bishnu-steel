import styled from "styled-components";
import navbarResponsive from "./navbar.responsive";
import constants from "../../utils/constants";

export const NavbarContainer = styled.nav`
  height: 80px;
  width: 100%;
  padding: 0 100px;
  /* background-color: ${constants.colors.bsDarkTransparent}; */
  background-color: ${constants.colors.bsDarkBold};
  /* backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999; */

  .navbar-wrapper {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand-header-logo {
    height: 50px;
  }

  .navbar-list {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  .navbar-item {
    list-style: none;
    color: ${constants.colors.bsWhite};
    font-weight: 500;
    position: relative;
    ${constants.fontSize.paragraph.laptop};
    letter-spacing: 0.5px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -7px;
      width: 0%;
      height: 1.45px;
      background-color: ${constants.colors.bsPinkDefault};;
      transition: width 0.3s ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .request-quote-button {
    background-color: transparent;
    border: 2px solid ${constants.colors.bsWhite};
    width: 170px;
    height: 50px;
    color: ${constants.colors.bsWhite};
    border-radius: 50px;
    letter-spacing: 0.5px;
    font-weight: 600;
    ${constants.fontSize.paragraph.mobile};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.1s ease-in-out, border-color 0.2s ease-in-out;

    &:hover {
      border-color: ${constants.colors.bsPinkDefault};
      background-color: ${constants.colors.bsPinkDefault};
      color: ${constants.colors.bsWhite};
    }
  }

  .hamberger-menu {
    display: none;
  }

  .hamberger-icon {
    color: ${constants.colors.bsWhite};

    &:hover {
      color: ${constants.colors.bsPinkDefault};
    }
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${navbarResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${navbarResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${navbarResponsive.mobile};
  }
`;