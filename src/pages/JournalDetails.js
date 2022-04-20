import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import urlcat from "urlcat";
import "./JournalDetails.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const BACKEND = process.env.REACT_APP_BACKEND;

const JournalDetails = () => {
  const { id } = useParams();
  console.log("id is", id);

  const [journalDetails, setJournalDetails] = useState([]);
  const [load, setLoad] = useState(false);
  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState("");

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  //fetch the journal entry

  useEffect(() => {
    const url = urlcat(BACKEND, `/daybits/journal/${id}`);
    console.log("url", url);
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((docs) => {
        console.log(docs);
        setJournalDetails(docs);
        console.log(journalDetails);
      })
      .catch((error) => console.log(error));
  }, []);

  //For creating a comment
  const createComment = (comment) => {
    const url = urlcat(BACKEND, `/daybits/comments`);
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("comment", data);
      })
      .catch((error) => console.log(error));
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const strComment = { comment };
    strComment.journalId = id;
    createComment(strComment);
    console.log(strComment);
    alert("comment submitted to the community");
  };

  //retrieving all comments
  // useEffect(() => {
  //   const showComment = (commentEntry) => {
  //     fetch(urlcat(BACKEND, "/daybits/comment"), {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(journalEntry),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setJournallist(data);
  //         setLoad(true);
  //       })
  //       .catch((error) => console.log(error));
  //   };
  //   showJournal();
  // }, [load]);

  return (
    <div className="journalContainer">
      <h1>This is a journal entry page</h1>
      <div className="journalTitle">{journalDetails.title}</div>
      <div className="journalBody">{journalDetails.journalBody}</div>
      <Box
        sx={{ flexGrow: 1 }}
        component="form"
        // sx={{
        //   "& .MuiTextField-root": { m: 1, width: "25ch" },
        // }}
        noValidate
        autoComplete="off"
      >
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Enter a comment"
            multiline
            required
            rows={20}
            value={comment}
            onChange={handleChangeComment}
          />
        </Grid>
      </Box>
      <button onClick={handleCommentSubmit}>Submit</button>
    </div>
  );
};

export default JournalDetails;
