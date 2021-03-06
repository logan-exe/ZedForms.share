import React, { useState, useEffect } from "react";
import "./Email.css";
import ThreeButtons from "../ThreeButtons";
import { formList, prevListSetter } from "../../../actions";
import { useSelector, useDispatch } from "react-redux";

function Email({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");

  const [isRequired, setIsRequired] = useState("No");
  const [constrains, setConstrains] = useState([]);

  const [type, setType] = useState("text");
  const [placeholder, setPlaceholder] = useState("");
  const [isMultiple, setIsMultiple] = useState(true);

  const [optList, setOptList] = useState([]);
  const myformList = useSelector((state) => state.formList);

  useEffect(() => {
    var a = myformList.find((item) => item.id === id);
    console.log("this is a", a);

    if (a) {
      setLabel(a.label);
      setDesc(a.description);
      setIsRequired(a.isRequired);
      setOptList(a.inputs);
      setConstrains(a.constrains);

      var b = a.constrains.find((item) => item.name === "placeholder");
      // var c = a.constrains.find((item) => item.name === "multiple lines");
      // setIsMultiple(c.value);

      setPlaceholder(b.value);
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
          {label}{" "}
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
            <input
              type="email"
              className="mail-input w-input"
              maxLength={256}
              name="Email-Input-Component"
              data-name="Email Input Component"
              placeholder={placeholder}
              id="Email-Input-Component"
            />
          </form>
          <div className="w-form-done" />
          <div className="w-form-fail" />
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Email;
