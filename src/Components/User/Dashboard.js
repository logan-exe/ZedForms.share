import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { motion, useMotionValue, useTransform } from "framer-motion";
import { userDetails, logged } from "../../actions";
import Header from "../main/Header";
import Navbar from "../main/NavBar";
import "./DashBoard.css";
import { useHistory } from "react-router-dom";
import { setUserId } from "../../actions";

function Dashboard(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetails);
  const isLogged = useSelector((state) => state.islogged);
  const id = useSelector((state) => state.userId);
  const history = useHistory();

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
    console.log("hello world");
  }, [user, isLogged]);

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.setItem("islogged", null);
    localStorage.setItem("userData", null);
    dispatch(logged());
    dispatch(setUserId(""));

    // history.push("/login");
  };

  const handleNewForm = (e) => {
    e.preventDefault();
    history.push(`/editor/${id}/formeditor`);
  };
  return (
    <div>
      {isLogged ? (
        <div>
          <Navbar />
          <div>
            <div className="landing-page-sub-nav-container">
              <div className="sub-nav-left-wrapper">
                <div className="sub-nav-menu-links">
                  <div className="menu-item">Dashboard</div>
                </div>
                <div className="sub-nav-menu-links inactive">
                  <div className="menu-item inactive">Forms</div>
                </div>
                <div className="sub-nav-menu-links inactive">
                  <div className="menu-item inactive">Analytics</div>
                </div>
                <div className="sub-nav-menu-links inactive">
                  <div className="menu-item inactive">Plans</div>
                </div>
                <div className="sub-nav-menu-links inactive">
                  <div className="menu-item inactive">Settings</div>
                </div>
              </div>
              <div
                className="sub-nav-right-wrapper"
                onClick={() => history.push(`/editor/${id}/formeditor`)}
              >
                <div className="new-form-button">
                  <div className="new-form-icon">
                    <div className="new-form-icon-svg w-embed">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 6.5C12 3.46243 9.53757 1 6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12C9.53757 12 12 9.53757 12 6.5ZM7.00065 7.00001L7.00111 9.50352C7.00111 9.77966 6.77725 10.0035 6.50111 10.0035C6.22497 10.0035 6.00111 9.77966 6.00111 9.50352L6.00065 7.00001H3.49609C3.21995 7.00001 2.99609 6.77615 2.99609 6.50001C2.99609 6.22387 3.21995 6.00001 3.49609 6.00001H6.00046L6 3.49927C6 3.22313 6.22386 2.99927 6.5 2.99927C6.77614 2.99927 7 3.22313 7 3.49927L7.00046 6.00001H9.50301C9.77915 6.00001 10.003 6.22387 10.003 6.50001C10.003 6.77615 9.77915 7.00001 9.50301 7.00001H7.00065ZM17.75 4.5H12.6865C12.5142 3.96653 12.2747 3.46321 11.9782 3H17.75C19.5449 3 21 4.45507 21 6.25V13.1287C21 13.7254 20.7629 14.2977 20.341 14.7197L14.7197 20.341C14.2977 20.7629 13.7254 21 13.1287 21H6.25C4.45507 21 3 19.5449 3 17.75V11.9782C3.46321 12.2747 3.96653 12.5142 4.5 12.6865V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H13V16.25C13 14.517 14.3565 13.1008 16.0656 13.0051L16.25 13H19.5V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5ZM18.439 14.5H16.25C15.3318 14.5 14.5788 15.2071 14.5058 16.1065L14.5 16.25V18.439L18.439 14.5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="new-form-text">New form</div>
                </div>
              </div>
            </div>
            <div className="dash-forms-templates-wrapper">
              <div className="dash-forms-templates">
                <div className="landing-page-card-wrapper">
                  <div className="card-image-wrapper" />
                  <div className="card-content-wrapper">
                    <div className="card-heading">Start from scratch</div>
                    <p className="card-desc">
                      Amet minim mollit nonsdd ullamco est sit dolor do amet
                      sint. Velit officia consequat.
                    </p>
                    <div className="card-button">
                      <div className="card-button-text">Start blank</div>
                    </div>
                  </div>
                </div>
                <div className="landing-page-card-wrapper">
                  <div className="card-image-wrapper" />
                  <div className="card-content-wrapper">
                    <div className="card-heading">Start from scratch</div>
                    <p className="card-desc">
                      Amet minim mollit nonsdd ullamco est sit dolor do amet
                      sint. Velit officia consequat.
                    </p>
                    <div className="card-button">
                      <div className="card-button-text">Start blank</div>
                    </div>
                  </div>
                </div>
                <div className="landing-page-card-wrapper">
                  <div className="card-image-wrapper" />
                  <div className="card-content-wrapper">
                    <div className="card-heading">Start from scratch</div>
                    <p className="card-desc">
                      Amet minim mollit nonsdd ullamco est sit dolor do amet
                      sint. Velit officia consequat.
                    </p>
                    <div className="card-button">
                      <div className="card-button-text">Start blank</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            //startfrom here recent forms
          }
          <div className="recent-forms-cpntainer">
            <h2 className="recent-forms-heading">My Recent forms</h2>
            <div className="recent-forms-tab-wrapper">
              <div className="recent-forms-tab-left">
                <div className="recent-form-menu-link inactive">
                  <div className="menu-item inactive">All</div>
                </div>
                <div className="recent-form-menu-link">
                  <div className="menu-item">My forms</div>
                </div>
                <div className="recent-form-menu-link inactive">
                  <div className="menu-item inactive">Shared forms</div>
                </div>
              </div>
              <div className="recent-forms-tab-right">
                <div className="recent-form-menu-link inactive">
                  <div className="menu-item inactive">Sort by:</div>
                  <div className="menu-item">All</div>
                  <div className="caret-icon-recent-forms">
                    <div className="caret-icon-recent-forms-svg w-embed">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={16} height={16} fill="white" />
                        <path
                          d="M4.95693 5C4.14924 5 3.67479 5.90803 4.13603 6.57107L6.76866 10.3555C7.36545 11.2134 8.6346 11.2133 9.23138 10.3555L11.864 6.57106C12.3253 5.90803 11.8508 5 11.0431 5H4.95693Z"
                          fill="#3232AC"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="recent-form-menu-link inactive">
                  <div className="menu-item inactive">Filter by:</div>
                  <div className="menu-item">All</div>
                  <div className="caret-icon-recent-forms">
                    <div className="caret-icon-recent-forms-svg w-embed">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={16} height={16} fill="white" />
                        <path
                          d="M4.95693 5C4.14924 5 3.67479 5.90803 4.13603 6.57107L6.76866 10.3555C7.36545 11.2134 8.6346 11.2133 9.23138 10.3555L11.864 6.57106C12.3253 5.90803 11.8508 5 11.0431 5H4.95693Z"
                          fill="#3232AC"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-form-item-wrapper">
              <div className="recent-form-item">
                <div className="recent-form-item-left">
                  <div className="form-item-heading">
                    <div className="form-item-heading-text">
                      Customer Success Questionnaire
                    </div>
                  </div>
                  <div className="form-item-desc">
                    <div className="form-item-desc-text">
                      Last modified 8 hours ago
                    </div>
                    <div className="form-item-desc-status">
                      <div className="form-item-desc-status-text">Live</div>
                    </div>
                  </div>
                </div>
                <div className="recent-form-item-right">
                  <div className="stats-wrapper">
                    <div className="stats-count">24</div>
                    <div className="stats-desc">Questions</div>
                  </div>
                  <div className="stats-wrapper">
                    <div className="stats-count">102</div>
                    <div className="stats-desc">Responses</div>
                  </div>
                  <div className="stats-wrapper">
                    <div className="stats-count">42%</div>
                    <div className="stats-desc">Completion rate</div>
                  </div>
                  <div className="facepile-wrapper">
                    <div className="avatar-item" />
                    <div className="avatar-item _2" />
                    <div className="avatar-item _3" />
                    <div className="avatar-item _4" />
                    <div className="avatar-item number">
                      <div className="avatar-count">+5</div>
                    </div>
                  </div>
                  <div className="more-icon-wrapper">
                    <div className="more-icon-wrapper-svg w-embed">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={32} height={32} fill="#F9F9F9" />
                        <path
                          d="M16 11.75C15.0335 11.75 14.25 10.9665 14.25 10C14.25 9.0335 15.0335 8.25 16 8.25C16.9665 8.25 17.75 9.0335 17.75 10C17.75 10.9665 16.9665 11.75 16 11.75ZM16 17.75C15.0335 17.75 14.25 16.9665 14.25 16C14.25 15.0335 15.0335 14.25 16 14.25C16.9665 14.25 17.75 15.0335 17.75 16C17.75 16.9665 16.9665 17.75 16 17.75ZM14.25 22C14.25 22.9665 15.0335 23.75 16 23.75C16.9665 23.75 17.75 22.9665 17.75 22C17.75 21.0335 16.9665 20.25 16 20.25C15.0335 20.25 14.25 21.0335 14.25 22Z"
                          fill="black"
                          fillOpacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent-form-item">
                <div className="recent-form-item-left">
                  <div className="form-item-heading">
                    <div className="form-item-heading-text">
                      Customer Success Questionnaire
                    </div>
                  </div>
                  <div className="form-item-desc">
                    <div className="form-item-desc-text">
                      Last modified 8 hours ago
                    </div>
                    <div className="form-item-desc-status draft">
                      <div className="form-item-desc-status-text">Draft</div>
                    </div>
                  </div>
                </div>
                <div className="recent-form-item-right">
                  <div className="stats-wrapper">
                    <div className="stats-count">24</div>
                    <div className="stats-desc">Questions</div>
                  </div>
                  <div className="stats-wrapper">
                    <div className="stats-count">102</div>
                    <div className="stats-desc">Responses</div>
                  </div>
                  <div className="stats-wrapper">
                    <div className="stats-count">42%</div>
                    <div className="stats-desc">Completion rate</div>
                  </div>
                  <div className="facepile-wrapper">
                    <div className="avatar-item" />
                    <div className="avatar-item _2" />
                    <div className="avatar-item _3" />
                    <div className="avatar-item _4" />
                    <div className="avatar-item number">
                      <div className="avatar-count">+5</div>
                    </div>
                  </div>
                  <div className="more-icon-wrapper">
                    <div className="more-icon-wrapper-svg w-embed">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={32} height={32} fill="#F9F9F9" />
                        <path
                          d="M16 11.75C15.0335 11.75 14.25 10.9665 14.25 10C14.25 9.0335 15.0335 8.25 16 8.25C16.9665 8.25 17.75 9.0335 17.75 10C17.75 10.9665 16.9665 11.75 16 11.75ZM16 17.75C15.0335 17.75 14.25 16.9665 14.25 16C14.25 15.0335 15.0335 14.25 16 14.25C16.9665 14.25 17.75 15.0335 17.75 16C17.75 16.9665 16.9665 17.75 16 17.75ZM14.25 22C14.25 22.9665 15.0335 23.75 16 23.75C16.9665 23.75 17.75 22.9665 17.75 22C17.75 21.0335 16.9665 20.25 16 20.25C15.0335 20.25 14.25 21.0335 14.25 22Z"
                          fill="black"
                          fillOpacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent-form-item">
                <div className="recent-form-item-left">
                  <div className="form-item-heading">
                    <div className="form-item-heading-text">
                      Customer Success Questionnaire
                    </div>
                  </div>
                  <div className="form-item-desc">
                    <div className="form-item-desc-text">
                      Last modified 8 hours ago
                    </div>
                    <div className="form-item-desc-status">
                      <div className="form-item-desc-status-text">Live</div>
                    </div>
                  </div>
                </div>
                <div className="recent-form-item-right">
                  <div className="stats-wrapper">
                    <div className="stats-count">24</div>
                    <div className="stats-desc">Questions</div>
                  </div>
                  <div className="stats-wrapper">
                    <div className="stats-count">102</div>
                    <div className="stats-desc">Responses</div>
                  </div>
                  <div className="stats-wrapper">
                    <div className="stats-count">42%</div>
                    <div className="stats-desc">Completion rate</div>
                  </div>
                  <div className="facepile-wrapper">
                    <div className="avatar-item" />
                    <div className="avatar-item _2" />
                    <div className="avatar-item _3" />
                    <div className="avatar-item _4" />
                    <div className="avatar-item number">
                      <div className="avatar-count">+5</div>
                    </div>
                  </div>
                  <div className="more-icon-wrapper">
                    <div className="more-icon-wrapper-svg w-embed">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={32} height={32} fill="#F9F9F9" />
                        <path
                          d="M16 11.75C15.0335 11.75 14.25 10.9665 14.25 10C14.25 9.0335 15.0335 8.25 16 8.25C16.9665 8.25 17.75 9.0335 17.75 10C17.75 10.9665 16.9665 11.75 16 11.75ZM16 17.75C15.0335 17.75 14.25 16.9665 14.25 16C14.25 15.0335 15.0335 14.25 16 14.25C16.9665 14.25 17.75 15.0335 17.75 16C17.75 16.9665 16.9665 17.75 16 17.75ZM14.25 22C14.25 22.9665 15.0335 23.75 16 23.75C16.9665 23.75 17.75 22.9665 17.75 22C17.75 21.0335 16.9665 20.25 16 20.25C15.0335 20.25 14.25 21.0335 14.25 22Z"
                          fill="black"
                          fillOpacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent-form-item">
                <div className="recent-form-item-left">
                  <div className="form-item-heading">
                    <div className="form-item-heading-text">
                      Customer Success Questionnaire
                    </div>
                  </div>
                  <div className="form-item-desc">
                    <div className="form-item-desc-text">
                      Last modified 8 hours ago
                    </div>
                    <div className="form-item-desc-status">
                      <div className="form-item-desc-status-text">Live</div>
                    </div>
                  </div>
                </div>
                <div className="recent-form-item-right">
                  <div className="stats-wrapper">
                    <div className="stats-count">24</div>
                    <div className="stats-desc">Questions</div>
                  </div>
                  <div className="stats-wrapper">
                    <div className="stats-count">102</div>
                    <div className="stats-desc">Responses</div>
                  </div>
                  <div className="stats-wrapper">
                    <div className="stats-count">42%</div>
                    <div className="stats-desc">Completion rate</div>
                  </div>
                  <div className="facepile-wrapper">
                    <div className="avatar-item" />
                    <div className="avatar-item _2" />
                    <div className="avatar-item _3" />
                    <div className="avatar-item _4" />
                    <div className="avatar-item number">
                      <div className="avatar-count">+5</div>
                    </div>
                  </div>
                  <div className="more-icon-wrapper">
                    <div className="more-icon-wrapper-svg w-embed">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={32} height={32} fill="#F9F9F9" />
                        <path
                          d="M16 11.75C15.0335 11.75 14.25 10.9665 14.25 10C14.25 9.0335 15.0335 8.25 16 8.25C16.9665 8.25 17.75 9.0335 17.75 10C17.75 10.9665 16.9665 11.75 16 11.75ZM16 17.75C15.0335 17.75 14.25 16.9665 14.25 16C14.25 15.0335 15.0335 14.25 16 14.25C16.9665 14.25 17.75 15.0335 17.75 16C17.75 16.9665 16.9665 17.75 16 17.75ZM14.25 22C14.25 22.9665 15.0335 23.75 16 23.75C16.9665 23.75 17.75 22.9665 17.75 22C17.75 21.0335 16.9665 20.25 16 20.25C15.0335 20.25 14.25 21.0335 14.25 22Z"
                          fill="black"
                          fillOpacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-forms-footer-wrapper">
              <div className="recent-forms-footer-left">
                <div className="recent-forms-footer-left-text">
                  Showing 2 of 7 forms.
                </div>
              </div>
              <div className="recent-forms-footer-right">
                <div className="recent-forms-footer-right-text">
                  See all forms
                </div>
              </div>
            </div>
          </div>
          {
            //ends here
          }

          <div>
            <button onClick={(e) => handleLogout(e)}>Logout</button>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default Dashboard;
