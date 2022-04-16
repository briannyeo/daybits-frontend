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
import Editprofile from "./pages/Editprofile";
import Comjournal from "./pages/Comjournal";
import NoPageFound from "./pages/NoPageFound";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
