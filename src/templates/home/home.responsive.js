import { css } from "styled-components";

const homeResponsive = {
  mobile: css`
    .hero-container {
      width: 95%;
    }

    .header-button {
      width: 130px;
      height: 45px;
      margin: 5px;
      font-size: 13px;
    }
  `,
  tablet: css`
    .hero-container {
      width: 80%;
      gap: 10px;
    }

    .hero-text {
      font-size: 18px;
      line-height: 35px;

      .hero-bold {
        font-size: 25px;
      }
    }

    .hero-tag {
      font-size: 13px;
      line-height:20px;
    }

    .header-button {
      width: 150px;
      height: 50px;
      margin: 5px;
      font-size: 13px;
    }
  `,
  laptop: css`
    height: 600px;

    .hero-container {
      gap: 15px;
    }

    .hero-text {
      font-size: 22px;
      line-height: 45px;

      .hero-bold {
        font-size: 32px;
        letter-spacing: 0.5px;
      }
    }

    .hero-tag {
      font-size: 14px;
    }

    .header-button {
      width: 160px;
      height: 50px;
      margin: 7px;
      font-size: 14px;
    }
  `,
};

export default homeResponsive;