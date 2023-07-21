import { css } from "styled-components";

const navbarResponsive = {
  mobile: css`
    .middle-container {
      display: none;
    }

    .hamberger-menu {
      display: block;
    }
  `,
  tablet: css`
    padding: 0 20px;

    .navbar-list {
      gap: 20px;
    }

    .right-container {
      display: none;
    }
  `,
  laptop: css`
    padding: 0 10px;

    .brand-header-logo {
      height: 40px;
    }

    .navbar-list {
      gap: 25px;
    }

    .navbar-item {
      font-size: 13px;
    }

    .request-quote-button {
      font-size: 10px;
      width: 150px;
    }
  `,
};

export default navbarResponsive;