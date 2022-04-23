import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Comments.css";

export default function Comments(props) {
  const { comment, author, dateCommented } = props;

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {author}
        </Typography>
        <Typography variant="body2">{comment}</Typography>
        <Typography variant="subtitle1">Date:{dateCommented}</Typography>
      </CardContent>
    </Card>
  );
}
