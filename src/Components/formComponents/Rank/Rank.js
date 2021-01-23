import React, { useState } from "react";
import "./Rank.css";
import ThreeButtons from "../ThreeButtons";

function Rank({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  return (
    <div className="work-area">
      <div
        className="work-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="work-title">
          Please rank the choices based on your opinion.
        </div>
        <div className="work-description">
          Drag and arrange choices to help us improve in our services.
        </div>
        <div className="rank-items-wrapper">
          <div className="rank-item">
            <div className="rank-item-number-container">
              <div className="rank-item-number">1</div>
            </div>
            <div className="rank-item-text">Development and launch</div>
          </div>
          <div className="rank-item">
            <div className="rank-item-number-container">
              <div className="rank-item-number">2</div>
            </div>
            <div className="rank-item-text">
              User Research &amp; Journey mapping
            </div>
          </div>
          <div className="rank-item">
            <div className="rank-item-number-container">
              <div className="rank-item-number">3</div>
            </div>
            <div className="rank-item-text">Production Deployment</div>
          </div>
          <div className="rank-item rank-item-last">
            <div className="rank-item-number-container">
              <div className="rank-item-number">4</div>
            </div>
            <div className="rank-item-text">Go-to-market Sales</div>
          </div>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Rank;
