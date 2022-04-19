import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import JournalModal from "./JournalModal";
import { useState } from "react";

const JournalRow = (props) => {
  const { arrTitle, arrUser, arrJournalBody, arrJournalId, handleDelete } =
    props;

  const [show, setShow] = useState(false);

  console.log(arrTitle); //--Correct
  //   console.log(arrUser);
  console.log(arrJournalBody); //--correct
  //   console.log(arrJournalId);

  let tableCells = [];

  const createTableCells = () => {
    for (let i = 0; i < arrJournalBody.length; i++) {
      tableCells.push(
        <>
          <TableRow key={arrJournalId[i]}>
            <TableCell align="center">{arrUser[i]}</TableCell>
            <TableCell align="center" onClick={() => setShow(true)}>
              {arrTitle[i]}
            </TableCell>
            <TableCell align="center">{arrJournalBody[i]}</TableCell>
            <TableCell align="center">LIKES TBC</TableCell>
            <TableCell align="center">COMMENTS TBC</TableCell>
            <TableCell align="center">
              <button onClick={handleDelete(arrJournalId[i])}>Delete</button>
            </TableCell>
          </TableRow>
          <JournalModal
            arrTitle={arrTitle[i]}
            arrUser={arrUser[i]}
            arrJournalBody={arrJournalBody[i]}
            arrJournalId={arrJournalId[i]}
            show={show}
            onHide={() => setShow(false)}
          />
        </>
      );
    }
  };
  createTableCells();

  return <TableBody>{tableCells}</TableBody>;
};

export default JournalRow;
