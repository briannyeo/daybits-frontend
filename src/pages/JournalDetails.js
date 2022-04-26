import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import urlcat from "urlcat";
import "./JournalDetails.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Comments from "../components/Comments";
import dayjs from "dayjs";
import "./JournalDetails.css";
import ReactMarkdown from "react-markdown";

const BACKEND = process.env.REACT_APP_BACKEND;

const JournalDetails = () => {
  const { id } = useParams();
  //console.log("id is", id); returns back journal ID

  const [journalDetails, setJournalDetails] = useState([]);
  const [load, setLoad] = useState(false);
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState("");

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  //fetch the journal entry

  useEffect(() => {
    const url = urlcat(BACKEND, `/daybits/journal/${id}`);
    //console.log("url", url);
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((docs) => {
        //console.log(docs);
        setJournalDetails(docs);
        //console.log(journalDetails);
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
    strComment.dateCommented = dayjs().format("DD-MMM-YYYY");
    createComment(strComment);
    setLoad(true);
    //console.log(strComment);
    setComment("");
    alert("comment submitted to the community");
  };

  //retrieving all comments for JournalId
  useEffect(() => {
    const showComment = (comments) => {
      fetch(urlcat(BACKEND, `/daybits/comments/${id}`), {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setAllComments(data);
          setLoad(false);
        })
        .catch((error) => console.log(error));
    };
    //console.log(id);
    showComment(id);
  }, [id, load]);

  //console.log(journalDetails);

  return (
    <div class="journalDetailsContainer">
      <h1>Journal Details</h1>
      <div class="journalDetailsContent">
        <Box
          sx={{
            flexGrow: 1,
            "& .MuiTextField-root": { m: 1, width: "55ch" },
            margin: "1rem",
          }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <Box
            component="div"
            sx={{
              whiteSpace: "normal",
              fontSize: "1.5rem",
              fontWeight: "bold",
              width: "96%",

              margin: "1rem",
              textAlign: "left",
            }}
          >
            {journalDetails.title}
          </Box>
          <div className="journalBody">
            <Box
              component="div"
              sx={{
                fontSize: "1rem",
                fontWeight: "400",
                width: "96%",
                margin: "1rem",
                fontFamily: "Montserrat",
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              <ReactMarkdown>{journalDetails.journalBody}</ReactMarkdown>
            </Box>
          </div>

          <h3 style={{ fontWeight: "bold" }}>Comments</h3>
          <Box
            sx={{
              flexGrow: 1,
              "& .MuiTextField-root": { m: 1, width: "40ch" },
              display: "flex",
              justifyContent: "center",
              fontFamily: "Montserrat",
            }}
            component="form"
            noValidate
            autoComplete="off"
          >
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Enter a comment"
                multiline
                required
                rows={2}
                value={comment}
                onChange={handleChangeComment}
              />
            </Grid>
            <Button
              onClick={handleCommentSubmit}
              variant="contained"
              sx={{ mt: 2.75, mb: 0 }}
              style={{
                fontFamily: "Montserrat",
                backgroundColor: "#FE7965",
                color: "white",
                height: "3rem",
              }}
            >
              Submit
            </Button>
          </Box>

          <div className="commentsComponent">
            {allComments ? (
              <>
                {allComments.map((e, index) => (
                  <Comments
                    key={index}
                    comment={e.comment}
                    author={e.author}
                    dateCommented={e.dateCommented}
                  />
                ))}
              </>
            ) : (
              <div></div>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default JournalDetails;
