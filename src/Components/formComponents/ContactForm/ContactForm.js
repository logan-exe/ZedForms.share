import React, { useState } from "react";
import ThreeButtons from "../ThreeButtons";
import "./ContactForm.css";

function ContactForm({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  return (
    <div className="work-area">
      <div
        className="work-component "
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="work-title">
          Enter yout contact details in the below fields
        </div>
        <div className="work-description">
          Please make sure that it’s a professional one.
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default ContactForm;
