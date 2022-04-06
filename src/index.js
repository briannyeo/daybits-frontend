import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Home from "./components/Home";
import Journal from "./components/Journal";
import Planner from "./components/Planner";
import Profile from "./components/Profile";
import Progress from "./components/Progress";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/daybits" element={<App />}>
        <Route path="/daybits/home" element={<Home />} />
        <Route path="journal" element={<Journal />} />
        <Route path="planner" element={<Planner />} />
        <Route path="profile" element={<Profile />} />
        <Route path="progress" element={<Progress />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
