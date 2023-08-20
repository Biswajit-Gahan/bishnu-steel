import React from "react";
import { MessageBoxContainer } from "./message.box.styles";
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const MessageBox = () => {
  return (
    <MessageBoxContainer>
      <div className="strap-design"></div>
      <div className="message-box-wrapper">
        <div className="header-container">
          <h2 className="header-text anime" data-move="move-up">Still Need Help ?</h2>
          <p className="header-tag anime" data-move="move-left" data-delay={0.2}>Fill the details,<br />We'll get back to you.</p>
        </div>
        <div className="message-container">
          <input type="text" id="name" className="input input-name anime" placeholder="Full Name..." data-move="move-up" data-delay={0.3} />
          <input type="text" id="mobile" className="input input-mobile anime" placeholder="Mobile Number..." data-move="move-up" data-delay={0.4} />
          <input type="text" id="email" className="input input-email anime" placeholder="Email ID..." data-move="move-up" data-delay={0.5} />
          <textarea className="input input-message anime" id="message" placeholder="Message..." data-move="move-up" data-delay={0.6}></textarea>
          <button className="input submit-button anime" data-move="move-up" data-delay={0.7}><SendRoundedIcon />Send Message</button>
        </div>
      </div>
    </MessageBoxContainer>
  );
};

export default MessageBox;