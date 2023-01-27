const methodOverride = require('method-override')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const express = require('express')

const setupMiddleware = (app) => {
  app.use(morgan('tiny')) //logging
  app.use(express.static('public')) //tells express to try to match requests with files in the directory called 'public'

  //...
  //after app has been defined
  //use methodOverride.  We'll be adding a query parameter to our delete form named _method
  app.use(methodOverride('_method')) // Allows us to override methods
  app.use((req, res, next) => {
    res.locals.data = {}
    next()
  })

  // Allow express to use urlencoded
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.use(
    session({
      secret: process.env.SECRET,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
      saveUninitialized: true,
      resave: true
    })
  )
}

// NOTE: Why can't I cancel 45 and run 49 ?
// Controllers - NEW: DO I NEED THIS?
// app.use('/plogs', plogController)

// // This an example of middleware
// function headersCheck(req, res, next) {
//   const { authorization } = req.headers

//   if (authorization === '12345') {
//     req.params = { lol: true }
//     next()
//   } else {
//     res
//       .status(400)
//       .json({ error: 'Sorry you are not authorized to see the message' })
//   }
// }

// // This is also an example of middleware
// function logger2(req, res, next) {
//   console.info('Params: ', req.params)
//   next()
// }

module.exports = setupMiddleware
