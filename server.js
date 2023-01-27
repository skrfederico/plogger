require('dotenv').config()

const express = require('express')
const app = express() // we are calling express here and assigning it to app

const methodOverride = require('method-override')

// Configs
const PORT = process.env.PORT || 8080

// Controllers
const plogController = require('./controllers/plogController')
const userController = require('./controllers/user/userController')

//connect to database
const db = require('./db')
db.once('open', () => {
  console.log('connected to mongo')
})

const basicAuth = require('./middleware/basicAuth')

app.use(express.static('public')) // Allows us to have Static Files

app.use(methodOverride('_method')) // Allows us to override methods

// // Middleware example   not necessary
// function logger(req, res, next) {
//   console.info(req.path)
//   next()
// }
// app.use(logger)

// Mount Express Middleware
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

// Creates res.locals.data
app.use(express.urlencoded({ extended: true })) // Creates req.body
// where does this go?
// Allow express to use urlencoded
// app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use('/plogs', require('./controllers/plogController.js')) // Mounts our RESTFUL/INDUCES ROUTES at /plogs

// NOTE: Why can't I cancel 45 and run 49 ?
// Controllers - NEW: DO I NEED THIS?
// app.use('/plogs', plogController)

// This an example of middleware
function headersCheck(req, res, next) {
  const { authorization } = req.headers

  if (authorization === '12345') {
    req.params = { lol: true }
    next()
  } else {
    res
      .status(400)
      .json({ error: 'Sorry you are not authorized to see the message' })
  }
}

// This is also an example of middleware
function logger2(req, res, next) {
  console.info('Params: ', req.params)
  next()
}

// This is an example of 2 middlewares used together
app.get('/thursday', headersCheck, logger2, (req, res) => {
  res.send('Oh yea its thursday')
})

// This is an example of 2 middlewares used together
app.get('/friday', logger2, headersCheck, (req, res) => {
  res.send('Oh yea its friday 🔥😎')
})

// We are just going to redirect to /plogs if the user goes to our base route
app.get('/', (req, res) => {
  res.redirect('/plogs/')
})

// NEW ADD : DO I NEED THIS?
// app.use('/plogs', require('./controllers/routeController.js'))

// const Plog = require('./models/plogs')

/**
 * Initialize the View engine
 */
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Controllers
app.use('/plogs', basicAuth, plogController)
// app.use('/foodlog', foodLogsController)
app.use('/user', userController)

// We are just going to redirect to /plogs if the user goes to our base route
app.get('/', (req, res) => {
  res.redirect('/plogs/')
})

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`)
})
