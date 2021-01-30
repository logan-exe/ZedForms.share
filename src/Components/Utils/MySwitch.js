import React, { useState } from "react";
import "./Switch.css";
// import bgVideo from "../../assets/video.mp4";

function MySwitch() {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div>
      {/* <video
        autoPlay
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",

          objectFit: "cover",

          zIndex: "-1",
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div>
        <h1 style={{ paddingTop: "250px", marginLeft: "50px", color: "white" }}>
          <span>Welcome to my </span>
          <span
            onMouseEnter={() => setIsTrue(true)}
            onMouseLeave={() => setIsTrue(false)}
          >
            Website
          </span>
        </h1>
      </div> */}
    </div>
  );
}

export default MySwitch;
