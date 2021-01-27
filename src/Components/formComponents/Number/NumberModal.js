import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formList } from "../../../actions";
import uuid from "react-uuid";
import { Modal, Button } from "react-bootstrap";
import Switch from "@material-ui/core/Switch";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function NumberModal({ id, isDisplay, lgShow, setLgShow }) {
  const [curid, setCurid] = useState("");
  const [visible, setVisible] = useState(false);
  const [curisDisplay, setCurisDisplay] = useState("none");
  const [myList, setMyList] = useState([]);
  const myformList = useSelector((state) => state.formList);
  const [smShow, setSmShow] = useState(false);
  const [optList, setOptList] = useState([]);
  const [isRequired, setIsRequired] = useState(false);
  const [type, setType] = useState("");
  const [constrains, setConstrains] = useState([]);
  const [placeholder, setPlaceholder] = useState("");
  const [isPhone, setIsPhone] = useState(false);
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [isMultiple, setIsMultiple] = useState(true);
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setCurid(id);
    setCurisDisplay(isDisplay);
    setMyList(myformList);
    var a = myformList.find((item) => item.id === id);
    setType(a.compType);
    if (label === "" && description === "") {
      setLabel(a.label);
      setDescription(a.description);
    }
    if (optList.length === 0) {
      console.log("set once", optList.length);
      setOptList(a.inputs);
    }
    setConstrains(a.constrains);
    setIsRequired(a.isRequired);
    var c = a.constrains.find((item) => item.name === "phone number");
    setIsPhone(c.value);
  }, [id, isDisplay, myformList, optList, lgShow]);

  const handleSwitchChange = (event) => {
    setIsRequired(!isRequired);
  };

  const handleSelectChange = (e) => {
    if (e.target.value === "single line") {
      setIsMultiple(false);
    } else {
      setIsMultiple(true);
    }
  };

  const handleSaveChanges = () => {
    console.log("saving changes...");
    var update_list = [...myformList];
    var index = -1;
    for (var i = 0; i < update_list.length; i++) {
      if (update_list[i].id === id) {
        index = i;
      }
    }
    console.log("found index", index);
    update_list[index].inputs = optList;
    update_list[index].label = label;
    update_list[index].description = description;
    update_list[index].isRequired = isRequired;

    var list = update_list[index].constrains.map((item) => item);

    for (var j = 0; j < list.length; j++) {
      if (update_list[index].constrains[j].name === "placeholder") {
        // console.log("changing index", update_list[index].constrains);
        list[j].value = placeholder;
      }
      if (list[j].name === "phone number") {
        list[j].value = isPhone;
      }
    }
    update_list[index].constrains = [...list];
    console.log("this is update", update_list);

    dispatch(formList(update_list));
    setLgShow(false);
  };
  return (
    <div>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">{type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-my">
            <div>
              <div>
                <input
                  className="label-input"
                  type="text"
                  name=""
                  value={label}
                  placeholder="your label goes here..."
                  onChange={(e) => setLabel(e.target.value)}
                />
                <input
                  className="label-input"
                  type="text"
                  name=""
                  value={description}
                  placeholder="your label goes here..."
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                {isPhone ? (
                  <div>
                    <PhoneInput
                      country={"us"}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                    />
                  </div>
                ) : (
                  <input
                    type="number"
                    name=""
                    placeholder="enter a number"
                  ></input>
                )}
              </div>

              <div>
                <input
                  onChange={(e) => setPlaceholder(e.target.value)}
                  type=""
                  name=""
                  value={placeholder === "Start typing..." ? "" : placeholder}
                  placeholder="placeholder..."
                />
              </div>
            </div>
            <div className="each-switch-button">
              <p>is Required</p>
              <Switch
                size="small"
                checked={isRequired}
                onChange={handleSwitchChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
            <div className="each-switch-button">
              <p>Phone Number</p>
              <Switch
                size="small"
                checked={isPhone}
                onChange={() => setIsPhone(!isPhone)}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Button
              className="footer-buttons-modal"
              variant="secondary"
              onClick={() => setLgShow(false)}
            >
              Cancel
            </Button>
            <Button
              className="footer-buttons-modal"
              onClick={() => handleSaveChanges()}
              variant="primary"
            >
              Save
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NumberModal;
