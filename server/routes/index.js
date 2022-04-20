const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

// GET /api/v1/welcome/
// router.get('/', (req, res) => {
//   try {
//     res.json({ statement: 'Welcome to external APIs!' })
//   } catch (err) {
//     res.status(500).send(err.message)
//   }
// })

router.get('/new', (req, res) => {
  request
    .get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
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
