import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import "./Profile.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import NavBar from "../main/NavBar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Modal } from "react-bootstrap";
// import Visit from "../../Visit";
import firebase from "firebase";
import { db, storage } from "../../firebase";
import { logged, setUserId, userPicture } from "../../actions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function Profile() {
  const [isDisplay, setIsDisplay] = useState("none");
  const id = useSelector((state) => state.userId);

  const classes = useStyles();
  const picture = useSelector((state) => state.userPicture);
  const [lgShow, setLgShow] = useState(false);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState("");
  const [myUrl, setMyURL] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [myToken, setMyToken] = useState("");
  const [passModal, setPassModal] = useState("");
  const [signin, setSignin] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [oldPass, setOldPass] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("userData")).token;
    setMyToken(token);
    if (myUrl === "") {
      axios({
        method: "POST",
        url: "http://localhost:3001/userinfo",
        data: { user_id: id },
        headers: {
          Authorization: "bearer " + token,
        },
      })
        .then((res) => {
          // console.log(res.data, "sdfjh fuck");
          setName(res.data.name);
          setMyURL(res.data.picture);
          setEmail(res.data.email);
          setSignin(res.data.sign_in);
        })
        .catch((err) => console.log(err));
    } else {
      console.log(myUrl, "changed");
    }

    // console.log("changed", myUrl);
  }, [myUrl]);

  // useEffect(() => {
  //  return lo

  // }, []);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    /// storing a image
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        ////progress function..
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //Error function
        console.log(error);
        alert(error.message);
      },
      () => {
        ///upload complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post image to db
            console.log("new url", url);
            setMyURL(url);
            // db.collection("posts").add({
            //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //   caption: caption,
            //   imageUrl: url,
            //   username: "arun logan",
            // });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  const updateDetails = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3001/userupdate",
      data: { id: id, name: name, email: email, picture: myUrl },
      headers: {
        Authorization: "bearer " + myToken,
      },
    })
      .then((res) => {
        // console.log(res.data, "sdfjh fuck");

        setName(res.data.name);
        setMyURL(res.data.picture);
        setEmail(res.data.email);

        localStorage.setItem(
          "userData",
          JSON.stringify({
            userId: id,
            token: myToken,
            picture: res.data.picture,
          })
        );
        dispatch(userPicture(res.data.picture));
        alert("successfully saved changes");
      })
      .catch((err) => console.log(err));
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (signin === "Google") {
      if (pass === rePass) {
        axios({
          method: "POST",
          url: "http://localhost:3001/resetpass",
          data: { user_id: id, password: pass },
          headers: {
            Authorization: "bearer " + myToken,
          },
        })
          .then((res) => {
            // console.log(res.data, "sdfjh fuck");
            localStorage.setItem("islogged", null);
            localStorage.setItem("userData", null);
            dispatch(logged());
            dispatch(setUserId(""));
            history.push("/login");
            alert("Password changed successfully! login to continue");
          })
          .catch((err) => console.log(err));
      } else {
        alert("password did not mactch!");
      }
    } else {
      if (pass === rePass) {
        axios({
          method: "POST",
          url: "http://localhost:3001/resetpass",
          data: { user_id: id, oldPass: oldPass, password: pass },
          headers: {
            Authorization: "bearer " + myToken,
          },
        })
          .then((res) => {
            // console.log(res.data, "sdfjh fuck");
            localStorage.setItem("islogged", null);
            localStorage.setItem("userData", null);
            dispatch(logged());
            dispatch(setUserId(""));
            history.push("/login");
            alert("Password changed successfully! login to continue");
          })
          .catch((err) => console.log(err));
      } else {
        alert("password did not mactch!");
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="profile-editor">
        <div className="avatar-image-editor">
          <div
            className="avatar-image"
            onMouseEnter={() => setIsDisplay("block")}
            onMouseLeave={() => setIsDisplay("none")}
            style={{ border: "1px solid lighgray", borderRadius: "10px" }}
            onClick={() => setLgShow(true)}
          >
            <div className="editorIcon" style={{ display: `${isDisplay}` }}>
              <EditIcon></EditIcon>
            </div>

            <img
              style={{ width: "200px", height: "150px", borderRadius: "10px" }}
              src={myUrl}
              alt="no img"
            />
          </div>
        </div>
        <div style={{ width: "600px", paddingTop: "4px" }}>
          <div>
            <p>username:</p>
            <input
              type="text"
              value={name}
              style={{
                width: "100%",
                borderBottom: "1px solid grey",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                marginBottom: "32px",
                padding: "10px",
              }}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <p>email:</p>
            <input
              type="text"
              value={email}
              style={{
                width: "100%",
                borderBottom: "1px solid grey",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                marginBottom: "32px",
                padding: "10px",
              }}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <Button
              stle={{ width: "100%" }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => setPassModal(true)}
            >
              Reset Password
            </Button>
          </div>
        </div>
        <div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => updateDetails(e)}
          >
            Save Changes
          </Button>
        </div>
        <div>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Upload Image
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                style={{
                  width: "200px",
                  height: "150px",
                  borderRadius: "10px",
                }}
                src={myUrl}
                alt="no img"
              />
              <div>
                <div className="imageupload__div">
                  <progress
                    className="myprogress"
                    value={progress}
                    max="100"
                  ></progress>
                  <input
                    type="text"
                    placeholder="enter a caption..."
                    value={caption}
                    onChange={(event) => {
                      setCaption(event.target.value);
                    }}
                  ></input>
                  <input type="file" name="" onChange={handleChange}></input>

                  <Button onClick={handleUpload}>Upload</Button>
                  {/* <img src={myUrl} alt="no img" /> */}
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <div>
            <Modal
              size="lg"
              show={passModal}
              onHide={() => setPassModal(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {signin === "Google" ? "Create Password" : "Reset password"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {signin === "Google" ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "10px",
                    }}
                  >
                    <div>
                      <input
                        type="password"
                        placeholder="Enter New password"
                        onChange={(e) => setPass(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="Re-enter New password"
                        onChange={(e) => setRePass(e.target.value)}
                      ></input>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "10px",
                    }}
                  >
                    <input
                      type="password"
                      placeholder="Enter Old password"
                      onChange={(e) => setOldPass(e.target.value)}
                    ></input>
                    <input
                      type="password"
                      placeholder="Enter New password"
                      onChange={(e) => setPass(e.target.value)}
                    ></input>
                    <input
                      type="password"
                      placeholder="Re-enter New password"
                      onChange={(e) => setRePass(e.target.value)}
                    ></input>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setPassModal(false)} variant="primary">
                  Cancel
                </Button>
                <Button onClick={(e) => handleUpdatePassword(e)}>
                  {signin === "Google" ? "Create" : "Reset"}
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
