import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formList } from "../../../actions";

import { Modal, Button } from "react-bootstrap";
import Switch from "@material-ui/core/Switch";

function OpinionScaleModal({ id, lgShow, setLgShow }) {
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

  const handleSwitchChange = (event) => {
    setIsRequired(!isRequired);
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

    update_list[index].isRequired = isRequired;

    var list = update_list[index].constrains.map((item) => item);

    for (var j = 0; j < list.length; j++) {
      if (update_list[index].constrains[j].name === "leftLabel") {
        // console.log("changing index", update_list[index].constrains);
        list[j].value = leftLabel;
      }
      if (list[j].name === "rightLabel") {
        list[j].value = rightLabel;
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
              <div></div>
              <div></div>
            </div>
            <div>
              <div>Settings</div>
              <div>
                <input
                  type="text"
                  value={leftLabel}
                  onChange={(e) => setLeftLabel(e.target.value)}
                ></input>
                <input
                  type="text"
                  value={rightLabel}
                  onChange={(e) => setRightLabel(e.target.value)}
                ></input>

                <div>
                  <div></div>
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

export default OpinionScaleModal;
