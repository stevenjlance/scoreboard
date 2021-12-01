import React from "react";
import Player from "./components/player";
import "./App.css";

const findWinner = (a, b) => {
  if (a > b) {
    return "Player A is Winning";
  } else if (b > a) {
    return "Player B is Winning";
  }
  return "It's a tie";
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerAScore: 0,
      playerBScore: 0,
      winningScore: 0,
      winner: "A"
    };
  }

  leader = (a, b) => {
    if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    } else {
      return a;
    }
  };

  reset = () => {
    this.setState({
      playerAScore: 0,
      playerBScore: 0,
      winningScore: -1
    });
  };

  handlePlayerAUpClick = () => {
    this.setState((state) => {
      state.playerAScore += 1;
      return state;
    });
  };

  handlePlayerADownClick = () => {
    this.setState((state) => {
      state.playerAScore -= 1;
      return state;
    });
  };

  handlePlayerBUpClick = () => {
    this.setState((state) => {
      state.playerBScore += 1;
      return state;
    });
  };

  handlePlayerBDownClick = () => {
    this.setState((state) => {
      state.playerBScore -= 1;
      return state;
    });
  };
  // Reset the screen
  reset = () => {
    this.setState({
      playerAScore: 0,
      playerBScore: 0,
      winningScore: 0,
      winner: "Player A"
    });
  };

  render() {
    return (
      <div className="App">
        <div className="banner">SCOREBOARD</div>
        <h1 className="Winner">
          {findWinner(this.state.playerAScore, this.state.playerBScore)}!
        </h1>
        <h3>
          The winner has{" "}
          {this.leader(this.state.playerAScore, this.state.playerBScore)} points
        </h3>
        <div className="Players">
          <Player
            id={0}
            name={"A"}
            score={this.state.playerAScore}
            upClickHandler={this.handlePlayerAUpClick}
            downClickHandler={this.handlePlayerADownClick}
          />
          <Player
            id={1}
            name={"B"}
            score={this.state.playerBScore}
            upClickHandler={this.handlePlayerBUpClick}
            downClickHandler={this.handlePlayerBDownClick}
          />
        </div>
        <button className="ResetButton" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
