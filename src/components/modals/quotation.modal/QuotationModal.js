import React from "react";
import { createPortal } from "react-dom";
import { QuotationModalContainer } from "./quotation.modal.styles";

const QuotationModal = ({ productType, clickEvent }) => {
  return createPortal(
    <QuotationModalContainer>
      {/* QUOTATION FORM CONTAINER */}
      <div className="quotation-form-container">
        {/* YOUR DETAILS CONTAINER */}
        <div className="your-details-container">
          {/* HEADER TEXT */}
          <h4 className="your-details-container-header-text header-text">Your Details</h4>

          {/* YOUR DETAILS INPUTS CONTAINER */}
          <div className="your-details-inputs-container input-container">
            {/* INPUT CONTAINER STACK */}
            <div className="input-container-stack">
              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="username" className="input-label">Full Name</label>
                <input type="text" id="username" className="name-input input" placeholder="your full name..." />
              </div>

              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="useremail" className="input-label">Email ID</label>
                <input type="email" id="useremail" className="email-input input" placeholder="your email id..." />
              </div>
            </div>

            {/* INPUT CONTAINER STACK */}
            <div className="input-container-stack">
              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="usermobile" className="input-label">Mobile Number</label>
                <input type="text" id="usermobile" className="mobile-input input" placeholder="your mobile number..." />
              </div>

              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="company" className="input-label">Company Name</label>
                <input type="text" id="company" className="company-input input" placeholder="your company name..." />
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT DETAILS CONTAINER */}
        <div className="product-details-container">
          {/* HEADER TEXT */}
          <h4 className="product-details-container-header-text header-text">Product Details</h4>
          {/* PRODUCT TYPE INPUTS CONTAINER */}
          <div className="productType-inputs-container input-container">
            {/* INPUT CONTAINER STACK */}
            <div className="input-container-stack">
              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="productType" className="input-label">Steel Type</label>
                <select defaultValue={productType} id="productType" className="productType-select input">
                  <option value="round" className="option">Round Stainless Tube</option>
                  <option value="square" className="option">Square Stainless Tube</option>
                  <option value="rectangle" className="option">Rectangle Stainless Tube</option>
                </select>
              </div>

              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="thickness" className="input-label">Thickness <strong className="bold-text">(MM)</strong></label>
                <input type="text" id="thickness" className="thickness-input input" placeholder="eg: 0.3mm - 3.0mm" />
              </div>
            </div>


            {/* INPUT CONTAINER STACK */}
            <div className="input-container-stack">
              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="gradeType" className="input-label">Grade</label>
                <select defaultValue="201" id="gradeType" className="gradeType-select input">
                  <option value="201" className="option">201</option>
                  <option value="202" className="option">202</option>
                  <option value="304" className="option">304</option>
                  <option value="304L" className="option">304L</option>
                  <option value="316" className="option">316</option>
                  <option value="316L" className="option">316L</option>
                </select>
              </div>

              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="quantity" className="input-label">Quantity <strong className="bold-text">(TON)</strong></label>
                <input type="text" id="quantity" className="quantity-input input" placeholder="quantity in tons..." />
              </div>
            </div>

            {/* INPUT CONTAINER STACK */}
            <div className="input-container-stack">
              {/* INPUTS CONTAINER */}
              <div className="inputs-container">
                <label htmlFor="quantity" className="input-label">Other Requirements</label>
                <textarea type="text" id="quantity" className="text-area-input input" placeholder="please specify your addition requirements, if any..." />
              </div>
            </div>
          </div>
        </div>

        {/* BUTTONS CONTAINER */}
        <div className="buttons-container">
          <button type="button" className="request-quotation-button modal-button">Request Quotation</button>
          <button type="button" className="close-button modal-button" onClick={clickEvent}>Close</button>
        </div>
      </div>
    </QuotationModalContainer>,
    document.querySelector("#quotation-modal")
  );
};

export default QuotationModal;