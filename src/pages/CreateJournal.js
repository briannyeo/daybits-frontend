import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import "./journal.css";

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
  const [journalBody, setJournalBody] = useState("");
  const [error, setError] = useState("");
  const [dailyGoalAchived, setDailyGoalAchived] = useState(true);
  const [createdAt, setCreatedAt] = useState("");

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
        console.log("paginated post", data);
      })
      .catch((error) => console.log(error));
  };

  const getStartTime = () => {
    const today = new Date(); //Date() uses local computer time
    //today.setUTCHours(0, 0, 0, 0);
    return today.toDateString();
  };

  // const getEndTime = () => {
  //   const d = new Date();
  //   d.setDate(d.getDate() + 30);
  //   return d.toDateString();
  // };

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const journalEntry = { title, journalBody, dailyGoalAchived, createdAt }; //backend
    createJournal(journalEntry); //LINK to backend;
    alert("journal entry submitted to the community");
    navigate("/daybits/community");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeBody = (event) => {
    setJournalBody(event.target.value);
    setCreatedAt(getStartTime()); //setting time journal was written
  };

  return (
    <div>
      <h1>Create a Journal Entry</h1>
      <Box
        sx={{ flexGrow: 1 }}
        component="form"
        // sx={{
        //   "& .MuiTextField-root": { m: 1, width: "25ch" },
        // }}
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
            value={journalBody}
            onChange={handleChangeBody}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={dailyGoalAchived}
                onChange={(e) => setDailyGoalAchived(e.target.checked)}
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
