import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { motion, useMotionValue, useTransform } from "framer-motion";
import { userDetails, logged } from "../../actions";
import Header from "../main/Header";
import Navbar from "../main/NavBar";
import "./DashBoard.css";

function Dashboard(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetails);
  const isLogged = useSelector((state) => state.islogged);

  useEffect(() => {
    // console.log(location.state.detail);
    // if (user.length === 0) {
    //   console.log("disptqachonh");
    //   localStorage.setItem("isLogged", true);
    //   dispatch(userDetails(location.state.detail));
    //   dispatch(logged());
    // } else {
    //   console.log("this is user", user);
    // }
  }, [user, isLogged]);
  return (
    <div>
      {!isLogged ? (
        <div>
          <Navbar />
          <div>
            <div className="dash-sub-head">
              <div className="dash-sub-head-left">
                <p>Dashboard</p>
                <p>Forms</p>
                <p>People</p>
              </div>
              <div className="dash-sub-head-right">
                <button type="">New form</button>
              </div>
            </div>
            <div className="dash-forms-templates"></div>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default Dashboard;
