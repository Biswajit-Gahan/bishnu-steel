import { css } from "styled-components";

const aboutProductResponsive = {
  mobile: css`
    flex-direction: column;
    height: 450px;
    gap: 40px;

    .product-image-container {
      width: 280px;
      height: 150px;
      min-height: 180px;
      min-width: 250px;
    }

    .product-header-text {
      text-align: center;
      font-size: 16px;
    }

    .about-product-text {
      text-align: center;
      line-height: 16px;
    }
  `,
  tablet: css`
    height: 300px;
    gap: 20px;

    .product-image-container {
      width: 250px;
      height: 150px;
      min-height: 150px;
      min-width: 200px;
    }

    .product-details-container {
      width: 350px;
      gap: 10px;
    }

    .product-header-text {
      font-size: 18px;
    }

    .about-product-text {
      font-size: 13px;
      line-height: 18px;
    }
  `,
  laptop: css`
    height: 350px;
    gap: 45px;

    .product-image-container {
      width: 300px;
      height: 200px;
    }

    .product-details-container {
      width: 500px;
      gap: 15px;
    }

    .product-header-text {
      font-size: 20px;
    }

    .about-product-text {
      font-size: 14px;
      line-height: 22px;
    }
  `,
}

export default aboutProductResponsive;