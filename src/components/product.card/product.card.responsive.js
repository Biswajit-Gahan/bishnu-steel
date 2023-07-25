import { css } from "styled-components";

const productCardResponsive = {
  mobile: css`
    width: 230px;
    height: 230px;
  `,
  tablet: css`
    width: 180px;
    height: 180px;

    &::after {
      font-size: 12px;
    }
  `,
  laptop: css`
    width: 220px;
    height: 220px;

    &::after {
      font-size: 14px;
    }
  `,
};

export default productCardResponsive;