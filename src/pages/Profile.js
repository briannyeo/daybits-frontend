import React from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Profile = (props) => {
  const [profilecompiled, setProfilecompiled] = useOutletContext();
  console.log("from profile", profilecompiled);
  return (
    <div>
      <h3 style={{ marginTop: "30px" }}>
        I want to{" "}
        <span style={{ color: "green", fontStyle: "italic" }}>
          {profilecompiled.habitstatus}
        </span>{" "}
        my habit of{" "}
        <span style={{ color: "green", fontStyle: "italic" }}>
          {profilecompiled.habit}
        </span>
        <br />
        <br />
        Target duration / frequency:{" "}
        <span style={{ color: "green", fontStyle: "italic" }}>
          {profilecompiled.target}
        </span>
        <br />
        <br />
        My goal is to{" "}
        <span style={{ color: "green", fontStyle: "italic" }}>
          {profilecompiled.goal}
        </span>
      </h3>
      <Link to="/daybits/editprofile">
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default Profile;
