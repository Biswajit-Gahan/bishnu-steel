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
`;