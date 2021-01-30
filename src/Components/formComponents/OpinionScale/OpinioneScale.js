import React, { useState, useEffect } from "react";
import "./OpinionScale.css";
import ThreeButtons from "../ThreeButtons";
import { useSelector, useDispatch } from "react-redux";

function OpinioneScale({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");

  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");

  const [isRequired, setIsRequired] = useState("No");
  const [constrains, setConstrains] = useState([]);

  const [type, setType] = useState("text");
  const [placeholder, setPlaceholder] = useState("");
  const [isMultiple, setIsMultiple] = useState("true");

  const [optList, setOptList] = useState([]);
  const myformList = useSelector((state) => state.formList);
  const [leftLabel, setLeftLabel] = useState("");
  const [rightLabel, setRightLabel] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    var a = myformList.find((item) => item.id === id);

    if (a) {
      setLabel(a.label);
      setDesc(a.description);
      setIsRequired(a.isRequired);
      setOptList(a.inputs);
      setConstrains(a.constrains);

      setRightLabel(a.constrains[1].value);

      setLeftLabel(a.constrains[0].value);
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
        <div className="opinion-items-wrapper">
          <div className="opinion-number-wrapper">
            <div className="opinion-item">
              <div className="opinion-item-number">1</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">2</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">3</div>
            </div>
            <div className="opinion-item opinion-item-selected">
              <div className="opinion-item-number opinion-number-selected">
                4
              </div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">5</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">6</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">7</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">8</div>
            </div>
            <div className="opinion-item">
              <div className="opinion-item-number">9</div>
            </div>
            <div className="opinion-item opinion-item-last">
              <div className="opinion-item-number">10</div>
            </div>
          </div>
          <div className="opinion-label-wrapper">
            <div className="opinion-label-text">{leftLabel}</div>
            <div className="opinion-label-text">{rightLabel}</div>
          </div>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default OpinioneScale;
