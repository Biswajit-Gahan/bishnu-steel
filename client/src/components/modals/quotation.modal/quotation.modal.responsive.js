import { css } from "styled-components";
import constants from "../../../utils/constants";

const quotationModalResponsive = {
  mobile: css`
    padding: 10px;

    .input-container-stack {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
    }

    .input {
      width: 230px;
      height: 35px;
    }

    .text-area-input {
      width: 100%;
      height: 250px;
      resize: none;
      padding: 10px;
    }

    .buttons-container {
      flex-direction: column;
      width: 100%;
    }

    .modal-button {
      width: 100%;
      padding: 10px 0;
    }
  `,
  tablet: css`
    
  `,
  laptop: css`
    
  `,
};

export default quotationModalResponsive;