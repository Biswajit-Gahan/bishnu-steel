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

  colors: {
    bsBlue: "#00ADB5",
    bsBlueTransparent: "rgba(0,173,181,0.79)",
    bsBlueTransparentLight: "rgba(0,138,145,0.14)",
    bsPinkDefault: "#FF005C",
    bsPinkDark: "#B80058",
    bsPinkTranparent: "rgba(255,0,92,0.33)",
    bsTextDefault: "#515151",
    bsWhite: "#FFFFFF",
    bsGrayTransparent: "rgba(95,94,94,0.35)",
    bsDark: "#5F5F5F",
    bsDarkBold: "#171717",
    bsDarkTransparent: "rgba(37,37,37,0.84)",
  },
};

export default constants;