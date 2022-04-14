import React from "react";
import { useState, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import urlcat from "urlcat";

const BACKEND = process.env.REACT_APP_BACKEND;
const url = urlcat(BACKEND, "/daybits/register/home");
const logoutUrl = urlcat(BACKEND, "/daybits/register/logout");

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [userData, setUserData] = useState({});
  const [userInputData, setUserInputData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});

  //PASS DATA TO THE BACKEND THROUGH REQ.BODY

  const checkUser = (userInfo) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessages(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = { username, password };
    checkUser(userInfo); //LINK to backend
  };

  const handleLogout = (event) => {
    event.preventDefault();
    fetch(url, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessages(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  // Find user login info
  // useEffect(() => {
  //   fetch(urlcat(BACKEND, "/user"))
  //     .then((response) => response.json())
  //     .then((data) => setUserData(data));
  // }, [userInputData]);

  // Compare user info
  //   if (userInputData) {
  //     if (userInputData.password !== userData.password) {
  //       // Invalid password
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };

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
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  // User Login info - CHANGE TO LINK TO DATABASE
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  //CODE FOR BACKEND - to create user accounts
  // const createHoliday = (holiday) => {
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(holiday),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data.error) {
  //         setError(data.error);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        <div className="button-container">
          <Link to="/daybits/register">
            <button type="button" className="btn btn-info">
              New User? Click here
            </button>
          </Link>
          <button type="button" className="btn btn-info" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
