import React, { useState, useEffect } from "react";
import ThreeButtons from "../ThreeButtons";
import "./Dropdown.css";
import { useSelector, useDispatch } from "react-redux";

function Dropdown({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");
  const [isRequired, setIsRequired] = useState("No");
  const [constrains, setConstrains] = useState([]);
  const [type, setType] = useState("text");
  const [optList, setOptList] = useState([]);
  const myformList = useSelector((state) => state.formList);
  const dispatch = useDispatch();
  useEffect(() => {
    var a = myformList.find((item) => item.id === id);

    if (a) {
      setLabel(a.label);
      setDesc(a.description);
      setIsRequired(a.isRequired);
      setOptList(a.inputs);
      setConstrains(a.constrains);
    }
  }, [myformList]);
  return (
    <div className="work-area">
      <div
        className="work-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="work-title">
          {label}
          {isRequired ? <span style={{ color: "#ff0000" }}>*</span> : ""}
        </div>
        <div className="work-description">{desc}</div>
        <div className="mail-input-wrapper w-form">
          <form
            id="wf-form-Mail-input"
            name="wf-form-Mail-input"
            data-name="Mail-input"
            className="mail-input-box"
          >
            <select
              placeholder="Enter your mail address"
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid lightgrey",
              }}
            >
              {optList.map((opt) => {
                return <option value={opt.option}>{opt.option}</option>;
              })}
            </select>
          </form>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Dropdown;
