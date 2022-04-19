import React from "react";
import { useEffect, useState } from "react";
import urlcat from "urlcat";
import Table from "@mui/material/Table";

import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import JournalRow from "../components/JournalRow";

import "./Comjournal.css";

const BACKEND = process.env.REACT_APP_BACKEND;

const Comjournal = () => {
  const [journallist, setJournallist] = useState([]);
  const [load, setLoad] = useState(false);

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
          setJournallist(data);
          setLoad(true);
        })
        .catch((error) => console.log(error));
    };
    showJournal();
  }, [load]);

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
        arrJournalId.filter((entry) => {
          return entry._id !== id;
        });
        setLoad(false);
      });
  };

  let arrTitle = [];
  let arrUser = [];
  let arrJournalBody = [];
  let arrJournalId = [];

  console.log(arrTitle);

  //to add to respective arrays
  const createArr = (journallist) => {
    for (let i = 0; i < journallist.length; i++) {
      for (let x = 0; x < journallist[i].journals.length; x++) {
        arrTitle.push(journallist[i].journals[x].title);
        arrJournalBody.push(journallist[i].journals[x].journalBody);
        arrUser.push(journallist[i].username);
        arrJournalId.push(journallist[i].journals[x]._id);
      }
    }
    return;
  };
  createArr(journallist);

  // const journalArray = [];
  // journalArray.push(arrTitle);
  // journalArray.push(arrUser);
  // journalArray.push(arrJournalBody);
  // journalArray.push(arrJournalId);

  // console.log(journalArray);
  // const journalArray1 = {};

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
          <JournalRow
            arrTitle={arrTitle}
            arrUser={arrUser}
            arrJournalBody={arrJournalBody}
            arrJournalId={arrJournalId}
            handleDelete={handleDelete}
          />
          {/* <TableBody>{tableCells}</TableBody> */}
        </Table>
      </TableContainer>
    </>
  );
};

export default Comjournal;
