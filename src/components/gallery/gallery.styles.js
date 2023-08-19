import styled from "styled-components";
import constants from "../../utils/constants";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  .gallery-title {
    ${constants.fontSize.header.default};
    color: ${constants.colors.bsPinkDefault};
  }

  .gallery-content-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }

  .gallery-image {
    width: 250px;
    height: 250px;
    min-width: 250px;
    min-height: 250px;
    object-fit: cover;
    object-position: center;
    ${constants.boxShadow};
    border-radius: 5px;
    transition: transform 0.2s ease-in-out, padding 0.2s ease-in-out;
    
    &:hover {
      padding: 5px;
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;