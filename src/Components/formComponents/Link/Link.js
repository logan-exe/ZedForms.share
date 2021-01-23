import React, { useState } from "react";
import ThreeButtons from "../ThreeButtons";

function Link({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  return (
    <div className="work-area">
      <div
        className="work-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="work-title">Kindly enter your Website Address</div>
        <div className="work-description">
          Please make sure that it’s a professional one.
        </div>
        <div className="mail-input-wrapper w-form">
          <form
            id="wf-form-Mail-input"
            name="wf-form-Mail-input"
            data-name="Mail-input"
            className="mail-input-box"
          >
            <input
              type="text"
              className="mail-input w-input"
              maxLength={256}
              name="Email-Input-Component"
              data-name="Email Input Component"
              placeholder="Enter your website"
              id="Email-Input-Component"
            />
          </form>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Link;
