import React, { useState } from "react";
import "./Agreement.css";
import ThreeButtons from "../ThreeButtons";

function Agreement({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  return (
    <div className="work-area">
      <div
        className="agreement-work-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="work-title">What’s covered in these terms?</div>
        <div className="work-description">
          We know it’s tempting to skip these Terms of Service, but it’s
          important to establish what you can expect from us as you use Zedcloud
          services, and what we expect from you. Your content remains yours,
          which means that you retain any intellectual property rights that you
          have in your content. For example, you have intellectual property
          rights in the creative content that you make, such as reviews that you
          write. Or you may have the right to share someone else’s creative
          content if they’ve given you their permission.
        </div>
        <div className="agreement-checkbox-wrapper">
          <div className="check-icon">
            <div className="check-icon-svg w-embed">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5ZM5 4C4.44772 4 4 4.44772 4 5V15C4 15.5523 4.44772 16 5 16H15C15.5523 16 16 15.5523 16 15V5C16 4.44772 15.5523 4 15 4H5Z"
                  fill="#121242"
                />
              </svg>
            </div>
          </div>
          <div className="agree-check-text">
            I agree to the terms and conditions
          </div>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Agreement;
