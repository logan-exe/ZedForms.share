import React, { useState, useEffect } from "react";
import ThreeButtons from "../ThreeButtons";
import "./YesorNo.css";
import { useSelector, useDispatch } from "react-redux";

function YesorNo({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");

  const [isRequired, setIsRequired] = useState("No");
  const [constrains, setConstrains] = useState([]);
  const [yesColor, setYesColor] = useState("#9393B0");
  const [noColor, setNoColor] = useState("#121242");
  const [yesClass, setYesClass] = useState("");
  // const [noClass,]
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
    }
  }, [myformList]);

  const handleColorChange = (val) => {
    if (val === "yes") {
      setYesColor("#121242");
      setYesClass("yes-or-no-selected");
    }
  };

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
        <div className="yes-or-no-wrapper">
          <div className="yes-or-no-item">
            <div className="yes-icon">
              <div className="yes-icon-svg w-embed">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4996 5.20235C16.4996 2.76041 15.3595 1.00366 13.4932 1.00366C12.467 1.00366 12.1149 1.60503 11.747 3.00324C11.6719 3.29209 11.635 3.43272 11.596 3.57133C11.495 3.93007 11.3192 4.54082 11.069 5.40234C11.0623 5.42542 11.0524 5.44717 11.0396 5.46724L8.17281 9.95291C7.49476 11.0139 6.49429 11.8294 5.31841 12.2796L4.84513 12.4608C3.5984 12.9381 2.87457 14.2419 3.1287 15.5525L3.53319 17.6385C3.77462 18.8836 4.71828 19.8745 5.9501 20.1764L13.5778 22.046C16.109 22.6664 18.6674 21.1314 19.3113 18.6061L20.7262 13.057C21.1697 11.3177 20.1192 9.5482 18.3799 9.10473C18.1175 9.03782 17.8478 9.00398 17.5769 9.00398H15.7536C16.2497 7.37109 16.4996 6.1113 16.4996 5.20235ZM4.60127 15.2669C4.48576 14.6712 4.81477 14.0786 5.38147 13.8616L5.85475 13.6804C7.33036 13.1154 8.58585 12.0921 9.43674 10.7607L12.3035 6.27501C12.3935 6.13412 12.4629 5.98107 12.5095 5.8205C12.7608 4.95549 12.9375 4.3415 13.0399 3.97761C13.083 3.82436 13.1239 3.66891 13.1976 3.38494C13.3875 2.66324 13.4809 2.50366 13.4932 2.50366C14.3609 2.50366 14.9996 3.48773 14.9996 5.20235C14.9996 6.08683 14.6738 7.53779 14.0158 9.51741C13.8544 10.0029 14.2158 10.504 14.7275 10.504H17.5769C17.7228 10.504 17.868 10.5222 18.0093 10.5582C18.9459 10.797 19.5115 11.7498 19.2727 12.6863L17.8578 18.2355C17.4172 19.9634 15.6668 21.0136 13.9349 20.5891L6.30718 18.7196C5.64389 18.557 5.13577 18.0234 5.00577 17.353L4.60127 15.2669Z"
                    fill={`${yesColor}`}
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="yes-or-no-item yes-or-no-selected">
            <div className="no-icon">
              <div className="no-icon-filled-svg w-embed">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0566 14.1828C15.5174 15.6098 15.75 16.859 15.75 17.9361C15.75 20.3347 14.811 22.1835 13.25 22.1835C12.4503 22.1835 12.1721 21.7337 11.8675 20.637L11.5977 19.6154C11.4968 19.2567 11.321 18.646 11.0707 17.7844C11.064 17.7614 11.0542 17.7396 11.0413 17.7195L8.17457 13.2339C7.49652 12.1729 6.49605 11.3574 5.32017 10.9072L4.06293 10.4258C3.26956 10.1221 2.80894 9.29241 2.97066 8.45842L3.65682 4.91974C3.82396 4.05776 4.47726 3.37175 5.33006 3.16273L13.5796 1.1408C16.1108 0.520406 18.6692 2.05534 19.3131 4.58067L20.8869 10.7534C21.2622 12.2251 20.3733 13.7223 18.9016 14.0975C18.6796 14.1542 18.4513 14.1828 18.2222 14.1828H15.0566Z"
                    fill={`${noColor}`}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default YesorNo;
