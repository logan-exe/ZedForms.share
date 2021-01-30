import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formList } from "../../../actions";

import { Modal, Button } from "react-bootstrap";
import Switch from "@material-ui/core/Switch";

function LinkModal({ id, isDisplay, lgShow, setLgShow }) {
  const myformList = useSelector((state) => state.formList);

  const [optList, setOptList] = useState([]);
  const [isRequired, setIsRequired] = useState(false);
  const [type, setType] = useState("");

  const [placeholder, setPlaceholder] = useState("");
  const [constrains, setConstrains] = useState([]);

  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [isMultiple, setIsMultiple] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
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
    var b = a.constrains.find((item) => item.name === "placeholder");
    setPlaceholder(b.value);
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
      if (list[j].name === "multiple lines") {
        list[j].value = isMultiple;
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
                  value={label === "default" ? "" : label}
                  placeholder="your label goes here..."
                  onChange={(e) => setLabel(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="label-input"
                  type="text"
                  name=""
                  value={description === "default" ? "" : description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Your description goes here..."
                />
              </div>
              <div>
                <input type="text" placeholder={placeholder}></input>
              </div>
            </div>
            <div>
              <div>Settings</div>
              <div>
                <input
                  onChange={(e) => setPlaceholder(e.target.value)}
                  type=""
                  name=""
                  value={placeholder === "Start typing..." ? "" : placeholder}
                  placeholder="placeholder..."
                />

                <div>
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
                </div>
              </div>
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

export default LinkModal;
