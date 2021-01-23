import React, { useState } from "react";
// import { Navbar, Nav } from "react-bootstrap";
import "../../style/header.css";
import formEditor from "../../assets/images/FormEditor.svg";
import Navbar from "./NavBar";
function Header() {
  const [color, setColor] = useState("white");
  return (
    <div>
      <Navbar />

      <div className="Header">
        <div className="quickaccess-wrapper">
          <div
            className="quickaccess-icon"
            onMouseOver={() => setColor("black")}
            onMouseOut={() => setColor("white")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 3.5C5.83579 3.5 5.5 3.83579 5.5 4.25V19.75C5.5 20.1642 5.83579 20.5 6.25 20.5H10.0293C9.92216 21.0483 10.0375 21.5732 10.3007 22H6.25C5.00736 22 4 20.9926 4 19.75V4.25C4 3.00736 5.00736 2 6.25 2H12.3358C12.7999 2 13.245 2.18437 13.5732 2.51256L19.4874 8.42678C19.8156 8.75497 20 9.20009 20 9.66421V10H19.8698C19.7592 9.99447 19.6484 9.99447 19.5378 10H14C12.8954 10 12 9.10457 12 8V3.5H6.25ZM13.5 4.56066V8C13.5 8.27614 13.7239 8.5 14 8.5H17.4393L13.5 4.56066ZM19.7133 11H19.7154C20.3 11.0003 20.8845 11.2234 21.3305 11.6695C22.2231 12.5621 22.2231 14.0093 21.3305 14.9019L15.4281 20.8043C15.084 21.1485 14.6528 21.3926 14.1806 21.5106L12.3499 21.9683C11.5538 22.1674 10.8326 21.4462 11.0317 20.6501L11.4894 18.8194C11.6074 18.3472 11.8515 17.916 12.1957 17.5719L18.0981 11.6695C18.5441 11.2234 19.1287 11.0003 19.7133 11Z"
                fill={`${color}`}
              />
            </svg>
          </div>

          <div
            className="quickaccess-icon"
            onMouseOver={() => setColor("black")}
            onMouseOut={() => setColor("white")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 3.5C5.83579 3.5 5.5 3.83579 5.5 4.25V19.75C5.5 20.1642 5.83579 20.5 6.25 20.5H10.0293C9.92216 21.0483 10.0375 21.5732 10.3007 22H6.25C5.00736 22 4 20.9926 4 19.75V4.25C4 3.00736 5.00736 2 6.25 2H12.3358C12.7999 2 13.245 2.18437 13.5732 2.51256L19.4874 8.42678C19.8156 8.75497 20 9.20009 20 9.66421V10H19.8698C19.7592 9.99447 19.6484 9.99447 19.5378 10H14C12.8954 10 12 9.10457 12 8V3.5H6.25ZM13.5 4.56066V8C13.5 8.27614 13.7239 8.5 14 8.5H17.4393L13.5 4.56066ZM19.7133 11H19.7154C20.3 11.0003 20.8845 11.2234 21.3305 11.6695C22.2231 12.5621 22.2231 14.0093 21.3305 14.9019L15.4281 20.8043C15.084 21.1485 14.6528 21.3926 14.1806 21.5106L12.3499 21.9683C11.5538 22.1674 10.8326 21.4462 11.0317 20.6501L11.4894 18.8194C11.6074 18.3472 11.8515 17.916 12.1957 17.5719L18.0981 11.6695C18.5441 11.2234 19.1287 11.0003 19.7133 11Z"
                fill={`${color}`}
              />
            </svg>
          </div>
          <div
            className="quickaccess-icon"
            onMouseOver={() => setColor("black")}
            onMouseOut={() => setColor("white")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 3.5C5.83579 3.5 5.5 3.83579 5.5 4.25V19.75C5.5 20.1642 5.83579 20.5 6.25 20.5H10.0293C9.92216 21.0483 10.0375 21.5732 10.3007 22H6.25C5.00736 22 4 20.9926 4 19.75V4.25C4 3.00736 5.00736 2 6.25 2H12.3358C12.7999 2 13.245 2.18437 13.5732 2.51256L19.4874 8.42678C19.8156 8.75497 20 9.20009 20 9.66421V10H19.8698C19.7592 9.99447 19.6484 9.99447 19.5378 10H14C12.8954 10 12 9.10457 12 8V3.5H6.25ZM13.5 4.56066V8C13.5 8.27614 13.7239 8.5 14 8.5H17.4393L13.5 4.56066ZM19.7133 11H19.7154C20.3 11.0003 20.8845 11.2234 21.3305 11.6695C22.2231 12.5621 22.2231 14.0093 21.3305 14.9019L15.4281 20.8043C15.084 21.1485 14.6528 21.3926 14.1806 21.5106L12.3499 21.9683C11.5538 22.1674 10.8326 21.4462 11.0317 20.6501L11.4894 18.8194C11.6074 18.3472 11.8515 17.916 12.1957 17.5719L18.0981 11.6695C18.5441 11.2234 19.1287 11.0003 19.7133 11Z"
                fill={`${color}`}
              />
            </svg>
          </div>
          <div
            className="quickaccess-icon"
            onMouseOver={() => setColor("black")}
            onMouseOut={() => setColor("white")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 3.5C5.83579 3.5 5.5 3.83579 5.5 4.25V19.75C5.5 20.1642 5.83579 20.5 6.25 20.5H10.0293C9.92216 21.0483 10.0375 21.5732 10.3007 22H6.25C5.00736 22 4 20.9926 4 19.75V4.25C4 3.00736 5.00736 2 6.25 2H12.3358C12.7999 2 13.245 2.18437 13.5732 2.51256L19.4874 8.42678C19.8156 8.75497 20 9.20009 20 9.66421V10H19.8698C19.7592 9.99447 19.6484 9.99447 19.5378 10H14C12.8954 10 12 9.10457 12 8V3.5H6.25ZM13.5 4.56066V8C13.5 8.27614 13.7239 8.5 14 8.5H17.4393L13.5 4.56066ZM19.7133 11H19.7154C20.3 11.0003 20.8845 11.2234 21.3305 11.6695C22.2231 12.5621 22.2231 14.0093 21.3305 14.9019L15.4281 20.8043C15.084 21.1485 14.6528 21.3926 14.1806 21.5106L12.3499 21.9683C11.5538 22.1674 10.8326 21.4462 11.0317 20.6501L11.4894 18.8194C11.6074 18.3472 11.8515 17.916 12.1957 17.5719L18.0981 11.6695C18.5441 11.2234 19.1287 11.0003 19.7133 11Z"
                fill={`${color}`}
              />
            </svg>
          </div>
          <div
            className="quickaccess-icon"
            onMouseOver={() => setColor("black")}
            onMouseOut={() => setColor("white")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 3.5C5.83579 3.5 5.5 3.83579 5.5 4.25V19.75C5.5 20.1642 5.83579 20.5 6.25 20.5H10.0293C9.92216 21.0483 10.0375 21.5732 10.3007 22H6.25C5.00736 22 4 20.9926 4 19.75V4.25C4 3.00736 5.00736 2 6.25 2H12.3358C12.7999 2 13.245 2.18437 13.5732 2.51256L19.4874 8.42678C19.8156 8.75497 20 9.20009 20 9.66421V10H19.8698C19.7592 9.99447 19.6484 9.99447 19.5378 10H14C12.8954 10 12 9.10457 12 8V3.5H6.25ZM13.5 4.56066V8C13.5 8.27614 13.7239 8.5 14 8.5H17.4393L13.5 4.56066ZM19.7133 11H19.7154C20.3 11.0003 20.8845 11.2234 21.3305 11.6695C22.2231 12.5621 22.2231 14.0093 21.3305 14.9019L15.4281 20.8043C15.084 21.1485 14.6528 21.3926 14.1806 21.5106L12.3499 21.9683C11.5538 22.1674 10.8326 21.4462 11.0317 20.6501L11.4894 18.8194C11.6074 18.3472 11.8515 17.916 12.1957 17.5719L18.0981 11.6695C18.5441 11.2234 19.1287 11.0003 19.7133 11Z"
                fill={`${color}`}
              />
            </svg>
          </div>
          <div
            className="quickaccess-icon"
            onMouseOver={() => setColor("black")}
            onMouseOut={() => setColor("white")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 3.5C5.83579 3.5 5.5 3.83579 5.5 4.25V19.75C5.5 20.1642 5.83579 20.5 6.25 20.5H10.0293C9.92216 21.0483 10.0375 21.5732 10.3007 22H6.25C5.00736 22 4 20.9926 4 19.75V4.25C4 3.00736 5.00736 2 6.25 2H12.3358C12.7999 2 13.245 2.18437 13.5732 2.51256L19.4874 8.42678C19.8156 8.75497 20 9.20009 20 9.66421V10H19.8698C19.7592 9.99447 19.6484 9.99447 19.5378 10H14C12.8954 10 12 9.10457 12 8V3.5H6.25ZM13.5 4.56066V8C13.5 8.27614 13.7239 8.5 14 8.5H17.4393L13.5 4.56066ZM19.7133 11H19.7154C20.3 11.0003 20.8845 11.2234 21.3305 11.6695C22.2231 12.5621 22.2231 14.0093 21.3305 14.9019L15.4281 20.8043C15.084 21.1485 14.6528 21.3926 14.1806 21.5106L12.3499 21.9683C11.5538 22.1674 10.8326 21.4462 11.0317 20.6501L11.4894 18.8194C11.6074 18.3472 11.8515 17.916 12.1957 17.5719L18.0981 11.6695C18.5441 11.2234 19.1287 11.0003 19.7133 11Z"
                fill={`${color}`}
              />
            </svg>
          </div>
          <div
            className="quickaccess-icon"
            onMouseOver={() => setColor("black")}
            onMouseOut={() => setColor("white")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 3.5C5.83579 3.5 5.5 3.83579 5.5 4.25V19.75C5.5 20.1642 5.83579 20.5 6.25 20.5H10.0293C9.92216 21.0483 10.0375 21.5732 10.3007 22H6.25C5.00736 22 4 20.9926 4 19.75V4.25C4 3.00736 5.00736 2 6.25 2H12.3358C12.7999 2 13.245 2.18437 13.5732 2.51256L19.4874 8.42678C19.8156 8.75497 20 9.20009 20 9.66421V10H19.8698C19.7592 9.99447 19.6484 9.99447 19.5378 10H14C12.8954 10 12 9.10457 12 8V3.5H6.25ZM13.5 4.56066V8C13.5 8.27614 13.7239 8.5 14 8.5H17.4393L13.5 4.56066ZM19.7133 11H19.7154C20.3 11.0003 20.8845 11.2234 21.3305 11.6695C22.2231 12.5621 22.2231 14.0093 21.3305 14.9019L15.4281 20.8043C15.084 21.1485 14.6528 21.3926 14.1806 21.5106L12.3499 21.9683C11.5538 22.1674 10.8326 21.4462 11.0317 20.6501L11.4894 18.8194C11.6074 18.3472 11.8515 17.916 12.1957 17.5719L18.0981 11.6695C18.5441 11.2234 19.1287 11.0003 19.7133 11Z"
                fill={`${color}`}
              />
            </svg>
          </div>
          <div
            className="quickaccess-icon"
            onMouseOver={() => setColor("black")}
            onMouseOut={() => setColor("white")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 3.5C5.83579 3.5 5.5 3.83579 5.5 4.25V19.75C5.5 20.1642 5.83579 20.5 6.25 20.5H10.0293C9.92216 21.0483 10.0375 21.5732 10.3007 22H6.25C5.00736 22 4 20.9926 4 19.75V4.25C4 3.00736 5.00736 2 6.25 2H12.3358C12.7999 2 13.245 2.18437 13.5732 2.51256L19.4874 8.42678C19.8156 8.75497 20 9.20009 20 9.66421V10H19.8698C19.7592 9.99447 19.6484 9.99447 19.5378 10H14C12.8954 10 12 9.10457 12 8V3.5H6.25ZM13.5 4.56066V8C13.5 8.27614 13.7239 8.5 14 8.5H17.4393L13.5 4.56066ZM19.7133 11H19.7154C20.3 11.0003 20.8845 11.2234 21.3305 11.6695C22.2231 12.5621 22.2231 14.0093 21.3305 14.9019L15.4281 20.8043C15.084 21.1485 14.6528 21.3926 14.1806 21.5106L12.3499 21.9683C11.5538 22.1674 10.8326 21.4462 11.0317 20.6501L11.4894 18.8194C11.6074 18.3472 11.8515 17.916 12.1957 17.5719L18.0981 11.6695C18.5441 11.2234 19.1287 11.0003 19.7133 11Z"
                fill={`${color}`}
              />
            </svg>
          </div>
        </div>
        <div className="component-wrapper">
          <div className="component-container">
            <div className="icon">
              <img src="images/MultipleChoice.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Multiple choice</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Text.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Text</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Star.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Rating</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Mail.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Email</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Image.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Picture choice</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Contact.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Contact form</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Number.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Number</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Rank.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Rank</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Dropdown.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Dropdown</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Calendar.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Calendar</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Link.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Link</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Payment.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Payment</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Attachment.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Attachment</div>
          </div>
          <div className="component-container">
            <div className="icon">
              <img src="images/Agreement.svg" loading="lazy" alt="" />
            </div>
            <div className="component-text">Agreement</div>
          </div>
        </div>

        {/* <Navbar
        className="NavDiv"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/home">Zurvey App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse style={{ color: "yellow" }} id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link
              //   style={props.head === "login" ? { display: "none" } : {}}
              href="/login"
            >
              Login
            </Nav.Link>
            <Nav.Link
              //   style={props.head === "signup" ? { display: "none" } : {}}
              eventKey={2}
              href="/signup"
            >
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      </div>
      <div className="sample-bar">
        <h2>hello world</h2>
        <div className="logan">
          <button type="">button</button>
          <button>button</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
