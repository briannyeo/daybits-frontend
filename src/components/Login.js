import React from "react";
import { useState, useEffect } from "react";

import "./login.css";
import { Link, useNavigate } from "react-router-dom";

import urlcat from "urlcat";
import { useAtom } from "jotai";
import { loginAtom } from "../App";

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/daybits/register/home");
const logoutUrl = urlcat(BACKEND, "/daybits/register/logout");

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [user, setUser] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  const [login, setLogin] = useAtom(loginAtom);

  //PASS DATA TO THE BACKEND THROUGH REQ.BODY

  let navigate = useNavigate();

  const checkUser = (userInfo) => {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setLogin(true); //check that the cookie.user exists? should be on index page
          alert("Login successful. Welcome to Daybits!");
          navigate("/daybits/profile");
        } else {
          alert("Login failed. Please try again or register as a new user");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = { username, password };
    checkUser(userInfo); //LINK to backend
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        <div className="button-container">
          <Link to="/daybits/register">
            <button
              style={{ margin: "10px" }}
              type="button"
              className="btn btn-info"
            >
              New User? Click here
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
