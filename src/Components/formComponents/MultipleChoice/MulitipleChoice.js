import React, { useState } from "react";
import "./MultipleChoice.css";
import ThreeButtons from "../ThreeButtons";

function MulitipleChoice({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");

  // const handleMouseOver = () => {
  //   console.log("hello world");
  // };
  const handleEdit = () => {
    console.log("logged from multiple choice", id);
  };
  return (
    <div>
      <div className="work-area">
        <div
          data-w-id="5dac4e47-a87b-a2c0-54ed-09c8abacd65c"
          className="radio-component-wrapper"
          onMouseEnter={() => setIsDisplay("flex")}
          onMouseLeave={() => setIsDisplay("none")}
        >
          <div className="radio-component-title">
            How was your experience in the following areas of our customer
            service?
          </div>
          <div className="radio-component-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
            volutpat, accumsan, ipsum gravida aliquam, velit non. Sit dictumst
            ullamcorper ultrices adipiscing adipiscing. Sed turpis egestas morbi
            pharetra sed id sit.
          </div>
          <div className="radio-component-choice">
            <div className="radio-icon">
              <div className="radio-icon-svg w-embed">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                    fill="#121242"
                  />
                </svg>
              </div>
            </div>
            <div className="radio-component-choice-text">Very satisfied</div>
          </div>
          <div className="radio-component-choice">
            <div className="radio-icon">
              <div className="radio-icon-svg w-embed">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                    fill="#121242"
                  />
                </svg>
              </div>
            </div>
            <div className="radio-component-choice-text">
              Somewhat satisfied
            </div>
          </div>
          <div className="radio-component-choice">
            <div className="radio-icon">
              <div className="radio-icon-svg w-embed">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                    fill="#121242"
                  />
                </svg>
              </div>
            </div>
            <div className="radio-component-choice-text">
              Somewhat dissatisfied
            </div>
          </div>
          <div className="radio-component-choice">
            <div className="radio-icon">
              <div className="radio-icon-svg w-embed">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                    fill="#121242"
                  />
                </svg>
              </div>
            </div>
            <div className="radio-component-choice-text">Very dissatisfied</div>
          </div>
          <div>
            {/* <div
              // className="work-button-wrapper"
              style={{
                display: `${isDisplay}`,
                justifyContent: "flex-end",
                paddingTop: "16px",
                marginBottom: "-16px",
              }}
            >
              <div onClick={handleEdit} className="work-button edit-button">
                <div className="edit-text">Edit</div>
              </div>
              <div className="work-button">
                <div className="duplicate-text">Duplicate</div>
              </div>
              <div className="work-button">
                <div className="delete-button-text">Delete</div>
              </div>
            </div> */}
            <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
            {/* </ThreeButtons> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MulitipleChoice;
