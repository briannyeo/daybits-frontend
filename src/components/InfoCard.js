import "./InfoCard.css";

const InfoCard = (props) => {
  <div className="infoContainer">
    <div className="infoHeader">
      <h1>{props.header}</h1>
    </div>
    <div className="infoBody"></div>
    {props.body}
  </div>;
};

export default InfoCard;
