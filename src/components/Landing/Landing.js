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
        <div className="roster-layout current-roster">
          <h4>Designed and developed</h4>
          <h5>by David Dugger</h5>
          <a
            href="https://github.com/davidmdugger/roster-bots-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={newRoster} alt="roster view or edit" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
