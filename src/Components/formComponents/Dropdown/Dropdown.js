import React, { useState } from "react";
import ThreeButtons from "../ThreeButtons";
import "./Dropdown.css";

function Dropdown({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  return (
    <div className="work-area">
      <div
        className="work-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="work-title">Dropdown</div>
        <div className="work-description">Dropdown desc</div>
        <div className="mail-input-wrapper w-form">
          <form
            id="wf-form-Mail-input"
            name="wf-form-Mail-input"
            data-name="Mail-input"
            className="mail-input-box"
          >
            <select
              // type="select"
              // className="mail-input w-input"
              // maxLength={256}
              // name="Email-Input-Component"
              // data-name="Email Input Component"
              placeholder="Enter your mail address"
              // id="Email-Input-Component"
            >
              <option value="volvo">Choose the best</option>
            </select>
          </form>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Dropdown;
