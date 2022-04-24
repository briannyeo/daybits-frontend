import Carousel from "react-bootstrap/Carousel";
import { useAtom } from "jotai";
import { loginAtom } from "../App";
import LoginWindow from "./LoginWindow";
import "./Carousel.css";

const DaybitCarousel = () => {
  const [login, setLogin] = useAtom(loginAtom);
  return (
    <>
      {login ? (
        <Carousel variant="dark" style={{ marginTop: "5rem" }}>
          <Carousel.Item>
            <div className="daybitFacts">
              <h1>Why Daybits?</h1>
            </div>
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
        <Carousel keyboard="true ">
          <Carousel.Item>
            <LoginWindow />
          </Carousel.Item>
          <Carousel.Item>
            <div className="daybitFacts">
              <h1>Why Daybits?</h1>
            </div>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
};

export default DaybitCarousel;
