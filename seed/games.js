const db = require("../db/connections")
const Game = require("../models/game")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const games = [
    {
      dataset: "MLB 2020 Regular Season",
      gameId: "44097-MIA@ATL-1",
      date: "2020-09-23",
      inning: "1B",
      roadTeam: "Miami Marlins",
      homeTeam: "Atlanta Braves",
      roadScore: 0,
      homeScore: 0,
      batter: "Miguel Rojas",
      batterHand: "R",
      runnerOn1bInd: "-",
      runnerOn2bInd: "-",
      runnerOn3bInd: "-",
      pitcher: "Max Fried",
      pitcherHand: "L",
      balls: 0,
      strikes: 2,
      hitType: "FLY BALL",
      playType: "FLYOUT",
      runs: 0,
      outs: 1,
      description: "Miguel Rojas flied out to  LF",
      startOuts: 0,
      startingRE: 0.5313,
      endingRE: 0.2868,
      home_team_win_pct: 0.5336,
    },
  ]

  await Game.insertMany(games)
  console.log("Created games!")
}
const run = async () => {
  await main()
  db.close()
}

run()
