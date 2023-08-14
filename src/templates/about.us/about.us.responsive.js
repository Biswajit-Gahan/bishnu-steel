import { css } from "styled-components";
import constants from "../../utils/constants";

const aboutUsResponsive = {
  mobile: css`
    .our-vision-container, .our-mission-container, .our-products-container {
      width: 100%;
      padding: 0 20px;
    }

    .our-vision-header-text, .our-mission-header-text, .our-products-header-text {
      ${constants.fontSize.header.mobile};
    }

    .our-vision-content, .our-mission-content, .our-products-content {
      ${constants.fontSize.paragraph.mobile};
    }

    .products-container {
      justify-content: center;
      gap: 20px;
    }
  `,
  tablet: css`
    .our-vision-container, .our-mission-container, .our-products-container {
      width: 600px;
    }

    .our-vision-header-text, .our-mission-header-text, .our-products-header-text {
      ${constants.fontSize.header.mobile};
    }

    .our-vision-content, .our-mission-content, .our-products-content {
      ${constants.fontSize.paragraph.mobile};
    }
  `,
  laptop: css`
    .our-vision-container, .our-mission-container, .our-products-container {
      width: 800px;
    }

    .our-vision-header-text, .our-mission-header-text, .our-products-header-text {
      ${constants.fontSize.header.tablet};
    }

    .our-vision-content, .our-mission-content, .our-products-content {
      ${constants.fontSize.paragraph.tablet};
    }
  `,
};

export default aboutUsResponsive;