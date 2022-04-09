import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Planner from "./pages/Planner";
import Profile from "./pages/Profile";
import Progress from "./pages/Progress";
import Registration from "./pages/Registration";

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
        <Route path="register" element={<Registration />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
