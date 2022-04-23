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
import "./createJournal.css";
import Button from "@mui/material/Button";

<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Rammetto+One&display=swap"
  rel="stylesheet"
></link>;

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/daybits/journal");

const Journal = () => {
  const [title, setTitle] = useState("");
  const [journalBody, setJournalBody] = useState("");
  const [error, setError] = useState("");
  const [dailyGoalAchieved, setDailyGoalAchieved] = useState(true);
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
    const journalEntry = { title, journalBody, dailyGoalAchieved, createdAt }; //backend
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
  const CHARACTER_LIMIT = 100;

  return (
    <div className="journalEntryContainer">
      <h1>Create a Journal Entry</h1>
      <div className="journalEntryContent">
        <Box
          sx={{
            flexGrow: 1,
            "& .MuiTextField-root": { m: 1, width: "55ch" },
          }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={1}></Grid>
          <Grid item xs={12}>
            <TextField
              InputProps={{ style: { fontFamily: "Montserrat" } }}
              inputProps={{
                maxlength: CHARACTER_LIMIT,
              }}
              helperText={`${title.length}/${CHARACTER_LIMIT}`}
              id="outlined-multiline-flexible"
              label="Journal Title"
              multiline
              maxRows={4}
              value={title}
              onChange={handleChangeTitle}
              color="warning"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              InputProps={{ style: { fontFamily: "Montserrat" } }}
              id="outlined-multiline-static"
              label="Journal Entry"
              multiline
              required
              rows={15}
              value={journalBody}
              onChange={handleChangeBody}
              color="warning"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={dailyGoalAchieved}
                  onChange={(e) => setDailyGoalAchieved(e.target.checked)}
                  style={{
                    color: "#BAAB57",
                  }}
                />
              }
              label="I completed my daily goal today"
            />
          </Grid>
        </Box>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{
            fontFamily: "Montserrat",
            backgroundColor: "#FE7965",
            color: "white",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Journal;
