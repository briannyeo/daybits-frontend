import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Comments.css";

export default function Comments(props) {
  const { comment, author, dateCommented } = props;

  return (
    <Card
      sx={{
        maxWidth: "100%",
        maxHeight: 200,
        backgroundColor: "#fffaf3",
        boxShadow: "none",
        margin: "0.5rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 12,
            fontFamily: "Montserrat",
            textAlign: "justify",
            textJustify: "interword",
          }}
          color="#927569"
          gutterBottom
        >
          By: {author}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            fontFamily: "Montserrat",
            textAlign: "justify",
            textJustify: "interword",
          }}
          color="#927569"
          variant="subtitle1"
        >
          Date: {dateCommented}
        </Typography>
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
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
