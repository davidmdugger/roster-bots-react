import React from "react";

const TeamNameForm = props => {
  const { teamName, onChange, teamNameHandler } = props;

  return (
    <form onSubmit={teamNameHandler}>
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
