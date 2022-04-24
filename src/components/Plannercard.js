import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Plannercard = (props) => {
  const { journalNowTitle, journalNowBody } = props;

  let itemList = journalNowTitle.map((e, index) => {
    return (
      // <div className="cardEach">
      //   <Card style={{ width: "18rem" }}>
      //     <Card.Body>
      //       <Card.Title>{journalNowTitle[index]}</Card.Title>
      //       <Card.Text>{journalNowBody[index]}</Card.Text>
      //     </Card.Body>
      //   </Card>
      // </div>
      <Card
        sx={{
          maxWidth: "100%",
          maxHeight: 200,
          backgroundColor: "#fffaf3",
          boxShadow: "none",
          margin: "0.5rem",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: "1rem",
              fontFamily: "Montserrat",
              marginTop: "1rem",
              textAlign: "justify",
              textJustify: "interword",
            }}
            variant="body2"
          >
            {journalNowTitle[index]}
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return <>{itemList}</>;
};

export default Plannercard;
