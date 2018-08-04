import React from "react";
import "./NotFound.css";

import notFoundImage from "../../images/robot-not-found.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFoundImage} alt="robot says your request wasn't found" />
    </div>
  );
};

export default NotFound;
