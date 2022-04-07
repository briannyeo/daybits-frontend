import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import "./owl.css";
import Login from "./Login";

const Owldemo1 = () => {
  return (
    <div>
      <div class="container-fluid">
        <div className="row title" style={{ marginBottom: "5px" }}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "large",
              backgroundColor: "whitesmoke",
              padding: "100",
            }}
          >
            Daybits - Form or Break a Habit in 30 Days
          </p>
        </div>
      </div>
      <div class="container-fluid">
        <OwlCarousel items={3} className="owl-theme" loop nav margin={7}>
          <div>
            <img
              className="img"
              src="https://img.freepik.com/free-vector/flower-seamless-pattern-aesthetic-background-design-vector_53876-144691.jpg?w=996&t=st=1649229615~exp=1649230215~hmac=eeb07924f4ffd9e23ecaafd89c39f186e3cb4559260e4dd78e0f4ee05b1d567e"
              alt="abstract"
            />
          </div>
          <Login />
          <div>
            <img
              className="img"
              src="https://img.freepik.com/free-vector/cute-colorful-memphis-hand-drawn-pattern-wallpaper_53876-115682.jpg?w=996"
              alt="party"
            />
          </div>
          <div>
            <img
              className="img"
              src="https://img.freepik.com/free-vector/night-sky-seamless-pattern-weather-doodle-background-kids_53876-117385.jpg?w=996"
              alt="child"
            />
          </div>
          <div>
            <img
              className="img"
              src="https://img.freepik.com/free-vector/funky-doodle-pattern-rainbow-background-vector_53876-143302.jpg?w=996"
              alt="rainbows"
            />
          </div>
          <div>
            <img
              className="img"
              src="https://img.freepik.com/free-vector/cute-celebration-background-cute-grid-pattern-with-colorful-bokeh-vector_53876-146719.jpg?w=996"
              alt="graph"
            />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Owldemo1;
