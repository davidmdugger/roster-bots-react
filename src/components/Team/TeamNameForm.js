import React from "react";

const TeamNameForm = props => {
  return (
    <form onSubmit={props.teamNameHandler}>
      <input
        name="teamName"
        type="text"
        placeholder="Your Team Name"
        onChange={props.onChange}
        value={props.teamName}
      />
      <input type="submit" value="Create Team Name" />
    </form>
  );
};

export default TeamNameForm;
