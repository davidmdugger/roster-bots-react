import React from "react";
import { Link } from "react-router-dom";

import "./Landing.css";
import viewRoster from "../../images/view-edit-roster.svg";
import newRoster from "../../images/new-roster.svg";

const Landing = () => {
  return (
    <div id="landing">
      <div id="main">
        <div id="main-content">
          <h1 className="title">Roster Bots</h1>
        </div>
      </div>
      <div id="menu">
        <div className="roster-layout new-roster">
          <h3>Create Team</h3>
          <Link to="team">
            <img src={newRoster} alt="roster view or edit" />
          </Link>
        </div>
        <div className="roster-layout current-roster">
          <h3>View/Edit Roster</h3>
          <Link to="roster">
            <img src={viewRoster} alt="roster view or edit" />
          </Link>
        </div>
        <div className="roster-layout rules">
          <h3>Rules</h3>
          <p>Rosters contain:</p>
          <ul>
            <li>10 starters</li>
            <li>5 subs</li>
            <li>Unique players</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
