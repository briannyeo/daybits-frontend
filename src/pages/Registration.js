import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import urlcat from "urlcat";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/daybits/register");

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmpw, setConfirmpw] = useState("");

  const handleChangeusername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangepassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeconfirmpw = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmpw(event.target.value);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmpw) {
      const userInfo = { username, password }; //backend
      console.log(userInfo);
      createUser(userInfo); //LINK to backend
    } else {
      alert("passwords do not match");
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <Box
        sx={{ flexGrow: 1 }}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
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
          />
        </Grid>

        <TextField
          id="outlined-multiline-static"
          label="Password"
          multiline
          maxRows={4}
          value={password}
          onChange={handleChangepassword}
        />

        <TextField
          id="outlined-multiline-static"
          label="Confirm Password"
          multiline
          maxRows={4}
          value={confirmpw}
          onChange={handleChangeconfirmpw}
        />
      </Box>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Registration;
