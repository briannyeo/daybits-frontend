import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./journal.css";

import TextField from "@mui/material/TextField";

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
  const [dailygoal, setDailygoal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const journalEntry = { title, body }; //backend
    console.log(journalEntry);
    //createHoliday(holiday); LINK to backend
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
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

        <TextField
          id="outlined-multiline-static"
          label="Journal Entry"
          multiline
          rows={20}
          value={body}
          onChange={handleChangeBody}
        />
      </Box>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Journal;
