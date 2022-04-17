import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Journal.css";

import urlcat from "urlcat";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel } from "@mui/material";
const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/daybits/journal");

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Journal = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [dailygoal, setDailygoal] = useState(true);

  const createJournal = (journalEntry) => {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(journalEntry),
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
    const journalEntry = { title, body, dailygoal }; //backend
    console.log(journalEntry);
    createJournal(journalEntry); //LINK to backend
    alert("journal entry submitted to the community");
    //window.location.reload();
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  return (
    <div>
      <h1>Create a Journal Entry</h1>
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
            label="Journal Title"
            multiline
            maxRows={4}
            value={title}
            onChange={handleChangeTitle}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Journal Entry"
            multiline
            required
            rows={20}
            value={body}
            onChange={handleChangeBody}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={dailygoal}
                onChange={(e) => setDailygoal(e.target.checked)}
              />
            }
            label="I completed my daily goal today"
          />
        </Grid>
      </Box>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Journal;
