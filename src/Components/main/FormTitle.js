import React, { useState, useEffect } from "react";
import "../../style/formTitle.css";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Spin } from "antd";
import { resListSetter } from "../../actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import uuid from "react-uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Checkmark } from "react-checkmark";

function FormTitle() {
  const [title, setTitle] = useState("Customer Success Questionnaire");
  const [curTitle, setCurTitle] = useState(title);
  const [show, setShow] = useState(false);
  const [isSpin, setIspin] = useState(false);
  const [publish, setPublish] = useState(false);
  const [link, setLink] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formid, setFormid] = useState("");
  const [isCopied, setIsCopied] = useState("");

  const [clip, setClip] = useState("");

  const dispatch = useDispatch();
  const myformList = useSelector((state) => state.formList);
  const resList = useSelector((state) => state.resList);
  useEffect(() => {
    console.log("this is reslist", resList);
  }, [resList]);

  const publishForm = (e) => {
    e.preventDefault();

    setPublish((prev) => !prev);
    setIspin((prev) => !prev);
    var final_list = myformList;
    final_list.splice(0, 0, {
      id: "head1234",
      compType: "header",
      inputs: [{ option: "header" }],
      is_required: true,
      label: "header",
      description: "header",
      constrains: [{}],
    });
    var now_id = uuid();

    axios({
      method: "POST",
      url: `http://localhost:3001/form/:${now_id}`,
      data: {
        formid: now_id,
        user_id: "123456789",
        user_name: "arunlogan",
        form_fields: final_list,
      },
    })
      .then((res) => {
        setIspin((prev) => !prev);
        console.log("success", res.data);
        setLink(`http://localhost:3000/forms/:${res.data.formid}`);
        dispatch(resListSetter(res.data));
      })
      .catch((err) => console.log("this is error", err));
  };
  return (
    <div>
      <div className="form-title-wrapper">
        <div className="form-title-left">
          <div className="form-title">{`${title}`}</div>
          <div className="edit-icon">
            <div className="edit-icon-svg w-embed" onClick={handleShow}>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.245 2.81739C14.3318 1.73059 16.0938 1.73059 17.1806 2.81739C18.2222 3.85892 18.2656 5.5206 17.3108 6.6138L17.1806 6.75307L7.57482 16.3589C7.36973 16.564 7.12299 16.7215 6.85212 16.8213L6.68684 16.8742L2.63187 17.9801C2.28528 18.0746 1.96521 17.7861 2.00276 17.4455L2.01793 17.3662L3.12383 13.3112C3.20014 13.0314 3.33621 12.7722 3.52188 12.5511L3.63914 12.4232L13.245 2.81739ZM12.3848 5.09229L4.34625 13.1303C4.25396 13.2226 4.18093 13.3318 4.13086 13.4514L4.08859 13.5743L3.21196 16.785L6.42372 15.9094C6.50767 15.8865 6.5879 15.8529 6.66253 15.8096L6.77003 15.7375L6.86771 15.6518L14.9058 7.61329L12.3848 5.09229ZM16.4735 3.5245C15.8159 2.8669 14.7725 2.83037 14.072 3.4149L13.9521 3.5245L13.0918 4.38529L15.6128 6.90629L16.4735 6.04596C17.1311 5.38836 17.1677 4.34488 16.5831 3.64441L16.4735 3.5245Z"
                  fill="#212121"
                />
              </svg>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Form Title:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              style={{ width: "100%", padding: "8px" }}
              type="text"
              name=""
              value={`${curTitle}`}
              onChange={(e) => setCurTitle(e.target.value)}
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Discard
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setTitle(curTitle);
                handleClose();
                return true;
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="form-title-right">
          <div className="draft-text">Save as draft</div>
          <div className="preview-button">
            <div className="preview-button-text">Preview</div>
          </div>
          <div className="publish-button" onClick={(e) => publishForm(e)}>
            <div className="publish-button-text">Publish</div>
          </div>
        </div>

        <Modal show={publish} onHide={() => setPublish(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {link === "" ? "Publishing.." : "succesfully published"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex" }}>
              {isSpin ? <CircularProgress /> : <a href={`${link}`}>{link}</a>}
              {isCopied ? <Checkmark size="24px" /> : ""}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <CopyToClipboard text={link}>
              <Button variant="secondary" onClick={() => setIsCopied(true)}>
                Copy
              </Button>
            </CopyToClipboard>

            <Button variant="primary" onClick={() => setPublish(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default FormTitle;
