import React, { Component } from "react";

// components
import TeamNameForm from "./TeamNameForm/TeamNameForm";
import Roster from "./Roster/Roster";

// styling
import "./Team.css";

class Team extends Component {
  state = {
    teamName: "",
    showForm: true,
    teamNameError: "",
    roster: []
  };

  // monitor input value change
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit
  teamNameHandler = e => {
    e.preventDefault();

    if (this.state.teamName === "") {
      this.setState({ teamNameError: " cannot be empty" });
    } else {
      this.setState({
        teamName: this.state.teamName,
        teamNameError: ""
      });

      // after teamName is updated, hide form
      this.formToggle();
    }
  };

  // show or hide form
  formToggle = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  onEditSubmit = (first, last, id) => {
    let rosterCopy = this.state.roster.map(player => {
      return player;
    });

    this.setState({ roster: rosterCopy });
    console.log("rosterCopy: ", rosterCopy);
  };

  render() {
    const { teamName, showForm, roster, teamNameError } = this.state;

    // team name error
    const teamNameErrorRender =
      teamNameError.length > 0 ? <span>{teamNameError}</span> : null;

    // show string "Team" or show Team name if Team name exists
    const teamNameRender = teamName.length < 1 ? "Team" : teamName;

    // if this.state.showForm is true, render the form, else render a button user can click to show the form
    const showFormRender = showForm ? (
      <TeamNameForm
        teamName={teamName}
        onChange={this.onChange}
        teamNameHandler={this.teamNameHandler}
        teamNameErrorRender={teamNameErrorRender}
      />
    ) : (
      <div>
        <button className="update-team-btn" onClick={this.formToggle}>
          Update Team Name
        </button>
      </div>
    );

    return (
      <div className="team-container">
        <div className="content">
          <h1>{teamNameRender} Roster</h1>
          <p>
            Create Your Roster{" "}
            <small>(must have team name to create roster)</small>
          </p>
        </div>

        {showFormRender}

        <Roster
          onChange={this.onChange}
          showForm={showForm}
          roster={roster}
          teamName={teamName}
          onEditSubmit={this.onEditSubmit}
        />
      </div>
    );
  }
}

export default Team;
