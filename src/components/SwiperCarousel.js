import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import LoginWindow from "./LoginWindow";
import "./SwiperCarousel.css";
import { useAtom } from "jotai";
import { loginAtom } from "../App";

export default function App() {
  const [login, setLogin] = useAtom(loginAtom);

  return (
    <>
      {!login ? (
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          style={{ padding: "5rem" }}
          grabCursor={true}
        >
          <SwiperSlide>
            <LoginWindow />
          </SwiperSlide>
          <SwiperSlide>
            <div className="infoContainer">
              <div className="infoHeader">
                <h1>Why Daybits?</h1>
              </div>
              <div className="infoBody">
                Daybits is your companion tool to build or break the habits that
                will truly change your life in meaningful and positive ways.
              </div>
              <div className="infoBody2">
                <i>
                  "You’ll never change your life until you change something you
                  do daily. The secret of your success is found in your daily
                  routine."
                </i>
                <br />- John C. Maxwell
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="infoContainer">
              <div className="infoHeader">
                <h1>About Daybits</h1>
              </div>
              <div className="infoBody">
                30 days <br />
                Set your Goals <br />
                Journal Daily <br />
                Stay accountable with the Daybits
                <br />
                community
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="infoContainer1">
              <div className="infoHeader1">
                <h1>The Science behind Daybits</h1>
              </div>
              <div className="infoBody">
                Daybits was designed on the back of the concept - Self-directed
                neuroplasticity. Coined by researcher Dr. Jeffrey Schwartz and
                then popularized by Dr. Rick Hanson, a psychologist and senior
                fellow at UC Berkeley’s Greater Good Science Center and author
                of “Hardwiring Happiness.”, self-directed neuroplasticity
                provides evidence for how people can intentionally rewire their
                brains to create positive habits. People do this primarily
                through active reflection. <br />
                The habit loop is reinforced when there is a response and reward
                following the behaviour. Daybits seeks to help people change and
                reinforce new habit loops by making people accountable for their
                behaviour for 30 consecutive days through journaling and
                reflection. The repetition helps to train people’s brains to
                stick with the habits, while the encouragement from the daybits
                community helps to provide the dopamine kick that completes the
                new habit loop. <br />
                <br />
                Daybits offers a powerful, science-based method to break
                undesirable habits and create new, healthy ones.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          style={{ padding: "5rem" }}
          grabCursor={true}
        >
          <SwiperSlide>
            <div className="infoContainer">
              <div className="infoHeader">
                <h1>Why Daybits?</h1>
              </div>
              <div className="infoBody">
                Daybits is your companion tool to build or break the habits that
                will truly change your life in meaningful and positive ways.
              </div>
              <div className="infoBody2">
                <i>
                  "You’ll never change your life until you change something you
                  do daily. The secret of your success is found in your daily
                  routine."
                </i>
                <br />- John C. Maxwell
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="infoContainer">
              <div className="infoHeader">
                <h1>About Daybits</h1>
              </div>
              <div className="infoBody">
                30 days <br />
                Set your Goals <br />
                Journal Daily <br />
                Stay accountable with the Daybits
                <br />
                community
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="infoContainer1">
              <div className="infoHeader1">
                <h1>The Science behind Daybits</h1>
              </div>
              <div className="infoBody">
                Daybits was designed on the back of the concept - Self-directed
                neuroplasticity. Coined by researcher Dr. Jeffrey Schwartz and
                then popularized by Dr. Rick Hanson, a psychologist and senior
                fellow at UC Berkeley’s Greater Good Science Center and author
                of “Hardwiring Happiness.”, self-directed neuroplasticity
                provides evidence for how people can intentionally rewire their
                brains to create positive habits. People do this primarily
                through active reflection. <br />
                The habit loop is reinforced when there is a response and reward
                following the behaviour. Daybits seeks to help people change and
                reinforce new habit loops by making people accountable for their
                behaviour for 30 consecutive days through journaling and
                reflection. The repetition helps to train people’s brains to
                stick with the habits, while the encouragement from the daybits
                community helps to provide the dopamine kick that completes the
                new habit loop. <br />
                <br />
                Daybits offers a powerful, science-based method to break
                undesirable habits and create new, healthy ones.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
}
