import React from "react";
import Navbar from "./NavBar";
import "../../style/Workspace.css";
import QuickAccess from "./QuickAccess";
import ComponentList from "./ComponentList";
import FormTitle from "./FormTitle";
import FormComponents from "./FormComponents";

function Workspace() {
  return (
    <div className="workSpace-contain">
      <div className="navBar-contain">
        <Navbar />
      </div>
      <div className="main-contain">
        <div className="quickAccess-contain">
          <QuickAccess />
        </div>
        <div className="componentList-contain">
          <ComponentList />
        </div>
        <div className="formspace-contain">
          {" "}
          <h1>hi there</h1>
          <FormTitle />
          <div
            style={{
              marginTop: "32px",
            }}
          >
            <FormComponents />
          </div>
          {/* <div style={{ backgroundColor: "#f9f9f9", height: "24px" }}></div> */}
        </div>
      </div>
      {/* <formTitle /> */}
    </div>
  );
}

export default Workspace;
