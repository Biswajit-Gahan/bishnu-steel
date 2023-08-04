import React from "react";
import { NeedAssistanceContainer } from "./need.assistance.styles";

const NeedAssistance = () => {
  return (
    <NeedAssistanceContainer>
      <div className="wrapper">
        <div className="content-container">
          {/* WRAPPER LEFT CONTAINER */}
          <div className="wrapper-left-container">
            {/* HEADER CONTAINER */}
            <div className="header-container">
              <h2 className="header-text">Need Assistance ?</h2>
              <p className="header-tag">It's easy.</p>
            </div>

            {/* HEADER CONTENT */}
            <p className="header-content">
              If you have any queries or need assistance please provide your queries here, our team will contact you to clarify the queries.
            </p>
          </div>

          {/* WRAPPER RIGHT CONTAINER */}
          <div className="wrapper-right-container">
            {/* MATERIAL TYPE */}
            <select defaultValue="Material Types" name="material-type" id="material-type" className="material-type">
              <option className="material-option" value="Material Types" disabled={true}>Material Types</option>
              <option className="material-option" value="round-tubes">Round Stainless Tubes</option>
              <option className="material-option" value="square-tubes">Square Stainless Tubes</option>
              <option className="material-option" value="rectangle-tubes">Rectangle Stainless Tubes</option>
            </select>

            {/* MATERIAL QUANTITY */}
            <input type="text" name="material-quantity" id="material-quantity" className="material-quantity" placeholder="Material Quantity" />

            {/* GENERATE QUOTATION BUTTON */}
            <button type="button" className="generate-quotation-button">Generate Quotation</button>
          </div>
        </div>
      </div>

    </NeedAssistanceContainer>
  );
};

export default NeedAssistance;