import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="nav-item">
        <Link to="/daybits/home">Home</Link>
        <Link to="/daybits/journal">Journal</Link>
        <Link to="/daybits/planner">Planner</Link>
        <Link to="/daybits/profile">Profile</Link>
        <Link to="/daybits/progress">Progress</Link>
      </div>
    </div>
  );
};

export default Header;
