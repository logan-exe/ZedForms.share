import React, { useState, useEffect } from "react";
import ThreeButtons from "../ThreeButtons";
import { formList, prevListSetter } from "../../../actions";
import { useSelector, useDispatch } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Number({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");

  const [isRequired, setIsRequired] = useState("No");
  const [constrains, setConstrains] = useState([]);
  const [phone, setPhone] = useState("");

  const [type, setType] = useState("text");
  const [placeholder, setPlaceholder] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("true");

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
      var c = a.constrains.find((item) => item.name === "phone number");
      // setIsMultiple(c.value);
      setPhoneNumber(c.value);

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
        <div className="number-wrapper">
          <div className="number-button">
            {phoneNumber === "true" ? (
              <div>
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </div>
            ) : (
              <input type="number" name="" placeholder={placeholder}></input>
            )}
          </div>
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default Number;
