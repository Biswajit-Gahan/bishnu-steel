import React from "react";
import { MessageBoxContainer } from "./message.box.styles";
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const MessageBox = () => {
  return (
    <MessageBoxContainer>
      <div className="strap-design"></div>
      <div className="message-box-wrapper">
        <div className="header-container">
          <h2 className="header-text">Still Confused ?</h2>
          <p className="header-tag">Fill the details,<br />We'll get back to you.</p>
        </div>
        <div className="message-container">
          <input type="text" id="name" className="input input-name" placeholder="Full Name..." />
          <input type="text" id="mobile" className="input input-mobile" placeholder="Mobile Number..." />
          <input type="text" id="email" className="input input-email" placeholder="Email ID..." />
          <textarea className="input input-message" id="message" placeholder="Message..."></textarea>
          <button className="input submit-button"><SendRoundedIcon />Send Message</button>
        </div>
      </div>
    </MessageBoxContainer>
  );
};

export default MessageBox;