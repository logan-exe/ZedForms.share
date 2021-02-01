import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logged } from "./actions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Components/main/Header";
import Workspace from "./Components/main/Workspace";
import FormTitle from "./Components/main/FormTitle";
import "./app.css";
import DragandDrop from "./Components/DragandDrop";
import Dnd from "./Components/Dnd";
import MySwitch from "./Components/Utils/MySwitch";
import ResponseForm from "./Components/Response/ResponseForm";
import Signup from "./Components/User/Signup";
import Signin from "./Components/User/Signin";
import Dashboard from "./Components/User/Dashboard";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // const storedData = JSON.parse(localStorage.getItem("userData"));
    // console.log(isLogged, "hi");
    // if (storedData !== null) {
    //   axios({
    //     method: "GET",
    //     url: "http://localhost:3001/users",
    //     headers: {
    //       Authorization: "Bearer " + storedData.token,
    //     },
    //   })
    //     .then((res) => {
    //       console.log("this is res", res.data);
    //       if (res.data !== "success") {
    //         localStorage.setItem("userData", null);
    //         localStorage.setItem("isLogged", null);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       localStorage.setItem("userData", null);
    //       localStorage.setItem("isLogged", null);
    //     });
    // } else {
    // }
  }, [isLogged]);
  if (!isLogged) {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <div>main page</div>
            </Route>
            <Route path="/forms/:id" component={ResponseForm} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" exact component={Signin} />
            <Route path="/username/dashboard" component={Dashboard} />
            <Route path="/username/formeditor" exact component={Workspace} />
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/username/dashboard" component={Dashboard} />
          <Route path="/username/formeditor" component={Workspace} />
        </Switch>
      </Router>
    );
  }
}
