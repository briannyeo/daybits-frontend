import { setDate } from "date-fns";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css";
//import "./Planner.css";
import urlcat from "urlcat";
import dayjs from "dayjs"; // ES 2015

const BACKEND = process.env.REACT_APP_BACKEND;

const Planner = () => {
  //const [date, setDate] = useState([]);
  const [planner, setPlanner] = useState([]);
  const [load, setLoad] = useState(false);

  //const date = [];
  const rangeStart = dayjs(planner.startDate).format("YYYYMMDD");
  const rangeStartYear = parseInt(rangeStart.slice(0, 4), 10);
  const rangeStartMonth = parseInt(rangeStart.slice(4, 6), 10);
  const rangeStartDate = parseInt(rangeStart.slice(6, 8), 10);

  console.log("rangeStart", rangeStart);
  console.log(rangeStartYear);
  console.log(rangeStartMonth);
  console.log(rangeStartDate);

  const rangeEnd = dayjs(planner.startDate).add(30, "day").format("YYYYMMDD");

  const rangeEndYear = parseInt(rangeEnd.slice(0, 4), 10);
  const rangeEndMonth = parseInt(rangeEnd.slice(4, 6), 10);
  const rangeEndDate = parseInt(rangeEnd.slice(6, 8), 10);

  console.log("rangeEnd", rangeEnd);
  console.log(rangeEndYear);
  console.log(rangeEndMonth);
  console.log(rangeEndDate);

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
    console.log("checksuccess", dateSuccess);

    // const onChange = date => {
    //   setDate(date)
    // }
  };

  const onClick = () => {
    //hi can print
    console.log("hi");
  };
  if (load) {
    checkSuccess();
  }
  //const markSuccess = ["24-04-2022", "25-04-2022", "26-04-2022"];

  return (
    <>
      <div className="calendar-container"></div>{" "}
      <div>
        {date.length > 0 ? (
          <p className="text-center">
            <span className="bold">Start:</span> {date[0].toDateString()}
            &nbsp;|&nbsp;
            <span className="bold">End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p className="text-center">
            <span className="bold">Default selected date:</span>{" "}
            {date.toDateString()}
          </p>
        )}
      </div>
      <Calendar
        //onChange={setDate}
        selectRange={true}
        defaultValue={date}
        tileClassName={({ date, view }) => {
          if (dateSuccess.find((x) => x === dayjs(date).format("DD-MM-YYYY"))) {
            return "highlightSuccess";
          }
        }}
        onClick={onClick()}
      />
      <p>
        Legend:<br></br>
        Purple dates: The date range you have committed to changing your habit
        <br></br>
        Green highlighted dates: Dates you succeeded!
      </p>
    </>
  );
};

export default Planner;
