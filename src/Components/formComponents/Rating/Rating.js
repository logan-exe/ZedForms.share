import React, { useState } from "react";
import "./Rating.css";
import ThreeButtons from "../ThreeButtons";

function Rating({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");

  return (
    <div className="work-area">
      <div
        className="work-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="work-title">
          Please give us your feedback about the last product you purchased from
          us.
        </div>
        <div className="work-description">
          Your feedback pushes us to work hard and improves us a lot.
        </div>
        <div className="rating-wrapper">
          <div className="rating-container">
            <div className="start-fill-icon-svg w-embed">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={32} height={32} fill="white" />
                <path
                  d="M14.7878 7.10263C15.283 6.09926 16.7138 6.09925 17.209 7.10263L19.567 11.8804L24.8395 12.6465C25.9468 12.8074 26.3889 14.1682 25.5877 14.9492L21.7724 18.6681L22.6731 23.9193C22.8622 25.0222 21.7047 25.8632 20.7143 25.3425L15.9984 22.8632L11.2825 25.3425C10.2921 25.8632 9.13459 25.0222 9.32374 23.9193L10.2244 18.6681L6.40916 14.9492C5.60791 14.1682 6.05005 12.8074 7.15735 12.6465L12.4299 11.8804L14.7878 7.10263Z"
                  fill="#121242"
                />
              </svg>
            </div>
          </div>
          <div className="rating-container">
            <div className="start-fill-icon-svg w-embed">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={32} height={32} fill="white" />
                <path
                  d="M14.7878 7.10263C15.283 6.09926 16.7138 6.09925 17.209 7.10263L19.567 11.8804L24.8395 12.6465C25.9468 12.8074 26.3889 14.1682 25.5877 14.9492L21.7724 18.6681L22.6731 23.9193C22.8622 25.0222 21.7047 25.8632 20.7143 25.3425L15.9984 22.8632L11.2825 25.3425C10.2921 25.8632 9.13459 25.0222 9.32374 23.9193L10.2244 18.6681L6.40916 14.9492C5.60791 14.1682 6.05005 12.8074 7.15735 12.6465L12.4299 11.8804L14.7878 7.10263Z"
                  fill="#121242"
                />
              </svg>
            </div>
          </div>
          <div className="rating-container">
            <div className="start-fill-icon-svg w-embed">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={32} height={32} fill="white" />
                <path
                  d="M14.7878 7.10263C15.283 6.09926 16.7138 6.09925 17.209 7.10263L19.567 11.8804L24.8395 12.6465C25.9468 12.8074 26.3889 14.1682 25.5877 14.9492L21.7724 18.6681L22.6731 23.9193C22.8622 25.0222 21.7047 25.8632 20.7143 25.3425L15.9984 22.8632L11.2825 25.3425C10.2921 25.8632 9.13459 25.0222 9.32374 23.9193L10.2244 18.6681L6.40916 14.9492C5.60791 14.1682 6.05005 12.8074 7.15735 12.6465L12.4299 11.8804L14.7878 7.10263Z"
                  fill="#121242"
                />
              </svg>
            </div>
          </div>
          <div className="rating-container rating-unfilled">
            <div className="start-fill-icon-svg w-embed">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={32} height={32} fill="white" />
                <path
                  d="M14.7878 7.10263C15.283 6.09926 16.7138 6.09925 17.209 7.10263L19.567 11.8804L24.8395 12.6465C25.9468 12.8074 26.3889 14.1682 25.5877 14.9492L21.7724 18.6681L22.6731 23.9193C22.8622 25.0222 21.7047 25.8632 20.7143 25.3425L15.9984 22.8632L11.2825 25.3425C10.2921 25.8632 9.13459 25.0222 9.32374 23.9193L10.2244 18.6681L6.40916 14.9492C5.60791 14.1682 6.05005 12.8074 7.15735 12.6465L12.4299 11.8804L14.7878 7.10263ZM15.9984 8.03903L13.7401 12.6149C13.5434 13.0134 13.1633 13.2895 12.7236 13.3534L7.67382 14.0872L11.3279 17.649C11.6461 17.9592 11.7913 18.406 11.7161 18.844L10.8535 23.8734L15.3702 21.4988C15.7635 21.292 16.2333 21.292 16.6266 21.4988L21.1433 23.8734L20.2807 18.844C20.2056 18.406 20.3508 17.9592 20.6689 17.649L24.323 14.0872L19.2732 13.3534C18.8335 13.2895 18.4534 13.0134 18.2568 12.6149L15.9984 8.03903Z"
                  fill="#9393B0"
                />
              </svg>
            </div>
          </div>
          <div className="rating-container rating-unfilled">
            <div className="start-fill-icon-svg w-embed">
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={32} height={32} fill="white" />
                <path
                  d="M14.7878 7.10263C15.283 6.09926 16.7138 6.09925 17.209 7.10263L19.567 11.8804L24.8395 12.6465C25.9468 12.8074 26.3889 14.1682 25.5877 14.9492L21.7724 18.6681L22.6731 23.9193C22.8622 25.0222 21.7047 25.8632 20.7143 25.3425L15.9984 22.8632L11.2825 25.3425C10.2921 25.8632 9.13459 25.0222 9.32374 23.9193L10.2244 18.6681L6.40916 14.9492C5.60791 14.1682 6.05005 12.8074 7.15735 12.6465L12.4299 11.8804L14.7878 7.10263ZM15.9984 8.03903L13.7401 12.6149C13.5434 13.0134 13.1633 13.2895 12.7236 13.3534L7.67382 14.0872L11.3279 17.649C11.6461 17.9592 11.7913 18.406 11.7161 18.844L10.8535 23.8734L15.3702 21.4988C15.7635 21.292 16.2333 21.292 16.6266 21.4988L21.1433 23.8734L20.2807 18.844C20.2056 18.406 20.3508 17.9592 20.6689 17.649L24.323 14.0872L19.2732 13.3534C18.8335 13.2895 18.4534 13.0134 18.2568 12.6149L15.9984 8.03903Z"
                  fill="#9393B0"
                />
              </svg>
            </div>
          </div>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Rating;
