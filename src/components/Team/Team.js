import React, { Component } from "react";

// components
import TeamNameForm from "./TeamNameForm";

class Team extends Component {
  state = {
    teamName: "",
    showForm: true
  };

  // monitor input value change
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit
  teamNameHandler = e => {
    e.preventDefault();

    if (this.state.teamName === "") {
      alert("Team Name Required");
    } else {
      this.setState({
        teamName: this.state.teamName
      });

      // after teamName is updated, hide form
      this.formToggle();
    }
  };

  // show Team Name form if true, show button if false
  formToggle = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    const { teamName, showForm } = this.state;

    // show string "Team" or show Team name if Team name exists
    const teamNameRender = teamName.length < 1 ? "Team" : teamName;

    // if this.state.showForm is true, render the form, else render a button user can click to show the form
    const showFormRender = showForm ? (
      <TeamNameForm
        teamName={teamName}
        onChange={this.onChange}
        teamNameHandler={this.teamNameHandler}
      />
    ) : (
      <button onClick={this.formToggle}>Update Team Name</button>
    );

    return (
      <div>
        <h1>{teamNameRender} Roster</h1>
        {showFormRender}
        <h1>Roster Component</h1>
      </div>
    );
  }
}

export default Team;
