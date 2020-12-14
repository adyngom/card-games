import React, { Fragment } from "react";
import "./flip-card.css";

export const FlipCard = ({ type, children }) => {
  return (
    <Fragment>
      <div className="flip-container">
        <div className="card flipper" data-type={type}>
          <div className="front">front</div>
          <div className="back">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};
