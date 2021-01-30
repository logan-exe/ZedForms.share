import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formList } from "../../../actions";
import { Modal, Button } from "react-bootstrap";
import Switch from "@material-ui/core/Switch";
import "./Dropdown.css";

function DropDownModal({ id, isDisplay, lgShow, setLgShow }) {
  const myformList = useSelector((state) => state.formList);

  const [optList, setOptList] = useState([]);
  const [isRequired, setIsRequired] = useState(false);
  const [type, setType] = useState("");

  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
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

    console.log("renderes");
    setIsRequired(a.isRequired);
  }, [id, isDisplay, myformList, optList, lgShow]);

  const addNewChoice = () => {
    setOptList([...optList, { option: "newone" }]);
  };

  const handleSwitchChange = (event) => {
    setIsRequired(!isRequired);
  };

  const deleteOption = (index) => {
    var after_delete = [...optList];
    after_delete.splice(index, 1);
    setOptList(after_delete);
  };

  const handleOptionChange = (index) => (e) => {
    let newArr = [...optList];
    newArr[index].option = e.target.value;
    setOptList(newArr);
  };

  const handleSaveChanges = () => {
    var update_list = [...myformList];
    var index = -1;
    for (var i = 0; i < update_list.length; i++) {
      if (update_list[i].id === id) {
        index = i;
      }
    }
    update_list[index].inputs = optList;
    update_list[index].label = label;
    update_list[index].description = description;
    update_list[index].isRequired = isRequired;
    dispatch(formList(update_list));
    setLgShow(false);
  };
  return (
    <div>
      <Modal
        size="xl"
        show={lgShow}
        // dialogClassName="modal-150w"
        onHide={() => setLgShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">{type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="multiple-choice-modal">
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
              </div>
              <div className="mail-input-wrapper w-form">
                <form
                  id="wf-form-Mail-input"
                  name="wf-form-Mail-input"
                  data-name="Mail-input"
                  className="mail-input-box"
                >
                  <select
                    placeholder="Enter your mail address"
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid lightgrey",
                    }}
                  >
                    {optList.map((opt) => {
                      return <option value={opt.option}>{opt.option}</option>;
                    })}
                  </select>
                </form>
              </div>
              <div className="option-lists">
                {optList.map((item, index) => {
                  return (
                    <div
                      className="each-option"
                      key={item.myid}
                      style={{ display: "flex" }}
                    >
                      <input
                        className="option-input"
                        type="text"
                        onChange={handleOptionChange(index)}
                        value={`${item.option}`}
                      />
                      <button onClick={() => deleteOption(index)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div>
                <button className="new-choice" type="" onClick={addNewChoice}>
                  Add new value
                </button>
              </div>
            </div>
            <div className="multiple-choice-settings">
              <div style={{ marginBottom: "20px" }}>
                <h6>Settings</h6>
              </div>
              <div className="switch-buttons">
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
              <div>
                <select className="selection-dd">
                  <option value="Selection Limit">Selection Limit</option>
                  <option value="Range">Range</option>
                  <option value="Limit">Limit</option>
                </select>
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

export default DropDownModal;
