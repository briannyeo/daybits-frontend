import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import urlcat from "urlcat";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Rammetto+One&display=swap"
  rel="stylesheet"
></link>;

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/daybits/register");

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmpw, setConfirmpw] = useState("");

  const rammetto = createTheme({
    typography: {
      fontFamily: ["Rammetto One", "sans-serif"].join(","),
    },
  });

  const handleChangeusername = (event) => {
    setUsername(event.target.value);
  };

  // const handleChangepassword = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleChangeconfirmpw = (event) => {
  //   setConfirmpw(event.target.value);
  // };

  const createUser = (userInfo) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  let navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (password === confirmpw) {
  //     const userInfo = { username, password }; //backend
  //     console.log(userInfo);
  //     createUser(userInfo); //LINK to backend
  //     alert("new account created - proceed to sign in");
  //     navigate("/daybits/home");
  //   } else {
  //     alert("passwords do not match");
  //   }
  // };
  const handleSubmit = (event) => {
    event.preventDefault();

    const userInfo = { username, password }; //backend
    console.log(userInfo);
    createUser(userInfo); //LINK to backend
    alert("new account created - proceed to sign in");
    navigate("/daybits/home");
  };

  //DO NOT DELETE - original text field password
  // <TextField
  //   id="outlined-multiline-static"
  //   label="Password"
  //   multiline
  //   maxRows={4}
  //   value={password}
  //   onChange={handleChangepassword}
  // />;

  // <Grid item xs={12}>
  //   <TextField
  //     id="outlined-multiline-static"
  //     label="Confirm Password"
  //     multiline
  //     maxRows={4}
  //     value={confirmpw}
  //     onChange={handleChangeconfirmpw}
  //   />
  // </Grid>;

  //FIRST PASSWORD
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Typography
        style={{ fontFamily: "Rammetto One, cursive" }}
        component="h1"
        variant="h5"
      >
        Create an Account
      </Typography>
      <Box
        sx={{ flexGrow: 1, "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={1}></Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-flexible"
            label="Username"
            multiline
            maxRows={4}
            value={username}
            onChange={handleChangeusername}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
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
          </FormControl>
        </Grid>
      </Box>
    </div>
  );
};

export default Registration;
