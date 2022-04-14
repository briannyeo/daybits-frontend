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
            Daybits - Daily Habits for 30 Days
          </p>
        </div>
      </div>
      <div class="container-fluid">
        <OwlCarousel
          items={1}
          className="owl-theme"
          loop={true}
          nav={true}
          margin={4}
          center={true}
          touchDrag={true}
          mouseDrag={true}
          dots={true}
        >
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
