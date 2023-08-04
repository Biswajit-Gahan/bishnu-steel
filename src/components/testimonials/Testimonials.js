import React from "react";
import { TestimonialsContainer } from "./testimonials.styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      {/* <div className="top-container">
        <h2 className="top-header">What our customer says ?</h2>
      </div>
      <div className="bottom-container">
        <div className="bottom-top-container">
          <div className="user-avatar-container">
            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="user-avatar" className="userAvatar" />
          </div>
          <div className="user-details-container">
            <h4 className="user-name">Ashman Kumar Panda</h4>
            <p className="user-designation">Co-Founder of Birla Steels.</p>
          </div>
        </div>
        <div className="bottom-bottom-container">
          <p className="feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem, pariatur eos deserunt quia nam dolorum id, quas temporibus quod assumenda debitis, officiis adipisci vero vitae quam odit doloremque doloribus!
            Quam deleniti in ducimus architecto vero cupiditate ut veritatis, sequi et ipsum dignissimos, placeat, assumenda voluptate quis ipsam sint iste fuga sunt aliquid iure ad. Laudantium et tempore aliquam. Possimus</p>
        </div>

        <div className="bottom-button-container">
          <button className="left-button"><ArrowBackIcon /></button>
          <button className="right-button"><ArrowForwardIcon /></button>
        </div>
      </div> */}
      {/* HEADER CONTAINER */}
      <div className="header-container">
        <h2 className="header-text">What our customers says ?</h2>
      </div>

      {/* FEEDBACK CONTAINER */}
      <div className="feedback-container">
        {/* FEEDBACK TOP CONTAINER */}
        <div className="feedback-top-container">
          {/* FEEDBACK WRAPPER */}
          <div className="feedback-wrapper">
            {/* USER INFO CONTAINER */}
            <div className="user-info-container">
              {/* USER AVATAR */}
              <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="user-avatar" className="user-avatar" />

              {/* USER NAME CONTAINER */}
              <div className="user-name-container">
                <h4 className="user-name">John Doee</h4>
                <p className="user-tag">Founder of Birla Steels.</p>
              </div>
            </div>
            {/* USER FEEDBACK CONTAINER */}
            <div className="user-feedback-container">
              <p className="user-feedback">
                Our Engineering team works directly with Bishnu Steels to achieve our company goals. Bishnu Steels is always very helpful, gives us on-time delivery and the sales reps are always willing to research to get answers for our needs.
              </p>
            </div>
          </div>
        </div>

        {/* FEEDBACK BOTTOM CONTAINER */}
        <div className="feedback-bottom-container">
          <button className="left-button"><ArrowBackIcon /></button>
          <button className="right-button"><ArrowForwardIcon /></button>
        </div>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;