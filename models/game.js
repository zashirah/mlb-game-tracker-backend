const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Game = new Schema(
  {
    dataset: { type: String, required: true },
    gameId: { type: String, required: true },
    date: { type: Date, required: true }, 
    inning: { type: String, required: true },
    roadTeam: { type: String, required: true },
    homeTeam: { type: String, required: true },
    roadScore: { type: Number, required: true },
    homeScore: { type: Number, required: true },
    batter: { type: String, required: true },
    batterHand: { type: String, required: true },
    runnerOn1bInd: { type: String, required: true },
    runnerOn2bInd: { type: String, required: true },
    runnerOn3bInd: { type: String, required: true },
    pitcher: { type: String, required: true },
    pitcherHand: { type: String, required: true },
    balls: { type: Number, required: true },
    strikes: { type: Number, required: true },
    hitType: { type: String, required: true },
    playType: { type: String, required: true },
    runs: { type: Number, required: true },
    outs: { type: Number, required: true },
    description: { type: String, required: true },
    startOuts: { type: Number, required: true },
    startingRE: { type: Number, required: true },
    endingRE: { type: Number },
    home_team_win_pct: { type: Number, required: true },
  }
)

module.exports = mongoose.model("games", Game)
