import React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import urlcat from "urlcat";
import { useAtom } from "jotai";
import { loginAtom } from "../App";
import "./LoginWindow.css";
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Rammetto+One&display=swap"
  rel="stylesheet"
></link>;

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Daybits
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const rammetto = createTheme({
  typography: {
    fontFamily: ["Rammetto One", "sans-serif"].join(","),
  },
});

const montserrat = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

export default function LoginWindow() {
  const BACKEND = process.env.REACT_APP_BACKEND;
  const url = urlcat(BACKEND, "/daybits/register/home");
  const logoutUrl = urlcat(BACKEND, "/daybits/register/logout");

  const [errorMessages, setErrorMessages] = useState({});
  const [user, setUser] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  const [login, setLogin] = useAtom(loginAtom);

  let navigate = useNavigate();

  const checkUser = (userInfo) => {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setLogin(true); //check that the cookie.user exists? should be on index page
          alert("Login successful. Welcome to Daybits!");
          navigate("/daybits/profile");
        } else {
          alert("Login failed. Please try again or register as a new user");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = { username, password };
    console.log("submit button clicked");
    checkUser(userInfo); //LINK to backend
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <>
      <ThemeProvider theme={montserrat}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }} style={{ backgroundColor: "#52793C" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              style={{ fontFamily: "Rammetto One, cursive" }}
              component="h1"
              variant="h5"
            >
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                color="warning"
                autoFocus
                onChange={(event) => setUsername(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="warning"
                onChange={(event) => setPassword(event.target.value)}
                className="changeFont"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#FE7965" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    style={{ color: "#81665A" }}
                    href="/daybits/register"
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
                <Grid item>
                  {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
