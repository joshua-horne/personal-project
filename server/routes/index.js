const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/new', (req, res) => {
  request
    .get('http://deckofcardsapi.com/api/deck/new/draw')
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/draw/:deckID', (req, res) => {
  request
    .get(`http://deckofcardsapi.com/api/deck/${req.params.deckID}/draw`)
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
