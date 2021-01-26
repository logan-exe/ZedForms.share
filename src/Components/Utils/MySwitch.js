import React from "react";
import "./Switch.css";

function MySwitch() {
  return (
    <div>
      <h1>hello world</h1>
      <label class="switch">
        <input type="checkbox" checked />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default MySwitch;
