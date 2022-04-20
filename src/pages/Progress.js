import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import urlcat from "urlcat";
//const dayjs = require("dayjs");
import dayjs from "dayjs"; // ES 2015

const BACKEND = process.env.REACT_APP_BACKEND;

const Progress = () => {
  const [profile, setProfile] = useState([]);
  const [countSuccess, setCountSuccess] = useState(0);
  const [countFail, setCountFail] = useState(0);
  const [daysLeft, setDaysLeft] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  //fetch all user + journal data

  useEffect(() => {
    const showProfile = (profile) => {
      fetch(urlcat(BACKEND, "/daybits/register/progress"), {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      })
        .then((response) => response.json())
        .then((data) => {
          setProfile(data);
        })
        .catch((error) => setError(error));
    };
    showProfile();
  }, []);

  // const getEndTime = () => {
  //   const d = new Date();
  //   d.setDate(d.getDate() + 30);
  //   return d.toDateString();
  // };

  const endDate = dayjs(profile.startDate).add(30, "day").format("DD-MMM-YYYY");

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/daybits/journal");
  };

  const createArrProgress = (profile) => {
    console.log("profile", profile);
    console.log(profile.habit);
    console.log(profile.journals.length);

    let count = 0;
    let counter = 0;

    for (let i = 0; i < profile.journals.length; i++) {
      //No. of days succeeded = counting number of days the 'daily goal achieved' was true

      // console.log("JOURNAL NUMBER", profile.journals[i].title);
      // console.log("JOURNAL NUMBER", profile.journals[i].dailyGoalAchieved);

      if (profile.journals[i].dailyGoalAchieved === true) {
        count += 1;
        console.log("count of TRUE", count);
        setCountSuccess(count);
        // console.log("CountSuccess in state", countSuccess);
      }
      //No. of days missed = counting number of days missed (if journal was written but daily goal achieved was false)
      if (
        profile.journals[i].title &&
        profile.journals[i].dailyGoalAchieved === false
      ) {
        counter += 1;
        console.log("counter of FALSE", counter);
        setCountFail(counter);
        // console.log("CountFail in state", countFail);
      }

      //X days closer to goal - current date minus start date
      const dateProgress = Date.parse(dayjs().format("DD-MMM-YYYY"));
      console.log("dateProgress", dateProgress);

      const dateStarted = Date.parse(
        dayjs(profile.startDate).format("DD-MMM-YYYY")
      );
      console.log("dateStarted", dateStarted);

      const daysRemaining = Math.floor((dateProgress - dateStarted) / 86400000);
      console.log("days remaining", daysRemaining);
      setDaysLeft(daysRemaining);
    }

    return 0;
  };

  const handleTest = () => {
    createArrProgress(profile);
    setLoad(true);
  };

  return (
    <div>
      {load ? (
        <div>
          <h2 style={{ marginTop: "20px" }}>My Progress</h2>
          <br></br>
          <br></br>
          <br></br>
          <h3>
            No. of days succeeded:{" "}
            <span style={{ color: "green" }}>{countSuccess}</span>
          </h3>{" "}
          <br></br>
          <h3>
            No. of days missed:{" "}
            <span style={{ color: "red" }}>{countFail}</span>
          </h3>
          <br></br>
          <h3>
            You are <span style={{ color: "blue" }}>{daysLeft}</span> days
            closer to{" "}
            <span style={{ color: "blue" }}>{profile.habitstatus}ing</span> your{" "}
            <span style={{ color: "blue" }}>{profile.habit}</span>
          </h3>
          <br></br>
          <h3>
            Your challenge ends on:{" "}
            <span style={{ color: "blue" }}>{endDate}</span>
          </h3>
          <br></br>
          <button style={{ fontSize: "150%" }} onClick={handleClick}>
            Write in your journal today!
          </button>
        </div>
      ) : (
        <div>
          <h2 style={{ marginTop: "20px" }}>My Progress</h2>
          <br></br>
          <button onClick={handleTest} style={{ fontSize: "150%" }}>
            Click to refresh your Progress for Today!
          </button>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default Progress;
