import Carousel from "react-bootstrap/Carousel";

import { useAtom } from "jotai";
import { loginAtom } from "../App";
import { useState } from "react";
import LoginWindow from "./LoginWindow";

const DaybitCarousel = () => {
  const [login, setLogin] = useAtom(loginAtom);
  return (
    <>
      {login ? (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-75 h-75"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block h-75 w-75"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : (
        <Carousel>
          <Carousel.Item>
            <LoginWindow />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block h-75 w-75"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
};

export default DaybitCarousel;
