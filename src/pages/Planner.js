import { setDate } from "date-fns";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css";
//import "./Planner.css";
import urlcat from "urlcat";
import dayjs from "dayjs"; // ES 2015
import Plannercard from "../components/Plannercard";
import Progress from "./Progress";

const BACKEND = process.env.REACT_APP_BACKEND;

const Planner = () => {
  const [planner, setPlanner] = useState([]);
  const [load, setLoad] = useState(false);
  const [dateNow, setDateNow] = useState(new Date());

  //const date = [];
  const rangeStart = dayjs(planner.startDate).format("YYYYMMDD");
  const rangeStartYear = parseInt(rangeStart.slice(0, 4), 10);
  const rangeStartMonth = parseInt(rangeStart.slice(4, 6), 10);
  const rangeStartDate = parseInt(rangeStart.slice(6, 8), 10);

  // console.log("rangeStart", rangeStart);
  // console.log(rangeStartYear);
  // console.log(rangeStartMonth);
  // console.log(rangeStartDate);

  const rangeEnd = dayjs(planner.startDate).add(30, "day").format("YYYYMMDD");

  const rangeEndYear = parseInt(rangeEnd.slice(0, 4), 10);
  const rangeEndMonth = parseInt(rangeEnd.slice(4, 6), 10);
  const rangeEndDate = parseInt(rangeEnd.slice(6, 8), 10);

  // console.log("rangeEnd", rangeEnd);
  // console.log(rangeEndYear);
  // console.log(rangeEndMonth);
  // console.log(rangeEndDate);

  //MYDATE
  const [date, setDate] = useState([
    new Date(rangeStartYear, rangeStartMonth - 1, rangeStartDate - 1),
    new Date(rangeEndYear, rangeEndMonth - 1, rangeEndDate - 1),
  ]);

  //SAMPLE DATE
  // const [date, setDate] = useState([
  //   new Date(2021, 6, 1), //2021 July 1
  //   new Date(2021, 6, 10), //2021 July 10
  // ]);

  console.log("setDate", date);

  //Retrieve startdate from user
  useEffect(() => {
    const showPlanner = (planner) => {
      fetch(urlcat(BACKEND, "/daybits/register/planner"), {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(planner),
      })
        .then((response) => response.json())
        .then((data) => {
          setPlanner(data);
          setLoad(true);
        })
        .catch((error) => console.log(error));
    };
    showPlanner();
  }, []);
  console.log("show Planner", planner);
  let dateSuccess = [];

  const checkSuccess = () => {
    for (let i = 0; i < planner.journals.length; i++) {
      if (planner.journals[i].dailyGoalAchieved === true) {
        dateSuccess.push(
          dayjs(planner.journals[i].createdAt).format("DD-MM-YYYY")
        );
      }
    }
    //console.log("checksuccess", dateSuccess);
  };

  // console.log("datenow", dayjs(dateNow).format("DD-MMM-YYYY"));
  // console.log(
  //   "datejournalcreeatedAt",
  //   dayjs(planner.journals[0].createdAt).format("DD-MMM-YYYY")
  // );

  const journalNowTitle = [];
  const journalNowBody = [];

  const grabJournal = () => {
    //loop through all journal created at. find dateNOw === journalcreatedAt
    for (let i = 0; i < planner.journals.length; i++) {
      if (
        dayjs(dateNow).format("DD-MMM-YYYY") ===
        dayjs(planner.journals[i].createdAt).format("DD-MMM-YYYY")
      ) {
        console.log("yes");
        console.log(planner.journals[i].title);
        console.log(planner.journals[i].body);
        journalNowTitle.push(planner.journals[i].title);
        journalNowBody.push(planner.journals[i].journalBody);
      }
    }
    //push into array
    //map into modal with journal title and body
  };

  if (load) {
    checkSuccess();
    grabJournal();
    console.log("journalNowTitle", journalNowTitle);
    console.log("journalNowBody", journalNowBody);
  }
  //const markSuccess = ["24-04-2022", "25-04-2022", "26-04-2022"];

  //<Plannercard journalNowTitle={journalNowTitle} />;

  //DONT REMOVE - optional wording on top of calendar
  // <div>
  //   {date.length > 0 ? (
  //     <p className="text-center">
  //       <span className="bold">Start:</span> {date[0].toDateString()}
  //       &nbsp;|&nbsp;
  //       <span className="bold">End:</span> {date[1].toDateString()}
  //     </p>
  //   ) : (
  //     <p className="text-center">
  //       <span className="bold">Default selected date:</span>{" "}
  //       {date.toDateString()}
  //     </p>
  //   )}
  // </div>;
  return (
    <>
      <br></br>
      <br></br>
      <div className="plannerContainer">
        <div className="calendar-container">
          <Calendar
            onChange={setDateNow}
            selectRange={false}
            value={date}
            tileClassName={({ date }) => {
              if (
                dateSuccess.find((x) => x === dayjs(date).format("DD-MM-YYYY"))
              ) {
                return "highlightSuccess";
              }
            }}
          />
        </div>

        <p
          style={{
            textAlign: "left",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <br></br>
          <br></br>
          Legend:<br></br>
          <span style={{ color: "purple" }}>Purple dates</span>: 30-days habit
          change
          <br></br>
          <span style={{ background: "lightseagreen" }}>
            Green highlighted dates
          </span>
          : Dates you succeeded!
        </p>
        <p style={{ textAlign: "left", color: "white" }}>
          Click on the dates to see journal entries for that day
        </p>
        {journalNowTitle.length > 0 ? (
          <div className="card">
            <Plannercard
              journalNowTitle={journalNowTitle}
              journalNowBody={journalNowBody}
            />
          </div>
        ) : (
          <p style={{ textAlign: "left", color: "white" }}>
            No Journal Entries on selected date
          </p>
        )}
      </div>
      <div className="progress">
        <Progress />
      </div>
    </>
  );
};

export default Planner;
