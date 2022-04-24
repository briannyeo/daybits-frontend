import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { Button } from "@mui/material";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const UserRow = (props) => {
  const { arrTitle, arrUser, arrJournalBody, arrJournalId, handleDelete } =
    props;

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
            <TableCell align="center">{arrUser}</TableCell>
            <TableCell
              id="journalTitleRow"
              align="center"
              onClick={() => navigate(`/daybits/journal/${arrJournalId[i]}`)}
              style={{}}
            >
              {arrTitle[i]}
            </TableCell>
            <TableCell align="center">
              <Button
                onClick={handleDelete(arrJournalId[i])}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  fontFamily: "Montserrat",
                  backgroundColor: "#FE7965",
                  color: "white",
                }}
              >
                Delete
              </Button>
            </TableCell>
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

export default UserRow;
