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
import ResponseForm from "./Components/Response/ResponseForm";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Workspace></Workspace>
          </Route>
          <Route path="/forms/:id" component={ResponseForm} />
        </Switch>
      </div>
    </Router>
  );
}
