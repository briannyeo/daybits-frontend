import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";

const Plannercard = (props) => {
  const { journalNowTitle, journalNowBody } = props;

  //   let combined = []
  //   for (let i = 0; i < journalNowTitle; i++) {
  //       combined.push()
  //   }

  //return <p>YES</p>;

  let itemList = journalNowTitle.map((e, index) => {
    return (
      <div className="cardEach">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{journalNowTitle[index]}</Card.Title>
            <Card.Text>{journalNowBody[index]}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return <>{itemList}</>;
};

export default Plannercard;
