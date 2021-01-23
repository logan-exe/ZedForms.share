import React, { useState } from "react";
import ThreeButtons from "../ThreeButtons";

function Number({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  return (
    <div className="work-area">
      <div
        className="work-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="work-title">
          Kindly enter your Phone Number, so that we can get back to you.
        </div>
        <div className="work-description">
          Please make sure that it’s a professional one.
        </div>
        <div className="number-wrapper">
          <div className="number-button">
            <input
              type="number"
              name=""
              placeholder="Enter your number"
            ></input>
          </div>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Number;
