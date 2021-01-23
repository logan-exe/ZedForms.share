import React, { useState } from "react";
import ThreeButtons from "../ThreeButtons";
import "./SectionBreak.css";

function SectionBreak({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  return (
    <div className="work-area">
      <div
        className="work-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="sectionBreak-wrapper">
          <div className="sectionBreak-button">
            <div className="sectionBreak-button-text">Next page</div>
          </div>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default SectionBreak;
