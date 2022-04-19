import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import urlcat from "urlcat";

const BACKEND = process.env.REACT_APP_BACKEND;

const Progress = () => {
  const [profile, setProfile] = useState([]);
  const [load, setLoad] = useState(false);

  const [error, setError] = useState("");

  //fetch all user + journal data

  useEffect(() => {
    const showProfile = (profile) => {
      fetch(urlcat(BACKEND, "/daybits/register/progress"), {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      })
        .then((response) => response.json())
        .then((data) => {
          setProfile(data);
        })
        .catch((error) => setError(error));
    };
    showProfile();
  }, []);

  const getStartTime = () => {
    const today = new Date(); //Date() uses local computer time
    //today.setUTCHours(0, 0, 0, 0);
    return today.toDateString();
  };

  const getEndTime = () => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toDateString();
  };

  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/daybits/journal");
  };

  let goalAchieved = []; //count days succeeded (days missed = 30 minusgoalAchieved)
  let arrCreatedAt = []; //X days away from habit --> 30 minus createdAt
  let arrHabitStatus = []; //break or build
  let arrHabit = [];
  console.log(profile);
  console.log(profile.habit);
  console.log(profile.journals[0]);
  const createArrProfile = (profile) => {
    //console.log("first journal", profile.journals[0].title);
    //console.log("habit", profile.habit);
    // for (let i = 0; i < journallist.length; i++) {
    //   for (let x = 0; x < journallist[i].journals.length; x++) {
    //     arrTitle.push(journallist[i].journals[x].title);
    //     arrJournalBody.push(journallist[i].journals[x].journalBody);
    //     arrUser.push(journallist[i].username);
    //     arrJournalId.push(journallist[i].journals[x]._id);
    //   }
    // }
    return;
  };

  createArrProfile(profile);
  // console.log("arrTitle", arrTitle);
  // console.log("arrJournalBody", arrJournalBody);
  // console.log("arrUser", arrUser);

  let tableCells = [];

  // const createTableCells = () => {
  //   for (let i = 0; i < arrJournalBody.length; i++) {
  //     tableCells.push(
  //       <TableRow key={arrJournalId[i]}>
  //         <TableCell align="center">{arrUser[i]}</TableCell>
  //         <TableCell align="center">{arrTitle[i]}</TableCell>
  //         <TableCell align="center">{arrJournalBody[i]}</TableCell>
  //         <TableCell align="center">LIKES TBC</TableCell>
  //         <TableCell align="center">COMMENTS TBC</TableCell>
  //         <TableCell align="center">
  //           <button onClick={handleDelete(arrJournalId[i])}>Delete</button>
  //         </TableCell>
  //       </TableRow>
  //     );
  //   }
  // };

  // createTableCells();

  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>My Progress</h2>
      <br></br>
      <h4>No. of days sycceeded:</h4> <br></br>
      <h4>No. of days missed:</h4>
      <br></br>
      <h4>You are X days closer to your GOAL</h4>
      <br></br>
      <button onClick={handleClick}>Write in your journal today!</button>
    </div>
  );
};

export default Progress;
