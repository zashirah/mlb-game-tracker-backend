const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Game = new Schema(
  {
    dataset: { type: String, required: true },
    gameId: { type: String, required: true },
    date: { type: Date, required: true }, // need to reformat date in file for seed
    inning: { type: String, required: true },
    roadTeam: { type: String, required: true },
    homeTeam: { type: String, required: true },
    roadScore: { type: Number, required: true },
    homeScore: { type: Number, required: true },
    postRoadScore: { type: Number, required: true },
    postHomeScore: { type: Number, required: true },
    battingTeam: { type: String, required: true },
    batter: { type: String, required: true },
    batterHand: { type: String, required: true },
    runnerOn1b: { type: String },
    runnerOn2b: { type: String },
    runnerOn3b: { type: String },
    pitchingTeam: { type: String, required: true },
    pitcher: { type: String, required: true },
    // pitcherHand: { type: String, required: true },
    // catcher: { type: String, required: true },
    // firstBase: { type: String, required: true },
    // secondBase: { type: String, required: true },
    // thirdBase: { type: String, required: true },
    // shortstop: { type: String, required: true },
    // leftField: { type: String, required: true },
    // centerField: { type: String, required: true },
    // rightField: { type: String, required: true },
    // pitchSeqLength: { type: Number, required: true },
    // pitchSequence: { type: String, required: true },
    balls: { type: Number, required: true },
    strikes: { type: Number, required: true },
    hitType: { type: String, required: true },
    playType: { type: String, required: true },
    runs: { type: Number, required: true },
    outs: { type: Number, required: true },
    description: { type: String, required: true },
    totalOuts: { type: Number, required: true },
    postTotalOuts: { type: Number, required: true },
    totalRuns: { type: Number, required: true },
    startingRE: { type: Number, required: true },
    endingRE: { type: Number, required: true },
    // home_minus_road_score: { type: Number, required: true },
    home_team_win_pct: { type: Number, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("gamess", Game)
