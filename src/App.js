import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logged } from "./actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/main/Header";
import Workspace from "./Components/main/Workspace";
import FormTitle from "./Components/main/FormTitle";
import "./app.css";
import DragandDrop from "./Components/DragandDrop";
import Dnd from "./Components/Dnd";
import MySwitch from "./Components/Utils/MySwitch";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();

  return (
    <Router>
      <div>
        <Route exact path="/">
          <Workspace></Workspace>
        </Route>
        <Route path="/test">
          <MySwitch />
        </Route>
      </div>
    </Router>
  );
}
