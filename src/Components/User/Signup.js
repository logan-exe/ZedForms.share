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
import axios from "axios";
import { logged, setUserId, userPicture } from "../../actions";
import firebase from "firebase";
import { auth } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [curPass, setCurPass] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [curEmail, setCurEmail] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();

  const signUp = (e) => {
    e.preventDefault();

    let myData = {
      name: fname + " " + lname,
      email: curEmail,
      password: curPass,
      picture:
        "https://cdn.dribbble.com/users/2645532/screenshots/10865833/media/a8ce752ebaa96c73ee7b47ffab6069f2.jpg?compress=1&resize=1600x1200",
      sign_in: "Manual",
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
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setCurEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setCurPass(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => signUp(e)}
          >
            Sign Up
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ marginTop: "-10px", height: "40px" }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="https://ipullrank.com/wp-content/uploads/2020/07/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"
                alt="no img"
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              Continue with google
            </div>
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
