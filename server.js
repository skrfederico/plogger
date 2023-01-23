require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const app = express() // we are calling express here and assigning it to app
const mongoose = require('mongoose')

// Configs
//const PORT = 8080
const PORT = process.env.PORT || 8080

//connect to database
const db = require('./models/db')
db.once('open', () => {
  console.log('connected to mongo')
})

/**
 * Initialize the View engine
 */
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Mount Express Middleware
app.use((req, res, next) => {
  res.locals.data = {}
  next()
}) // Creates res.locals.data
app.use(express.urlencoded({ extended: true })) // Creates req.body
app.use(methodOverride('_method')) // Allows us to override methods
app.use(express.static('public')) // Allows us to have Static Files
app.use('/plogs', require('./controllers/routeController.js')) // Mounts our RESTFUL/INDUCES ROUTES at /plogs

// Controllers - NEW: DO I NEED THIS?
// app.use("/plogs", plogController);

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

// We are just going to redirect to /fruits if the user goes to our base route
app.get('/', (req, res) => {
  res.redirect('/fruits/')
})

// NEW ADD : DO I NEED THIS?
// app.use('/plogs', require('./controllers/routeController.js'))

const Plog = require('./models/plogs')

app.use('/', plogsController)
// app.use('/foodlog', foodLogsController)

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`)
})

/**
// DB setup
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

//Middleware

app.use(express.static('public')) //tells express to try to match requests with files in the directory called 'public'

//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'))

// Middleware example
function logger(req, res, next) {
  console.info(req.path)
  next()
}

app.use(logger)

// Allow express to use urlencoded
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Controllers
const plogsController = require('./controllers/plogController')
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'))

// Allow express to use urlencoded
app.use(express.urlencoded({ extended: true }))
// Allowing express to recieve json in the body
app.use(express.json())

//View engine

app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())
*/
