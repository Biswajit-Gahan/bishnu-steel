import { css } from "styled-components";

const constants = {
  device: {
    mobile: "650px",
    tablet: "900px",
    laptop_small: "1250px",
    desktop_small: "2000px",
  },

  boxShadow: css`
    box-shadow: 0px 5px 16px -3px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 5px 16px -3px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 5px 16px -3px rgba(0,0,0,0.5);
  `,

  fontSize: {
    header: {
      default: css`font-size: 22px`,
      laptop: css`font-size: 20px`,
      tablet: css`font-size: 18px`,
      mobile: css`font-size: 15px`,
    },

    paragraph: {
      default: css`font-size: 16px`,
      laptop: css`font-size: 15px`,
      tablet: css`font-size: 14px`,
      mobile: css`font-size: 12.5px`,
    },
  },
};

export default constants;