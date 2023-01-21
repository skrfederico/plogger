require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express() // we are calling express here and assigning it to app

//include the method-override package place this where you instructor places it
const methodOverride = require('method-override')

// Configs
const PORT = 8080

// DB setup

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

/**
 * Middleware
 */

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
/**
 * View engine
 */
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Controllers
const plogsController = require('./controllers/plogController')
// const foodLogsController = require('./controllers/foodLogController')

const Plog = require('./models/plogs')

//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'))

// Allow express to use urlencoded
app.use(express.urlencoded({ extended: true }))
// Allowing express to recieve json in the body
app.use(express.json())

/**
 * View engine
 */
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

app.use('/', plogsController)
// app.use('/foodlog', foodLogsController)

//Listen on the port
app.listen(PORT, () => {
  console.log(`Server listening @ http://localhost:${PORT}/`)
})
