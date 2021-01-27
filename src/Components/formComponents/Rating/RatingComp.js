import React, { useState, useEffect } from "react";
import "./Rating.css";
import ThreeButtons from "../ThreeButtons";
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
import { useSelector } from "react-redux";
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

function RatingComp({ id }) {
  const [isDisplay, setIsDisplay] = useState("none");
  const [ratingValue, setRatingValue] = useState("");
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");
  const [optList, setOptList] = useState([]);
  const myformList = useSelector((state) => state.formList);
  const [isRequired, setIsRequired] = useState("No");
  const [constrains, setConstrains] = useState([]);
  const [emojiType, setEmojiType] = useState("star");

  useEffect(() => {
    var a = myformList.find((item) => item.id === id);
    console.log("this is a", a);

    if (a) {
      setLabel(a.label);
      setDesc(a.description);
      setIsRequired(a.isRequired);
      setOptList(a.inputs);
      setConstrains(a.constrains);

      var b = a.constrains.find((item) => item.name === "emoji type");
      setEmojiType(b.value);
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
          {label}
          {isRequired ? <span style={{ color: "#ff0000" }}>*</span> : ""}
        </div>
        <div className="work-description">{desc}</div>
        <div className={classes.root}>
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
            <div>
              <EmojiRating
                variant="emojiPeople"
                onChange={(e) => setRatingValue(e)}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <ThreeButtons isDisplay={`${isDisplay}`} id={`${id}`} />
      </div>
    </div>
  );
}

export default RatingComp;
