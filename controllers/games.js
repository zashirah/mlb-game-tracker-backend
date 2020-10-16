const Game = require("../models/game")
const db = require("../db/connections")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const getGames = async (req, res) => {
  try {
    const games = await Game.find()
    res.json(games)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getGame = async (req, res) => {
  try {
    const { id } = req.params
    const game = await Game.findById(id)
    if (game) {
      return res.json(game)
    }
    res.status(404).json({ message: "Game not found!" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createGame = async (req, res) => {
  try {
    const game = await new Game(req.body)
    await game.save()
    res.status(201).json(game)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const updateGame = async (req, res) => {
  const { id } = req.params
  await Game.findByIdAndUpdate(id, req.body, { new: true }, (error, game) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
    if (!game) {
      return res.status(404).json({ message: "Game not found!" })
    }
    res.status(200).json(game)
  })
}

const deleteGame = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Game.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Game deleted")
    }
    throw new Error("Game not found")
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createGame,
  getGames,
  getGame,
  updateGame,
  deleteGame,
}
