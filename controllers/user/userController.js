const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const User = require('../../models/user')

// 1.20 commenting them out
// router.get('/signup', (req, res) => {
//   res.render('user/Signup')
// })

// router.get('/login', (req, res) => {
//   res.render('user/Login')
// })

router.post('/signup', async (req, res) => {
  const { username, password } = req.body

  try {
    // hash the password that we receive
    // we don't want to store passwords in plain text in our db
    // hashing is different than encrypting (we are not doing this for now)
    // hashes are used for comparisons
    const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10))
    const createdUser = await User.create({
      username,
      password: hashedPassword
    })
    console.log(createdUser)
    res.redirect('/user/login')
    // res.json({ hashedPassword })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
  // without async
  // bcrypt.genSalt(10, function (err, salt) {
  //   bcrypt.hash(process.env.SECRET, salt, function (err, hash) {
  //     // Store hash in your password DB.
  //     res.send(hash)
  //   })
  // })
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    //find the user by their  username
    const foundUser = await User.findOne({ username })
    // Compare the sent password w the hashed one
    const result = await bcrypt.compare(password, foundUser.password)
    console.log(result)
    if (result) {
      //generate JWT and send back
      req.session.username = username
      req.session.loggedIn = true
      res.redirect('/plogs')

      // const token = jwt.sign(
      //   { username: foundUser.username, _id: foundUser._id },
      //   process.env.SECRET
      //   // why did we add it and then deleted it?
      // { algorigthm: 'RS256' }
      // )
      // res.status(200).json({ token })
      // res.redirect('')
    } else {
      res.json({ error: "password doesn't match" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    console.error(err)
    res.redirect('/')
  })
})
module.exports = router
