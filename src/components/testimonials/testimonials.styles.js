import styled from "styled-components";
import constants from "../../utils/constants";
import TestimonialsResponsive from "./testimonials.responsive";

export const TestimonialsContainer = styled.div`
  /* display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  width: 800px;
  margin-top: 50px;

  .top-header {
    text-align: center;
  }

  .bottom-container {
    
    padding: 70px 100px;
    border-radius: 10px;
    ${constants.boxShadow};
    position: relative;
    background-color: var(--bs-orange);
  }

  .bottom-top-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .userAvatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid var(--white);
  }

  .user-name {
    ${constants.fontSize.header.tablet};
    margin-bottom: 5px;
    color: var(--white);
  }

  .user-designation {
    ${constants.fontSize.paragraph.tablet};
    color: var(--white);
  }

  .feedback {
    ${constants.fontSize.paragraph.default};
    color: var(--white);
    letter-spacing: 0.5px;
    text-align: center;
  }

  .left-button, .right-button {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    ${constants.fontSize.header.laptop};
    font-weight: 700;
    color: var(--bs-orange);
    margin: 0 5px;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left-button {
    left: 30px;
  }

  .right-button {
    right: 30px;
  } */

  min-width: 800px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  .header-text {
    ${constants.fontSize.header.default};
    color: ${constants.colors.bsDark};
  }

  .feedback-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-direction: column;
    background-color: ${constants.colors.bsPinkDark};
    padding: 50px;
    border-radius: 5px;
  }

  .feedback-top-container {
    display: flex;
    overflow: hidden;
  }

  .feedback-wrapper {
    min-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .user-info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .user-avatar {
    min-width: 70px;
    width: 70px;
    min-height: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
    border: 3.5px solid ${constants.colors.bsWhite};
  }

  .user-name-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .user-name {
    ${constants.fontSize.header.tablet};
    color: ${constants.colors.bsWhite};
  }

  .user-tag {
    ${constants.fontSize.paragraph.tablet};
    font-weight: 600;
    color: ${constants.colors.bsWhite};
  }

  .user-feedback {
    ${constants.fontSize.paragraph.default};
    line-height: 22px;
    letter-spacing: 0.5px;
    color: ${constants.colors.bsWhite};
  }

  .feedback-bottom-container {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 10px;
  }

  .left-button, .right-button {
    min-height: 40px;
    min-width: 40px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: ${constants.colors.bsWhite};
    border: none;
    color: ${constants.colors.bsPinkDark};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width: ${constants.device.laptop_small}) {
    ${TestimonialsResponsive.laptop};
  }

  @media (max-width: ${constants.device.tablet}) {
    ${TestimonialsResponsive.tablet};
  }

  @media (max-width: ${constants.device.mobile}) {
    ${TestimonialsResponsive.mobile};
  }
`;