const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
// const saltRounds = 10

// var salt =
const User = require('../../models/user')

router.post('/signup', async (req, res) => {
  // hash the password that we receive
  // we don't want to store passwords in plain text in our db
  // hashing is different than encrypting (we are not doing this for now)
  // hashes are used for comparisons
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  )
  // without async
  // bcrypt.genSalt(10, function (err, salt) {
  //   bcrypt.hash(process.env.SECRET, salt, function (err, hash) {
  //     // Store hash in your password DB.
  //     res.send(hash)
  //   })
  // })
})

router.post('/login', (req, res) => {
  res.send(req.body)
})

module.exports = router
