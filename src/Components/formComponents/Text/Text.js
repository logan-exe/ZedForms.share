import React, { useState } from "react";
import ThreeButtons from "../ThreeButtons";
import "./Text.css";

function Text({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");

  return (
    <div>
      <div className="work-area">
        <div
          data-w-id="5dac4e47-a87b-a2c0-54ed-09c8abacd65c"
          className="textbox-wrapper"
          onMouseEnter={() => setIsDisplay("flex")}
          onMouseLeave={() => setIsDisplay("none")}
        >
          <div className="textbox-title">
            Are sufficient efforts being made to solicit colleague opinions and
            feedback?
          </div>
          <div className="textbox-description">If yes Please explain</div>
          <div>
            <textarea
              className="textbox-input"
              type="textarea"
              // name=""
              // value=""
              rows="4"
              cols="200"
              placeholder="start typing..."
            ></textarea>
          </div>
          <div>
            <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
