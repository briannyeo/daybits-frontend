import React, { Profiler } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import urlcat from "urlcat";
import "./Profile.css";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

const Profile = (props) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const BACKEND = process.env.REACT_APP_BACKEND;

  //fetch all profile entries
  useEffect(() => {
    fetch(urlcat(BACKEND, "/daybits/register/profile"))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfile(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Link to="/daybits/editprofile">
        <button>Edit</button>
      </Link>
      {loading ? (
        <p>loading</p>
      ) : (
        <h3 style={{ marginTop: "30px" }}>
          I want to
          <span style={{ color: "green", fontStyle: "italic" }}>
            &nbsp; {profile[0].habitstatus} &nbsp;
          </span>
          my habit of
          <span style={{ color: "green", fontStyle: "italic" }}>
            &nbsp; {profile[0].habit} &nbsp;
          </span>
          <br />
          <br />
          Target duration / frequency:
          <span style={{ color: "green", fontStyle: "italic" }}>
            &nbsp;{profile[0].target} &nbsp;
          </span>
          <br />
          <br />
          My goal is to
          <span style={{ color: "green", fontStyle: "italic" }}>
            &nbsp;{profile[0].goal} &nbsp;
          </span>
        </h3>
      )}
    </div>
  );
};

export default Profile;
