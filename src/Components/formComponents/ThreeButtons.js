import React, { useState, useEffect } from "react";
import "./ThreeButtons.css";
import { useSelector, useDispatch } from "react-redux";
import { formList } from "../../actions";
import uuid from "react-uuid";
import ComponentList from "../main/ComponentList";

function ThreeButtons({ id, isDisplay }) {
  const [curid, setCurid] = useState("");
  const [curisDisplay, setCurisDisplay] = useState("none");
  const [myList, setMyList] = useState([]);
  const myformList = useSelector((state) => state.formList);

  const dispatch = useDispatch();
  useEffect(() => {
    setCurid(id);
    setCurisDisplay(isDisplay);
    setMyList(myformList);
  }, [id, isDisplay, myformList]);
  const handleEdit = (nowid) => {
    console.log(nowid);
  };
  const handleDelete = (nowid) => {
    var newList = myformList.filter((item) => item.id !== nowid);
    dispatch(formList(newList));
  };

  const handleDuplicate = (nowid) => {
    var dupEle = myList.find((item) => item.id === nowid);
    var new_id = uuid() + dupEle.id;
    var myindex = myList.findIndex((item) => item.id === nowid);
    console.log("this is the index", myindex);
    var new_obj = { id: `${new_id}`, compType: `${dupEle.compType}` };
    console.log(new_obj);

    myList.splice(myindex + 1, 0, new_obj);
    console.log("before insering", myList);
    dispatch(formList([...myList]));
  };
  return (
    <div>
      <div>
        <div
          style={{
            display: `${curisDisplay}`,
            height: "1px",
            width: "100%",
            backgroundColor: "lightgrey",
            marginTop: "16px",
          }}
        ></div>
        <div
          // className="work-button-wrapper"
          style={{
            display: `${curisDisplay}`,
            justifyContent: "flex-end",
            paddingTop: "16px",
            marginBottom: "-16px",
          }}
        >
          <div
            onClick={() => handleEdit(curid)}
            className="work-button edit-button"
          >
            <div className="edit-text">Edit</div>
          </div>
          <div onClick={() => handleDuplicate(curid)} className="work-button">
            <div className="duplicate-text">Duplicate</div>
          </div>
          <div onClick={() => handleDelete(curid)} className="work-button">
            <div className="delete-button-text">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeButtons;
