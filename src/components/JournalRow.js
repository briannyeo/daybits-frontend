import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const JournalRow = (props) => {
  const { arrTitle, arrUser, arrJournalBody, arrJournalId, handleDelete } =
    props;

  console.log(arrTitle);
  console.log(arrUser);
  console.log(arrJournalBody);
  console.log(arrJournalId);

  let tableCells = [];

  const createTableCells = () => {
    for (let i = 0; i < arrJournalBody.length; i++) {
      tableCells.push(
        <TableRow key={arrJournalId[i]}>
          <TableCell align="center">{arrUser[i]}</TableCell>
          <TableCell align="center">{arrTitle[i]}</TableCell>
          <TableCell align="center">{arrJournalBody[i]}</TableCell>
          <TableCell align="center">LIKES TBC</TableCell>
          <TableCell align="center">COMMENTS TBC</TableCell>
          <TableCell align="center">
            <button onClick={handleDelete(arrJournalId[i])}>Delete</button>
          </TableCell>
        </TableRow>
      );
    }
  };
  createTableCells();

  return <TableBody>{tableCells}</TableBody>;
};

export default JournalRow;
