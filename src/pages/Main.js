import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import Journal from "./CreateJournal";
import Planner from "./Planner";
import Profile from "./Profile";
import Progress from "./Progress";
import Registration from "./Registration";
import Editprofile from "./Editprofile";
import Comjournal from "./Comjournal";
import NoPageFound from "./NoPageFound";
import App from "../App";
import { useAtom } from "jotai";
import { loginAtom } from "../App";
import { Routes, Route } from "react-router-dom";
import JournalDetails from "./JournalDetails";
import Account from "./Account";

const Protected = ({ children }) => {
  const [login, _] = useAtom(loginAtom);
  if (login) {
    return children;
  } else {
    return <NoPageFound />;
  }
};
const Main = () => {
  const [profilecompiled, setProfilecompiled] = useState([]);

  return (
    <div>
      {" "}
      <Routes>
        <Route path="/daybits" element={<Outlet />}>
          <Route path="home" element={<Home />} />
          <Route
            path="journal"
            element={
              <Protected>
                <Journal />
              </Protected>
            }
          />
          <Route path="planner" element={<Planner />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="progress"
            element={
              <Protected>
                <Progress />
              </Protected>
            }
          />
          <Route path="register" element={<Registration />} />
          <Route
            path="editprofile"
            element={
              <Protected>
                <Editprofile />
              </Protected>
            }
          />
          <Route
            path="journal/:id"
            element={
              <Protected>
                <JournalDetails />
              </Protected>
            }
          />
          <Route
            path="community"
            element={
              <Protected>
                <Comjournal />
              </Protected>
            }
          />
          <Route
            path="account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default Main;
