import React from "react";
import { useState } from "react";
import urlcat from "urlcat";
import { Link } from "react-router-dom";
import { format, compareAsc } from "date-fns";
import { addDays } from "date-fns/fp";
import Profile from "./Profile";
import "./Editprofile.css";
import { useNavigate } from "react-router-dom";
import { StayCurrentLandscapeTwoTone } from "@mui/icons-material";

const dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 2015

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/daybits/register/profile");

const Editprofile = () => {
  const [habitstatus, setHabitstatus] = useState("");
  const [habit, setHabit] = useState("");
  const [error, setError] = useState("");
  const [target, setTarget] = useState("");
  const [goal, setGoal] = useState("");
  const [startDate, setStartDate] = useState("");

  console.log(startDate);

  const getStartTime = () => {
    const today = new Date(); //Date() uses local computer time
    //today.setUTCHours(0, 0, 0, 0);
    return today.toDateString();
  };

  const getEndTime = () => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toDateString();
  };

  const createProfile = (profile) => {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const profile = { habitstatus, habit, target, goal, startDate }; //backend
    createProfile(profile); //LINK to backend
    navigate("/daybits/profile");
    console.log(profile);
  };

  return (
    <>
      <h2>Profile</h2>
      <form className="editProfileForm" onSubmit={handleSubmit}>
        I want to
        <select
          id="habit"
          name="habit"
          onChange={(event) => setHabitstatus(event.target.value)}
        >
          <option value="-">Select an option</option>
          <option value="break">Break</option>
          <option value="build">Build</option>
        </select>
        my habit of
        <input
          style={{ textAlign: "center" }}
          type="text"
          name="habit"
          placeholder="e.g., running"
          value={habit}
          onChange={(event) => setHabit(event.target.value)}
        />
        <br />
        <br />
        Target frequency / duration:
        <input
          style={{ textAlign: "center" }}
          type="text"
          name="target"
          placeholder=" e.g., 30 minutes a day"
          required
          value={target}
          onChange={(event) => setTarget(event.target.value)}
        />
        <br />
        <br />
        Long-term goal:
        <input
          style={{ textAlign: "center" }}
          type="text"
          name="goal"
          placeholder=" e.g., run a marathon"
          required
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
        />
        <p>{error}</p>
        <br />
        <br />I commit to changing my behavior for 30 days starting from:
        <button onClick={() => setStartDate(dayjs().format("YYYY-MM-DD"))}>
          <span style={{ color: "red" }}>{`START:  ${getStartTime()}`}</span> to
          <br />
          <span style={{ color: "red" }}>{`END:  ${getEndTime()}`}</span>
        </button>
        <br />
      </form>
    </>
  );
};

export default Editprofile;
