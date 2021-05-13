import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import { db, storage } from "./firebase";
import "./Visit.css";

function Visit() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState("");
  const [myUrl, setMyURL] = useState(
    "https://cdn.dribbble.com/users/2645532/screenshots/10865833/media/a8ce752ebaa96c73ee7b47ffab6069f2.jpg?compress=1&resize=1600x1200"
  );

  useState(() => {
    console.log(myUrl);
  }, [myUrl]);

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

  return (
    <div className="imageupload__div">
      <progress className="myprogress" value={progress} max="100"></progress>
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
  );
}

export default Visit;
