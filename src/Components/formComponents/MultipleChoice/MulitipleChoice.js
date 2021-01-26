import React, { useState, useEffect } from "react";
import "./MultipleChoice.css";
import ThreeButtons from "../ThreeButtons";
import { Radio } from "@material-ui/core";
import { formList, prevListSetter } from "../../../actions";
import { useSelector, useDispatch } from "react-redux";

function MulitipleChoice({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");

  const [isRequired, setIsRequired] = useState("No");

  const [type, setType] = useState("checkbox");
  const [optList, setOptList] = useState([]);
  const myformList = useSelector((state) => state.formList);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(myformList);
    var a = myformList.find((item) => item.id === id);
    setLabel(a.label);
    setDesc(a.description);
    setIsRequired(a.isRequired);
    setOptList(a.inputs);
  }, [myformList]);

  // const handleMouseOver = () => {
  //   console.log("hello world");
  // };
  const handleEdit = () => {
    console.log("logged from multiple choice", id);
  };
  return (
    <div>
      <div className="work-area">
        <div
          data-w-id="5dac4e47-a87b-a2c0-54ed-09c8abacd65c"
          className="radio-component-wrapper"
          onMouseEnter={() => setIsDisplay("flex")}
          onMouseLeave={() => setIsDisplay("none")}
        >
          <div className="radio-component-title">
            {`${label}`}
            {isRequired ? <span style={{ color: "#ff0000" }}>*</span> : ""}
          </div>

          <div className="radio-component-description">{`${desc}`}</div>
          {/* <div className="radio-component-choice">
            <div className="radio-icon">
              <div className="radio-icon-svg w-embed">
                <input
                  type="checkbox"
                  value="hello"
                  checked={isRequired === "No"}
                ></input>
              </div>
            </div>
            <div className="radio-component-choice-text">Very satisfied</div>
          </div> */}
          {optList.map((item) => {
            return (
              <div className="radio-component-choice">
                <div className="radio-icon">
                  <div className="radio-icon-svg w-embed">
                    <input
                      type="checkbox"
                      value="hello"
                      // checked={isRequired === "No"}
                    ></input>
                  </div>
                </div>
                <div className="radio-component-choice-text">{item.option}</div>
              </div>
            );
          })}

          <div>
            <div></div>
            <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MulitipleChoice;
