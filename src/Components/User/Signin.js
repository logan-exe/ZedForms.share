import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GoogleButton from "react-google-button";
import firebase from "firebase";
import { auth } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { logged, setUserId, userPicture } from "../../actions";
import uuid from "react-uuid";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

export default function SignIn() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");
  const [curEmail, setCurEmail] = useState("");
  const [curPassword, setCurPassword] = useState("");

  const signInWithUsername = (e) => {
    e.preventDefault();
    let myData = { email: curEmail, password: curPassword, sign_in: "Manual" };
    axios({
      method: "POST",
      url: "http://localhost:3001/login/user",
      data: myData,
    })
      .then((res) => {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userId: res.data.userId,
            token: res.data.token,
            picture: res.data.picture,
          })
        );
        localStorage.setItem("islogged", true);
        dispatch(logged());
        dispatch(setUserId(res.data.userId));
        dispatch(userPicture(res.data.picture));
        history.push({
          pathname: `/user/${res.data.userId}/dashboard`,
          state: { detail: res.data },
        });
      })
      .catch((err) =>
        alert("Password Does not exists, Reset or continue with google.")
      );
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((res) => {
        var a = res.additionalUserInfo.profile;

        console.log(res.additionalUserInfo.profile, a.name, a.picture, a.email);
        setUserName(a.name);
        setPic(a.picture);
        setEmail(a.email);
        axios({
          method: "GET",
          url: `http://localhost:3001/isuser?email=${a.email}`,
        })
          .then((res) => {
            console.log("this is res", res);
            console.log(res.data, "this is response data");
            if (res.data === "success") {
              axios({
                method: "POST",
                url: "http://localhost:3001/login/user",
                data: {
                  email: a.email,
                  google_password: a.id + "front_secret_code",
                  sign_in: "Google",
                },
              })
                .then((res) => {
                  localStorage.setItem(
                    "userData",
                    JSON.stringify({
                      userId: res.data.userId,
                      token: res.data.token,
                      picture: res.data.picture,
                    })
                  );
                  localStorage.setItem("islogged", true);
                  dispatch(logged());
                  dispatch(setUserId(res.data.userId));
                  dispatch(userPicture(res.data.picture));
                  history.push({
                    pathname: `/user/${res.data.userId}/dashboard`,
                    state: { detail: res.data },
                  });
                })
                .catch((err) => console.log(err));
            } else {
              let myData = {
                name: a.name,
                email: a.email,
                google_password: a.id + "front_secret_code",
                picture: a.picture,
                sign_in: "Google",
                password: "",
              };
              axios({
                method: "POST",
                url: "http://localhost:3001/api/users",
                data: myData,
              })
                .then((res) => {
                  localStorage.setItem(
                    "userData",
                    JSON.stringify({
                      userId: res.data.userId,
                      token: res.data.token,
                      picture: res.data.picture,
                    })
                  );
                  localStorage.setItem("islogged", true);

                  dispatch(logged());
                  dispatch(setUserId(res.data.userId));
                  dispatch(userPicture(res.data.picture));
                  history.push({
                    pathname: `user/${res.data.userId}/dashboard`,
                    state: { detail: res.data },
                  });
                })
                .catch((err) => console.log(err));
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setCurEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setCurPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => signInWithUsername(e)}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ marginTop: "-10px", height: "40px" }}
            onClick={(e) => {
              googleSignIn(e);
            }}
          >
            <div style={{ display: "flex", marginTop: "10px" }}>
              <img
                src="https://e7.pngegg.com/pngimages/760/624/png-clipart-google-logo-google-search-advertising-google-company-text.png"
                alt="no img"
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              <p>Continue with google</p>
            </div>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* {pic === "" ? (
        ""
      ) : (
        <div>
          <img src={pic} alt="noiimg"></img>
        </div>
      )} */}

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
