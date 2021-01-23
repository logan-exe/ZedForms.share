import React, { useState } from "react";
import ThreeButtons from "../ThreeButtons";
import "./Calendar.css";

function Calendar({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  return (
    <div className="work-area">
      <div
        className="calendar-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="calendar-title">
          Please Choose suitable slot for attending meeting blah blah
        </div>
        <div className="calendar-description">description goes here</div>
        <div className="calendar-wrapper">calendar goes here</div>

        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Calendar;
