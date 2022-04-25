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
            <div className="loginWindow">
              <LoginWindow />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="infoContainer">
              <div className="infoHeader">
                <h1>Why Daybits?</h1>
              </div>
              <div className="infoBody">
                Daybits is your companion tool to build or break the habits that
                will truly change your life in meaningful and positive ways.
                <i>
                  <br />
                  <br />
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
                Journal Daily <br /> Stay accountable with the Daybits community
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="infoContainer1">
              <div className="infoHeader1">
                <h1>The Science Behind Daybits</h1>
              </div>
              <div className="infoBody">
                <i>Daybits</i> was designed on the back of the concept -
                Self-directed neuroplasticity. Coined by researcher Dr. Jeffrey
                Schwartz and then popularized by Dr. Rick Hanson, a psychologist
                and senior fellow at UC Berkeley’s Greater Good Science Center
                and author of “Hardwiring Happiness.”, self-directed
                neuroplasticity provides evidence for how people can
                intentionally rewire their brains to create positive habits.
                People do this primarily through active reflection. <br />
                <br />
                The habit loop is reinforced when there is a response and reward
                following the behaviour. <i>Daybits</i> seeks to help people
                change and reinforce new habit loops by making people
                accountable for their behaviour for 30 consecutive days through
                journaling and reflection. The repetition helps to train
                people’s brains to stick with the habits, while the
                encouragement from the <i>Daybits</i> community helps to provide
                the dopamine kick that completes the new habit loop. <br />
                <br />
                <i>Daybits</i> offers a powerful, science-based method to break
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
            <div className="infoContainerLogin">
              <div className="infoHeaderLogin">
                <h1>Why Daybits?</h1>
              </div>
              <div className="infoBody">
                Daybits is your companion tool to build or break the habits that
                will truly change your life in meaningful and positive ways.
                <i>
                  <br />
                  <br />
                  "You’ll never change your life until you change something you
                  do daily. The secret of your success is found in your daily
                  routine."
                </i>
                <br />- John C. Maxwell
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="infoContainerLogin">
              <div className="infoHeaderLogin">
                <h1>About Daybits</h1>
              </div>
              <div className="infoBodyLogin">
                30 days <br />
                Set your Goals <br />
                Journal Daily <br />
                Stay accountable with the Daybits community
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="infoContainer1Login">
              <div className="infoHeader1Login">
                <h1>The Science Behind Daybits</h1>
              </div>
              <div className="infoBody1Login">
                <i>Daybits</i> was designed on the back of the concept -
                Self-directed neuroplasticity. Coined by researcher Dr. Jeffrey
                Schwartz and then popularized by Dr. Rick Hanson, a psychologist
                and senior fellow at UC Berkeley’s Greater Good Science Center
                and author of “Hardwiring Happiness.”, self-directed
                neuroplasticity provides evidence for how people can
                intentionally rewire their brains to create positive habits.
                People do this primarily through active reflection. <br />
                <br />
                The habit loop is reinforced when there is a response and reward
                following the behaviour. <i>Daybits</i> seeks to help people
                change and reinforce new habit loops by making people
                accountable for their behaviour for 30 consecutive days through
                journaling and reflection. The repetition helps to train
                people’s brains to stick with the habits, while the
                encouragement from the <i>Daybits</i> community helps to provide
                the dopamine kick that completes the new habit loop. <br />
                <br />
                <i>Daybits</i> offers a powerful, science-based method to break
                undesirable habits and create new, healthy ones.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
}
