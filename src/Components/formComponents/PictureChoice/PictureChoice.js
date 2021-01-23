import React, { useState } from "react";
import "./PictureChoice.css";
import ThreeButtons from "../ThreeButtons";

function PictureChoice({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  return (
    <div className="work-area">
      <div
        className="work-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="work-title">
          Which branding logo color suits our application?
        </div>
        <div className="work-description">
          Kindly help the design team with your responses, to help us with
          better in decision making.
        </div>
        <div className="picture-choice-wrapper">
          <div className="picture-container">
            <div className="picture-upload-icon">
              <div className="picture-choice-icon-svg w-embed">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 11.9999C20.5376 11.9999 23 14.4623 23 17.4999C23 20.5374 20.5376 22.9999 17.5 22.9999C14.4624 22.9999 12 20.5374 12 17.4999C12 14.4623 14.4624 11.9999 17.5 11.9999ZM17.5 13.9991L17.4101 14.0072C17.206 14.0442 17.0451 14.2051 17.0081 14.4092L17 14.4991L16.9996 16.9991L14.4977 16.9999L14.4078 17.0079C14.2037 17.045 14.0427 17.2059 14.0057 17.41L13.9977 17.4999L14.0057 17.5898C14.0427 17.7939 14.2037 17.9548 14.4078 17.9918L14.4977 17.9999L17.0007 17.9991L17.0011 20.5034L17.0092 20.5932C17.0462 20.7973 17.2071 20.9583 17.4112 20.9953L17.5011 21.0034L17.591 20.9953C17.7951 20.9583 17.956 20.7973 17.9931 20.5932L18.0011 20.5034L18.0007 17.9991L20.5046 17.9999L20.5944 17.9918C20.7985 17.9548 20.9595 17.7939 20.9965 17.5898L21.0046 17.4999L20.9965 17.41C20.9595 17.2059 20.7985 17.045 20.5944 17.0079L20.5046 16.9999L17.9996 16.9991L18 14.4991L17.9919 14.4092C17.9549 14.2051 17.794 14.0442 17.5899 14.0072L17.5 13.9991ZM13.9247 2.50293C14.7225 2.50293 15.4607 2.9254 15.8647 3.6133L16.6793 4.99988H18.75C20.5449 4.99988 22 6.45496 22 8.24988L22.0008 12.8102C21.5566 12.3838 21.052 12.0199 20.5011 11.7327L20.5 8.24988C20.5 7.28338 19.7165 6.49988 18.75 6.49988H16.25C15.9841 6.49988 15.738 6.35906 15.6033 6.12976L14.5714 4.37305C14.4367 4.14375 14.1906 4.00293 13.9247 4.00293H10.1224C9.89892 4.00293 9.6892 4.1024 9.54793 4.27072L9.48325 4.36048L8.38913 6.14233C8.25271 6.3645 8.01071 6.49988 7.75 6.49988H5.25C4.2835 6.49988 3.5 7.28338 3.5 8.24988V17.7499C3.5 18.7164 4.2835 19.4999 5.25 19.4999L11.3133 19.4993C11.4857 20.0331 11.7252 20.5367 12.0219 21.0001L5.25 20.9999C3.45507 20.9999 2 19.5448 2 17.7499V8.24988C2 6.45496 3.45507 4.99988 5.25 4.99988H7.33042L8.205 3.57558C8.61425 2.90908 9.34026 2.50293 10.1224 2.50293H13.9247ZM12 7.99988C14.0018 7.99988 15.6983 9.30693 16.2826 11.1141C15.7821 11.2086 15.3022 11.3607 14.8497 11.563C14.4571 10.3648 13.3296 9.49988 12 9.49988C10.3431 9.49988 9 10.843 9 12.4999C9 13.9293 9.99965 15.1251 11.338 15.4266C11.1806 15.8933 11.0748 16.3854 11.0278 16.8945C9.00995 16.4503 7.5 14.6514 7.5 12.4999C7.5 10.0146 9.51472 7.99988 12 7.99988Z"
                    fill="#9393B0"
                  />
                </svg>
              </div>
            </div>
            <div className="picture-check-icon">
              <div className="picture-choice-uncheck-icon-svg w-embed">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM4.5 4H11.5C11.7761 4 12 4.22386 12 4.5V11.5C12 11.7761 11.7761 12 11.5 12H4.5C4.22386 12 4 11.7761 4 11.5V4.5C4 4.22386 4.22386 4 4.5 4Z"
                    fill="#9393B0"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="picture-container">
            <div className="picture-upload-icon">
              <div className="picture-choice-icon-svg w-embed">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 11.9999C20.5376 11.9999 23 14.4623 23 17.4999C23 20.5374 20.5376 22.9999 17.5 22.9999C14.4624 22.9999 12 20.5374 12 17.4999C12 14.4623 14.4624 11.9999 17.5 11.9999ZM17.5 13.9991L17.4101 14.0072C17.206 14.0442 17.0451 14.2051 17.0081 14.4092L17 14.4991L16.9996 16.9991L14.4977 16.9999L14.4078 17.0079C14.2037 17.045 14.0427 17.2059 14.0057 17.41L13.9977 17.4999L14.0057 17.5898C14.0427 17.7939 14.2037 17.9548 14.4078 17.9918L14.4977 17.9999L17.0007 17.9991L17.0011 20.5034L17.0092 20.5932C17.0462 20.7973 17.2071 20.9583 17.4112 20.9953L17.5011 21.0034L17.591 20.9953C17.7951 20.9583 17.956 20.7973 17.9931 20.5932L18.0011 20.5034L18.0007 17.9991L20.5046 17.9999L20.5944 17.9918C20.7985 17.9548 20.9595 17.7939 20.9965 17.5898L21.0046 17.4999L20.9965 17.41C20.9595 17.2059 20.7985 17.045 20.5944 17.0079L20.5046 16.9999L17.9996 16.9991L18 14.4991L17.9919 14.4092C17.9549 14.2051 17.794 14.0442 17.5899 14.0072L17.5 13.9991ZM13.9247 2.50293C14.7225 2.50293 15.4607 2.9254 15.8647 3.6133L16.6793 4.99988H18.75C20.5449 4.99988 22 6.45496 22 8.24988L22.0008 12.8102C21.5566 12.3838 21.052 12.0199 20.5011 11.7327L20.5 8.24988C20.5 7.28338 19.7165 6.49988 18.75 6.49988H16.25C15.9841 6.49988 15.738 6.35906 15.6033 6.12976L14.5714 4.37305C14.4367 4.14375 14.1906 4.00293 13.9247 4.00293H10.1224C9.89892 4.00293 9.6892 4.1024 9.54793 4.27072L9.48325 4.36048L8.38913 6.14233C8.25271 6.3645 8.01071 6.49988 7.75 6.49988H5.25C4.2835 6.49988 3.5 7.28338 3.5 8.24988V17.7499C3.5 18.7164 4.2835 19.4999 5.25 19.4999L11.3133 19.4993C11.4857 20.0331 11.7252 20.5367 12.0219 21.0001L5.25 20.9999C3.45507 20.9999 2 19.5448 2 17.7499V8.24988C2 6.45496 3.45507 4.99988 5.25 4.99988H7.33042L8.205 3.57558C8.61425 2.90908 9.34026 2.50293 10.1224 2.50293H13.9247ZM12 7.99988C14.0018 7.99988 15.6983 9.30693 16.2826 11.1141C15.7821 11.2086 15.3022 11.3607 14.8497 11.563C14.4571 10.3648 13.3296 9.49988 12 9.49988C10.3431 9.49988 9 10.843 9 12.4999C9 13.9293 9.99965 15.1251 11.338 15.4266C11.1806 15.8933 11.0748 16.3854 11.0278 16.8945C9.00995 16.4503 7.5 14.6514 7.5 12.4999C7.5 10.0146 9.51472 7.99988 12 7.99988Z"
                    fill="#9393B0"
                  />
                </svg>
              </div>
            </div>
            <div className="picture-check-icon">
              <div className="picture-choice-uncheck-icon-svg w-embed">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM4.5 4H11.5C11.7761 4 12 4.22386 12 4.5V11.5C12 11.7761 11.7761 12 11.5 12H4.5C4.22386 12 4 11.7761 4 11.5V4.5C4 4.22386 4.22386 4 4.5 4Z"
                    fill="#9393B0"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="picture-container">
            <div className="picture-upload-icon">
              <div className="picture-choice-icon-svg w-embed">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 11.9999C20.5376 11.9999 23 14.4623 23 17.4999C23 20.5374 20.5376 22.9999 17.5 22.9999C14.4624 22.9999 12 20.5374 12 17.4999C12 14.4623 14.4624 11.9999 17.5 11.9999ZM17.5 13.9991L17.4101 14.0072C17.206 14.0442 17.0451 14.2051 17.0081 14.4092L17 14.4991L16.9996 16.9991L14.4977 16.9999L14.4078 17.0079C14.2037 17.045 14.0427 17.2059 14.0057 17.41L13.9977 17.4999L14.0057 17.5898C14.0427 17.7939 14.2037 17.9548 14.4078 17.9918L14.4977 17.9999L17.0007 17.9991L17.0011 20.5034L17.0092 20.5932C17.0462 20.7973 17.2071 20.9583 17.4112 20.9953L17.5011 21.0034L17.591 20.9953C17.7951 20.9583 17.956 20.7973 17.9931 20.5932L18.0011 20.5034L18.0007 17.9991L20.5046 17.9999L20.5944 17.9918C20.7985 17.9548 20.9595 17.7939 20.9965 17.5898L21.0046 17.4999L20.9965 17.41C20.9595 17.2059 20.7985 17.045 20.5944 17.0079L20.5046 16.9999L17.9996 16.9991L18 14.4991L17.9919 14.4092C17.9549 14.2051 17.794 14.0442 17.5899 14.0072L17.5 13.9991ZM13.9247 2.50293C14.7225 2.50293 15.4607 2.9254 15.8647 3.6133L16.6793 4.99988H18.75C20.5449 4.99988 22 6.45496 22 8.24988L22.0008 12.8102C21.5566 12.3838 21.052 12.0199 20.5011 11.7327L20.5 8.24988C20.5 7.28338 19.7165 6.49988 18.75 6.49988H16.25C15.9841 6.49988 15.738 6.35906 15.6033 6.12976L14.5714 4.37305C14.4367 4.14375 14.1906 4.00293 13.9247 4.00293H10.1224C9.89892 4.00293 9.6892 4.1024 9.54793 4.27072L9.48325 4.36048L8.38913 6.14233C8.25271 6.3645 8.01071 6.49988 7.75 6.49988H5.25C4.2835 6.49988 3.5 7.28338 3.5 8.24988V17.7499C3.5 18.7164 4.2835 19.4999 5.25 19.4999L11.3133 19.4993C11.4857 20.0331 11.7252 20.5367 12.0219 21.0001L5.25 20.9999C3.45507 20.9999 2 19.5448 2 17.7499V8.24988C2 6.45496 3.45507 4.99988 5.25 4.99988H7.33042L8.205 3.57558C8.61425 2.90908 9.34026 2.50293 10.1224 2.50293H13.9247ZM12 7.99988C14.0018 7.99988 15.6983 9.30693 16.2826 11.1141C15.7821 11.2086 15.3022 11.3607 14.8497 11.563C14.4571 10.3648 13.3296 9.49988 12 9.49988C10.3431 9.49988 9 10.843 9 12.4999C9 13.9293 9.99965 15.1251 11.338 15.4266C11.1806 15.8933 11.0748 16.3854 11.0278 16.8945C9.00995 16.4503 7.5 14.6514 7.5 12.4999C7.5 10.0146 9.51472 7.99988 12 7.99988Z"
                    fill="#9393B0"
                  />
                </svg>
              </div>
            </div>
            <div className="picture-check-icon">
              <div className="picture-choice-uncheck-icon-svg w-embed">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM4.5 4H11.5C11.7761 4 12 4.22386 12 4.5V11.5C12 11.7761 11.7761 12 11.5 12H4.5C4.22386 12 4 11.7761 4 11.5V4.5C4 4.22386 4.22386 4 4.5 4Z"
                    fill="#9393B0"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="picture-container">
            <div className="picture-upload-icon">
              <div className="picture-choice-icon-svg w-embed">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 11.9999C20.5376 11.9999 23 14.4623 23 17.4999C23 20.5374 20.5376 22.9999 17.5 22.9999C14.4624 22.9999 12 20.5374 12 17.4999C12 14.4623 14.4624 11.9999 17.5 11.9999ZM17.5 13.9991L17.4101 14.0072C17.206 14.0442 17.0451 14.2051 17.0081 14.4092L17 14.4991L16.9996 16.9991L14.4977 16.9999L14.4078 17.0079C14.2037 17.045 14.0427 17.2059 14.0057 17.41L13.9977 17.4999L14.0057 17.5898C14.0427 17.7939 14.2037 17.9548 14.4078 17.9918L14.4977 17.9999L17.0007 17.9991L17.0011 20.5034L17.0092 20.5932C17.0462 20.7973 17.2071 20.9583 17.4112 20.9953L17.5011 21.0034L17.591 20.9953C17.7951 20.9583 17.956 20.7973 17.9931 20.5932L18.0011 20.5034L18.0007 17.9991L20.5046 17.9999L20.5944 17.9918C20.7985 17.9548 20.9595 17.7939 20.9965 17.5898L21.0046 17.4999L20.9965 17.41C20.9595 17.2059 20.7985 17.045 20.5944 17.0079L20.5046 16.9999L17.9996 16.9991L18 14.4991L17.9919 14.4092C17.9549 14.2051 17.794 14.0442 17.5899 14.0072L17.5 13.9991ZM13.9247 2.50293C14.7225 2.50293 15.4607 2.9254 15.8647 3.6133L16.6793 4.99988H18.75C20.5449 4.99988 22 6.45496 22 8.24988L22.0008 12.8102C21.5566 12.3838 21.052 12.0199 20.5011 11.7327L20.5 8.24988C20.5 7.28338 19.7165 6.49988 18.75 6.49988H16.25C15.9841 6.49988 15.738 6.35906 15.6033 6.12976L14.5714 4.37305C14.4367 4.14375 14.1906 4.00293 13.9247 4.00293H10.1224C9.89892 4.00293 9.6892 4.1024 9.54793 4.27072L9.48325 4.36048L8.38913 6.14233C8.25271 6.3645 8.01071 6.49988 7.75 6.49988H5.25C4.2835 6.49988 3.5 7.28338 3.5 8.24988V17.7499C3.5 18.7164 4.2835 19.4999 5.25 19.4999L11.3133 19.4993C11.4857 20.0331 11.7252 20.5367 12.0219 21.0001L5.25 20.9999C3.45507 20.9999 2 19.5448 2 17.7499V8.24988C2 6.45496 3.45507 4.99988 5.25 4.99988H7.33042L8.205 3.57558C8.61425 2.90908 9.34026 2.50293 10.1224 2.50293H13.9247ZM12 7.99988C14.0018 7.99988 15.6983 9.30693 16.2826 11.1141C15.7821 11.2086 15.3022 11.3607 14.8497 11.563C14.4571 10.3648 13.3296 9.49988 12 9.49988C10.3431 9.49988 9 10.843 9 12.4999C9 13.9293 9.99965 15.1251 11.338 15.4266C11.1806 15.8933 11.0748 16.3854 11.0278 16.8945C9.00995 16.4503 7.5 14.6514 7.5 12.4999C7.5 10.0146 9.51472 7.99988 12 7.99988Z"
                    fill="#9393B0"
                  />
                </svg>
              </div>
            </div>
            <div className="picture-check-icon">
              <div className="picture-choice-uncheck-icon-svg w-embed">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM4.5 4H11.5C11.7761 4 12 4.22386 12 4.5V11.5C12 11.7761 11.7761 12 11.5 12H4.5C4.22386 12 4 11.7761 4 11.5V4.5C4 4.22386 4.22386 4 4.5 4Z"
                    fill="#9393B0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default PictureChoice;
