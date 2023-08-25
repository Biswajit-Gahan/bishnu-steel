import styled from "styled-components";
import constants from "../../utils/constants";

export const QualityContainer = styled.div`
  /* about-section */
  .about-section {
    margin-bottom: 50px;
  }

  /* grades-section */
  .grades-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  .grades-section-wrapper {
    width: 1000px;
    min-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-direction: column;
  }
`;

export const ProductGradesContainer = styled.div`
  .product-grade-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .content, .content-link {
    ${constants.fontSize.paragraph.default};
    letter-spacing: 0.5px;
    line-height: 22px;
  }

  .underline {
    color: ${constants.colors.bsPinkDark};
    cursor: pointer;
    font-weight: 600;
  }

  .drop-down-container {
    padding: 30px;
    ${constants.boxShadow};
    border-radius: 10px;
  }
  .header-text {
    color: ${constants.colors.bsPinkDark};
    ${constants.fontSize.header.laptop};
    margin-bottom: 10px;
  }

  .sub-header-text {
    color: ${constants.colors.bsPinkDefault};
    ${constants.fontSize.header.mobile};
    margin-bottom: 5px;
  }

  .paragraph-text strong {
    color: ${constants.colors.bsBlue};
    ${constants.fontSize.header.mobile};
  }

  .paragraph-text {
    margin-bottom: 5px;
  }

  .close-button {
    margin-top: 10px;
    padding: 8px 25px;
    cursor: pointer;
    border: none;
    background-color: ${constants.colors.bsPinkDark};
    border-radius: 3px;
    color: ${constants.colors.bsWhite};
  }
`;