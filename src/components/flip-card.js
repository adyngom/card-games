import React, { Fragment } from "react";
import "./flip-card.css";

export const FlipCard = ({ type, children }) => {
  const bgStyle = {
    backgroundImage: `url("/memory/images/${type}.png")`,
    backgroundSize: "80%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  const frontStyle = {
    ...bgStyle,
    backgroundImage: `url("/memory/images/cardinal-games.png")`,
  };

  return (
    <Fragment>
      <div className="flip-container">
        <div className="card flipper" data-type={type}>
          <div className="front" style={frontStyle}></div>
          <div className="back" style={bgStyle}></div>
        </div>
      </div>
    </Fragment>
  );
};
