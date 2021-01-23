import React, { useState } from "react";
import "./OpinionScale.css";
import ThreeButtons from "../ThreeButtons";

function OpinioneScale({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  return (
    <div className="work-area">
      <div
        className="work-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="work-title">
          Please give us your feedback about our service.
        </div>
        <div className="work-description">
          Your feedback pushes us to work hard.
        </div>
        <div className="opinion-items-wrapper">
          <div className="opinion-number-wrapper">
            <div className="opinion-item">
              <div className="opinion-item-number">1</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">2</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">3</div>
            </div>
            <div className="opinion-item opinion-item-selected">
              <div className="opinion-item-number opinion-number-selected">
                4
              </div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">5</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">6</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">7</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">8</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">9</div>
            </div>
            <div className="opinion-item opinion-item-last">
              <div className="opinion-item-number">10</div>
            </div>
          </div>
          <div className="opinion-label-wrapper">
            <div className="opinion-label-text">Least likely</div>
            <div className="opinion-label-text">Most likely</div>
          </div>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default OpinioneScale;
