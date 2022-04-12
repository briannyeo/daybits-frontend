import React from "react";
import { useState } from "react";
import urlcat from "urlcat";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Profile from "./Profile";

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/daybits/profile");

const Editprofile = () => {
  const [habitstatus, setHabitstatus] = useState("");
  const [habit, setHabit] = useState("");
  const [error, setError] = useState("");
  const [target, setTarget] = useState("");
  const [goal, setGoal] = useState("");
  const [profilecompiled, setProfilecompiled] = useOutletContext();

  const createProfile = (profile) => {
    fetch(url, {
      method: "POST",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const profile = { habitstatus, habit, target, goal }; //backend
    console.log("profile", profile);
    setProfilecompiled(profile); //setting the state
    console.log("compiled profile", profilecompiled);
    createProfile(profile); //LINK to backend
  };

  return (
    <>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        I want to
        <input
          style={{ textAlign: "center" }}
          type="text"
          name="habitStatus"
          placeholder=" break / build"
          required
          value={habitstatus}
          onChange={(event) => setHabitstatus(event.target.value)}
        />
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
        <button>Save</button>
        <br />
        <Link to="/daybits/profile">
          <button>Return to Profile</button>
        </Link>
      </form>
    </>
  );
};

export default Editprofile;
