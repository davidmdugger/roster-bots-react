import React from "react";
import "./TeamNameForm.css";

const TeamNameForm = props => {
  const { teamName, onChange, teamNameHandler } = props;

  return (
    <form className="team-name-form" onSubmit={teamNameHandler}>
      <input
        name="teamName"
        type="text"
        placeholder="Your Team Name"
        onChange={onChange}
        value={teamName}
      />
      <small>Team Name</small>
      <input type="submit" value="Submit Team Name" />
    </form>
  );
};

export default TeamNameForm;
