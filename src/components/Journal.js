import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import "./journal.css";

const Journal = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [dailygoal, setDailygoal] = useState("");

  console.log("title", title);
  console.log("body", body);
  const handleSubmit = (event) => {
    event.preventDefault();
    const journalEntry = { title, body };

    console.log(journalEntry);
    //createHoliday(holiday); LINK to backend
  };

  const checkWidth = () => {};

  return (
    <>
      <h1 class="fs-title">Create a new journal entry</h1>
      <form id="msform" onSubmit={handleSubmit}>
        Journal Title:
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        Write your journal entry for today here:
        <input
          style={{ height: "50ch" }}
          type="text"
          name="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <p>{error}</p>
        <br />
        <button>Create</button>
      </form>
    </>
  );
};

export default Journal;
