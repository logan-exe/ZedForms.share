import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formList } from "../../../actions";

import { Modal, Button } from "react-bootstrap";
import Switch from "@material-ui/core/Switch";
import EmojiRating from "react-emoji-rating";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import { makeStyles } from "@material-ui/core/styles";

// import Box from "@material-ui/core/Box";

// const labels = {
//   0.5: "Useless",
//   1: "Useless",
//   1.5: "Poor",
//   2: "Poor",
//   2.5: "Ok",
//   3: "Ok",
//   3.5: "Good",
//   4: "Good",
//   4.5: "Excellent",
//   5: "Excellent",
// };
const StyledRating = withStyles({
  iconFilled: {
    color: "#121242",
  },
  iconHover: {
    color: "#121242",
  },
})(Rating);

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function RatingModal({ id, isDisplay, lgShow, setLgShow }) {
  const myformList = useSelector((state) => state.formList);

  const [optList, setOptList] = useState([]);
  const [isRequired, setIsRequired] = useState(false);
  const [type, setType] = useState("");
  const [constrains, setConstrains] = useState([]);
  const [emojiType, setEmojiType] = useState("");
  const [value, setValue] = useState("");

  const [ratingValue, setRatingValue] = useState("");
  const [hover, setHover] = useState("");

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
    setConstrains(a.constrains);
    setIsRequired(a.isRequired);
    var b = a.constrains.find((item) => item.name === "emoji type");
    // var c = a.constrains.find((item) => item.name === "multiple lines");
    setEmojiType(b.value);
    // setPlaceholder(b.value);
  }, [id, isDisplay, myformList, optList, lgShow]);

  const handleSwitchChange = (event) => {
    setIsRequired(!isRequired);
  };

  const handleSelectChange = (e) => {
    setEmojiType(e.target.value);
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
      if (update_list[index].constrains[j].name === "emoji type") {
        list[j].value = emojiType;
      }
    }
    update_list[index].constrains = [...list];
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
                {emojiType === "star" ? (
                  <div>
                    <StyledRating
                      name="hover-feedback"
                      size="large"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                    />

                    {/* {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              )} */}
                  </div>
                ) : emojiType === "face" ? (
                  <StyledRating
                    size="large"
                    name="customized-icons"
                    defaultValue={2}
                    getLabelText={(value) => customIcons[value].label}
                    IconContainerComponent={IconContainer}
                    value={value}
                  />
                ) : emojiType === "people" ? (
                  <EmojiRating
                    variant="emojiPeople"
                    onChange={(e) => setRatingValue(e)}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div>Settings</div>
              <div>
                <div>
                  <div>
                    <select
                      onChange={(e) => handleSelectChange(e)}
                      value={emojiType}
                    >
                      <option value="star">Star</option>
                      <option value="face">Emoji</option>
                      <option value="people">Emoji People</option>
                    </select>
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

export default RatingModal;
