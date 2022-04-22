import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./JournalRow.css";

const JournalRow = (props) => {
  const { arrTitle, arrUser, arrJournalBody, arrJournalId, handleDelete } =
    props;

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
            <TableCell align="center">{arrUser[i]}</TableCell>
            <TableCell
              id="journalTitleRow"
              align="center"
              onClick={() => navigate(`/daybits/journal/${arrJournalId[i]}`)}
              style={{}}
            >
              {arrTitle[i]}
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
