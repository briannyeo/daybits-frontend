import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./JournalRow.css";
import tick from "../images/accept.png";
import cross from "../images/cancel.png";

const JournalRow = (props) => {
  const {
    arrTitle,
    arrUser,
    arrJournalBody,
    arrJournalId,
    handleDelete,
    arrJournalDate,
    arrAchievedGoal,
  } = props;

  //const [show, setShow] = useState(false);

  //console.log(arrTitle); //--Correct
  //   console.log(arrUser);
  // console.log(arrJournalBody); //--correct
  //   console.log(arrJournalId);

  const [journalUrl, setJournalUrl] = useState("");

  //   const handleClick = () => {
  //     Navigate(`/daybits/journal/${journalUrl}`);
  //   };
  const navigate = useNavigate();

  let tableCells = [];
  //   console.log(tableCells);

  const createTableCells = () => {
    for (let i = 0; i < arrJournalBody.length; i++) {
      tableCells.push(
        <>
          <TableRow key={arrJournalId[i]}>
            <TableCell
              onClick={() => navigate(`/daybits/user/${arrUser[i]}`)}
              align="center"
            >
              {arrUser[i]}
            </TableCell>
            <TableCell
              id="journalTitleRow"
              align="center"
              onClick={() => navigate(`/daybits/journal/${arrJournalId[i]}`)}
              style={{}}
            >
              {arrTitle[i]}
            </TableCell>
            <TableCell align="center">{arrJournalDate[i]}</TableCell>
            <TableCell align="center">
              {arrAchievedGoal[i] ? (
                <img
                  style={{ maxWidth: "1rem", maxHeight: "1rem" }}
                  src={tick}
                  alt="tick"
                />
              ) : (
                <img
                  src={cross}
                  style={{ maxWidth: "1rem", maxHeight: "1rem" }}
                  alt="cross"
                />
              )}
            </TableCell>
            {/* <TableCell align="center">
              <button onClick={handleDelete(arrJournalId[i])}>Delete</button>
            </TableCell> */}
          </TableRow>
          {/* <JournalModal
            arrTitle={arrTitle[i]}
            arrUser={arrUser[i]}
            arrJournalBody={arrJournalBody[i]}
            arrJournalId={arrJournalId[i]}
            show={show}
            onHide={() => setShow(false)}
          /> */}
        </>
      );
    }
  };
  createTableCells();

  return <TableBody>{tableCells}</TableBody>;
};

export default JournalRow;
