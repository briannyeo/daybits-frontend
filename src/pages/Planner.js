import { setDate } from "date-fns";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css";
import "./Planner.css";
import urlcat from "urlcat";
import dayjs from "dayjs"; // ES 2015
import Plannercard from "../components/Plannercard";
import Progress from "./Progress";
import { Filter } from "@mui/icons-material";

const BACKEND = process.env.REACT_APP_BACKEND;
const FAKE_DATE = [new Date(1970, 1, 1), new Date(1970, 1, 1)];

const Planner = () => {
  const [planner, setPlanner] = useState([]);
  const [status, setStatus] = useState("idle");
  const [dateNow, setDateNow] = useState("");
  const [dateJournal, setDateJournal] = useState(new Date());
  //MYDATE
  const [date, setDate] = useState(FAKE_DATE); //FAKE DATE

  //SAMPLE DATE
  // const [date, setDate] = useState([
  //   new Date(2021, 6, 1), //2021 July 1
  //   new Date(2021, 6, 10), //2021 July 10
  // ]);

  //console.log("setDate", date);

  //Retrieve startdate from user
  useEffect(() => {
    //setStatus("loading");
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
          setStatus("success");
        })
        .catch((error) => console.log(error));
    };
    showPlanner();
  }, []);

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

  const journalNowTitle = [];
  const journalNowBody = [];

  const grabJournal = () => {
    //loop through all journal created at. find dateNOw === journalcreatedAt

    console.log("datenow in grabjournal", dayjs(dateNow).format("DD-MMM-YYYY"));
    //console.log("planner in for loop", planner.journals[i].createdAt);
    // console.log(
    //   " plannercreatedAt",
    //   dayjs(planner.journals[i].createdAt).format("DD-MMM-YYYY")
    // );

    for (let i = 0; i < planner.journals.length; i++) {
      //dateNow set ON CHANGE
      if (
        dayjs(dateNow).format("DD-MMM-YYYY") ===
        dayjs(planner.journals[i].createdAt).format("DD-MMM-YYYY")
      ) {
        // console.log("yes");

        console.log(planner.journals[i].title);
        console.log(planner.journals[i].journalBody);
        journalNowTitle.push(planner.journals[i].title);
        journalNowBody.push(planner.journals[i].journalBody);
      }
    }
    //push into array
    //map into modal with journal title and body
  };

  //console.log("date", date);
  if (status === "success" && date[0].getFullYear() === 1970) {
    console.log("show Planner", planner);

    //SETTING RANGE START AND END
    //const date = [];
    const rangeStart = dayjs(planner.startDate).format("YYYYMMDD");
    const rangeStartYear = parseInt(rangeStart.slice(0, 4), 10);
    const rangeStartMonth = parseInt(rangeStart.slice(4, 6), 10);
    const rangeStartDate = parseInt(rangeStart.slice(6, 8), 10);

    console.log("rangeStart", rangeStart);
    // console.log(rangeStartYear);
    // console.log(rangeStartMonth);
    // console.log(rangeStartDate);

    const rangeEnd = dayjs(planner.startDate).add(30, "day").format("YYYYMMDD");

    const rangeEndYear = parseInt(rangeEnd.slice(0, 4), 10);
    const rangeEndMonth = parseInt(rangeEnd.slice(4, 6), 10);
    const rangeEndDate = parseInt(rangeEnd.slice(6, 8), 10);

    setDate([
      new Date(rangeStartYear, rangeStartMonth - 1, rangeStartDate),
      new Date(rangeEndYear, rangeEndMonth - 1, rangeEndDate),
    ]);

    // console.log("rangeEnd", rangeEnd);
    // console.log(rangeEndYear);
    // console.log(rangeEndMonth);
    // console.log(rangeEndDate);

    // console.log("journalNowTitle", journalNowTitle);
    // console.log("journalNowBody", journalNowBody);
  }

  if (dateNow) {
    checkSuccess();
    grabJournal();
  }
  console.log("datenow", dateNow);
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
      <div className="plannerPageContainer">
        <div className="plannerContainer">
          <div className="calendar-container">
            <Calendar
              onClickDay={setDateNow}
              selectRange={false}
              value={date}
              tileClassName={({ date }) => {
                if (
                  dateSuccess.find(
                    (x) => x === dayjs(date).format("DD-MM-YYYY")
                  )
                ) {
                  return "highlightSuccess";
                }
              }}
            />
          </div>

          <div className="legendBox">
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
            <p style={{ textAlign: "left", color: "white" }}>
              Click on the dates to see journal entries for that day
            </p>
          </div>
          <div className="cardsContainer">
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
        </div>
        <div className="progress">
          <Progress />
        </div>
      </div>
    </>
  );
};

export default Planner;
