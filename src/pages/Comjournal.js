import React from "react";
import { useEffect, useState } from "react";
import urlcat from "urlcat";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Link, useNavigate } from "react-router-dom";

import "./Comjournal.css";
import JournalModal from "../components/JournalModal";

const BACKEND = process.env.REACT_APP_BACKEND;

const Comjournal = () => {
  const [journallist, setJournallist] = useState([]);
  const [community, setCommunity] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  //fetch all journal entries

  useEffect(() => {
    const showJournal = (journalEntry) => {
      fetch(urlcat(BACKEND, "/daybits/journal"), {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(journalEntry),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("GET", data);
          setJournallist(data);
        })
        .catch((error) => console.log(error));
    };
    showJournal();
  }, []);

  //fetch communitydata - comments and likes
  //STUCK HERE - likes needs to read from communityschema, not sure how to link to journaltitle (in userdata schema)
  // useEffect(() => {
  //   fetch(urlcat(BACKEND, "/daybits/journal/community"))
  //     .then((response) => response.json())
  //     .then((data) => setCommunity(data));
  // }, []);

  //code for Likes update in backend
  // const handleUpdate = (entry) => () => {
  //   const url = urlcat(BACKEND, `/daybits/journal/${entry._id}`);
  //   const newEntry = { ...journallist, likes: entry.likes + 1 }; //adds 1

  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newEntry),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setJournallist(data));
  // };

  const handleDelete = (id) => () => {
    const url = urlcat(BACKEND, `/daybits/journal/${id}`);
    fetch(url, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        alert("post deleted");
      })
      .then(() => {
        setJournallist(
          journallist.filter((entry) => {
            return entry._id !== id;
          })
        );
      });
  };

  //User in list not reading (something to do with populate
  //<JournalModal show={show} onHide={() => setShow(false)} />

  return (
    <>
      <TableContainer component={Paper} style={{ margin: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Posted by</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Body</TableCell>
              <TableCell align="center">Likes</TableCell>
              <TableCell align="center">Comments</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {journallist.map((entry) => (
              <TableRow
                key={entry._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  USER - TBC
                </TableCell>
                <TableCell onClick={() => setShow(true)} align="center">
                  {entry.title}{" "}
                </TableCell>
                <TableCell align="center">{entry.journalBody}</TableCell>
                <TableCell align="center">
                  <button>Like</button> <br></br>
                  LIKES COUNTER - TBC
                </TableCell>
                <TableCell align="center">COMMENTS - TBC</TableCell>
                <TableCell align="center">
                  <button onClick={handleDelete(entry._id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <JournalModal show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default Comjournal;
