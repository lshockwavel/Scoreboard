let homeScore = 0;
let awayScore = 0;


/* NOTE Creating enum-like values for teams to be used in  */
const Teams = {
  HOME: "home",
  AWAY: "evil",
  DEFAULT: "unknown"
}


function resetScore() {
  homeScore = awayScore = 0;
  updateScore();
}


function increaseScore(increaseValue, Team) {
  if (Team == Teams.HOME) {
    /* UpdateScore for Home */
    homeScore += increaseValue;

    // keep it at 0 if the score is less than 0
    if (homeScore < 0) { homeScore = 0 }

    updateScore(Team);
  }
  else {
    /* Update score for Away */
    awayScore += increaseValue;

    // keep it at 0 if the score is less than 0
    if (awayScore < 0) { awayScore = 0 }

    updateScore(Team);
  }
}

function updateScore(team = Teams.DEFAULT) {
  const homeScoreElement = document.getElementById("home");
  const awayScoreElement = document.getElementById("away");

  /* NOTE depending on the calls, it will only update on what it needs to. */
  switch (team) {
    case Teams.HOME:
      homeScoreElement.innerText = homeScore.toString();
      break;
    case Teams.AWAY:
      awayScoreElement.innerText = awayScore.toString();
      break;
    default:
      homeScoreElement.innerText = homeScore.toString();
      awayScoreElement.innerText = awayScore.toString();
      break;
  }

  //check scores. If there's a winner Show message and reset game
  if (homeScore > 9) {
    window.alert('Congrats Home Team for Winning!!! Click OK to play again');
    resetScore();
  }
  else if (awayScore > 9) {
    window.alert('Congrats Home Team, you let us all down. Try again with feeling this time');
    resetScore();
  }
}