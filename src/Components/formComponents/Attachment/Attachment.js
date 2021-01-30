import React, { useState, useEffect } from "react";
import "./Attachment.css";
import ThreeButtons from "../ThreeButtons";
import { useSelector, useDispatch } from "react-redux";

function Attachment({ id }) {
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
      // var b = a.constrains.find((item) => item.name === "placeholder");
      // var c = a.constrains.find((item) => item.name === "multiple lines");
      // setIsMultiple(c.value);
      // setPlaceholder(b.value);
    }
  }, [myformList]);
  return (
    <div className="work-area">
      <div
        className="add-attachment-component"
        onMouseEnter={() => setIsDisplay("flex")}
        onMouseLeave={() => setIsDisplay("none")}
      >
        <div className="attachment-title">
          {label}
          {isRequired ? <span style={{ color: "#ff0000" }}>*</span> : ""}
        </div>
        <div className="attachment-description">{desc}</div>
        <div className="attachement-add-wrapper">
          <div className="add-attachment-icon-text-container">
            <div className="add-attachment-icon">
              <div className="add-attachment-icon-svg w-embed">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7716 3.74346C14.113 1.39988 17.912 1.39988 20.2552 3.74302C22.5382 6.02609 22.5968 9.6913 20.4308 12.0452L20.2426 12.2426L11.4426 21.0408L11.406 21.071C9.9448 22.3878 7.6908 22.3431 6.28343 20.9357C4.96441 19.6167 4.84229 17.554 5.91708 16.0973C5.94042 16.0519 5.96867 16.0082 6.00188 15.967L6.05544 15.9074L6.14234 15.8197L6.28343 15.6718L6.28634 15.6747L13.7221 8.22035C13.988 7.95373 14.4046 7.92897 14.6985 8.14643L14.7827 8.21894C15.0494 8.48485 15.0741 8.90148 14.8567 9.19538L14.7842 9.2796L7.18953 16.8927C6.4719 17.7683 6.52178 19.0626 7.33917 19.88C8.16824 20.709 9.48789 20.7485 10.3637 19.9984L19.1964 11.1679C20.9519 9.41028 20.9519 6.56104 19.1945 4.80368C17.4921 3.10124 14.7649 3.04804 12.9984 4.64408L12.8305 4.80368L12.818 4.81799L3.28167 14.3543C2.98878 14.6472 2.51391 14.6472 2.22101 14.3543C1.95475 14.0881 1.93054 13.6714 2.14839 13.3778L2.22101 13.2937L11.7699 3.74302L11.7716 3.74346Z"
                    fill="#121242"
                  />
                </svg>
              </div>
            </div>
            <div className="attachment-add-text">Add attachments</div>
          </div>
        </div>
        <div className="attachment-uploaded-file-text">
          Getintopc.com_Any_Video_Downloader_Pro_7.19.0.zip
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Attachment;
