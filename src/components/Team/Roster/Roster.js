import React, { Component } from "react";
import {
  generateRandomInt,
  generateID,
  firstNames,
  lastNames
} from "../../../helper";

class Roster extends Component {
  // create random player
  generatePlayer = () => {
    const rosterCopy = this.props.roster;

    // if roster length maxed alert user
    if (rosterCopy.length >= 15) {
      alert("Roster cannot be more than 15 players");
    } else {
      const newPlayer = {
        id: generateID(),
        firstName: firstNames[generateRandomInt(0, 30)],
        lastName: lastNames[generateRandomInt(0, 30)],
        totalAttrScore: generateRandomInt(20, 100)
      };

      // check if first name already exists
      for (let i = 0; i < rosterCopy.length; i++) {
        if (rosterCopy[i].firstName === newPlayer.firstName) {
          // generate a new first name until it's unique
          while (rosterCopy[i].firstName === newPlayer.firstName) {
            newPlayer.firstName = firstNames[generateRandomInt(0, 30)];
          }
        }
      }

      // check if last name already exists
      for (let i = 0; i < rosterCopy.length; i++) {
        if (rosterCopy[i].lastName === newPlayer.lastName) {
          // generate a new last name until it's unique
          while (rosterCopy[i].lastName === newPlayer.lastName) {
            newPlayer.lastName = lastNames[generateRandomInt(0, 30)];
          }
        }
      }

      // check if totalAttrScore already exists
      for (let i = 0; i < rosterCopy.length; i++) {
        if (rosterCopy[i].totalAttrScore === newPlayer.totalAttrScore) {
          // generate a new last name until it's unique
          while (rosterCopy[i].totalAttrScore === newPlayer.totalAttrScore) {
            newPlayer.totalAttrScore = generateRandomInt(20, 100);
          }
        }
      }

      // maximum to use for generating speed, strength, agility max value
      let maximum;

      // set speed to the value of a random int between 20 and the totalAttrScore
      maximum = newPlayer.totalAttrScore; // speed can't be higher than out totalAttrScore
      newPlayer.speed = generateRandomInt(20, maximum);

      maximum = newPlayer.totalAttrScore - newPlayer.speed; // strength can't be higher than our total minus speed
      // generate random number between 0 and our new limit
      newPlayer.strength = generateRandomInt(0, maximum);

      // set agility to the the left over value after speed and strength are generated
      newPlayer.agility =
        newPlayer.totalAttrScore - (newPlayer.speed + newPlayer.strength);

      rosterCopy.push(newPlayer);

      this.setState({ roster: rosterCopy });
    }
  };

  generateFullRoster = () => {
    const { roster } = this.props;

    // as long as roster isn't full, generate a new player
    while (roster.length < 15) {
      this.generatePlayer();
    }
  };

  deletePlayerHandler = idx => {
    console.log("Clicked");
    let rosterCopy = this.props.roster;
    console.log(idx);
    rosterCopy.splice(idx, 1);

    this.setState({ roster: rosterCopy });
  };

  render() {
    const { roster, showForm } = this.props;
    const rosterLength = roster.length;

    console.log(roster);

    // if the TeamNameForm is shown, hide the roster
    const showOrHide = showForm ? "hide" : "show";

    // if roster is already 15 players, disable generate roster buttons
    const disabled = rosterLength === 15 ? "disable" : "";

    //
    const renderDisabledMsg = disabled ? (
      <p>
        <small>Cannot generate players when roster is full</small>
      </p>
    ) : null;

    const renderRoster =
      // if roster is empty, tell user
      rosterLength === 0 ? (
        <tr>
          <td>You Don't have any players</td>
        </tr>
      ) : (
        roster.map((player, idx) => {
          return (
            <tr key={player.id}>
              <td>
                {player.firstName} {player.lastName}
              </td>
              <td>{player.speed}</td>
              <td>{player.strength}</td>
              <td>{player.agility}</td>
              <td>{player.totalAttrScore}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => this.deletePlayerHandler(idx)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })
      );

    return (
      <div>
        <div className="generate-players-buttons">
          {renderDisabledMsg}
          <button disabled={disabled} onClick={this.generatePlayer}>
            Generate Random Player
          </button>
          <button disabled={disabled} onClick={this.generateFullRoster}>
            Create Entire Roster
          </button>
        </div>
        <table className={showOrHide}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Speed</th>
              <th>Strength</th>
              <th>Agility</th>
              <th>Total</th>
              <th />
            </tr>
            {renderRoster}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Roster;