import React, { useState, useEffect } from "react";
import ThreeButtons from "../ThreeButtons";
import "./Text.css";
import { formList, prevListSetter } from "../../../actions";
import { useSelector, useDispatch } from "react-redux";

function Text({ id }) {
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
  const dispatch = useDispatch();

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
      var c = a.constrains.find((item) => item.name === "multiple lines");
      setIsMultiple(c.value);

      setPlaceholder(b.value);
    }
  }, [myformList]);

  return (
    <div>
      <div className="work-area">
        <div
          data-w-id="5dac4e47-a87b-a2c0-54ed-09c8abacd65c"
          className="textbox-wrapper"
          onMouseEnter={() => setIsDisplay("flex")}
          onMouseLeave={() => setIsDisplay("none")}
        >
          <div className="textbox-title">
            {label}{" "}
            {isRequired ? <span style={{ color: "#ff0000" }}>*</span> : ""}
          </div>
          <div className="textbox-description">{desc}</div>
          <div>
            {isMultiple ? (
              <textarea
                className="textbox-input"
                type="textarea"
                rows="4"
                cols="200"
                placeholder={placeholder}
              ></textarea>
            ) : (
              <input
                style={{ width: "100%", padding: "8px" }}
                type="text"
                placeholder={placeholder}
              />
            )}
          </div>
          <div>
            <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
