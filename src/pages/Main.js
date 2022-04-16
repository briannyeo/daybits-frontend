import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import Journal from "./Journal";
import Planner from "./Planner";
import Profile from "./Profile";
import Progress from "./Progress";
import Registration from "./Registration";
import Editprofile from "./Editprofile";
import Comjournal from "./Comjournal";
import NoPageFound from "./NoPageFound";
import App from "../App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//<Outlet context={[profilecompiled, setProfilecompiled]} />

const Main = () => {
  const [profilecompiled, setProfilecompiled] = useState([]);
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/daybits" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="journal" element={<Journal />} />
          <Route path="planner" element={<Planner />} />
          <Route path="profile" element={<Profile />} />
          <Route path="progress" element={<Progress />} />
          <Route path="register" element={<Registration />} />
          <Route path="editprofile" element={<Editprofile />} />
          <Route path="community" element={<Comjournal />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Main;
