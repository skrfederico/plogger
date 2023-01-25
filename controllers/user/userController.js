const express = require('express')
const router = express.Router()

const user = require('../../models/user')

router.post('/signup', (req, res) => {
  res.send(req.body)
})

router.post('/login', (req, res) => {
  res.send(req.body)
})

module.exports = router
