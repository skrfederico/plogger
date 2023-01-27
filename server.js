require('dotenv').config()

const express = require('express')
const app = express() // we are calling express here and assigning it to app

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

//Middleware
const setupMiddleware = require('./middleware/setupMiddleware')
setupMiddleware(app)
const basicAuth = require('./middleware/basicAuth')

/**
 * Initialize the View engine
 */
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Controllers
app.use('/plogs', basicAuth, plogController)
app.use('/user', userController)

// // Middleware example   not necessary
// function logger(req, res, next) {
//   console.info(req.path)
//   next()
// }
// app.use(logger)

// NEW ADD : DO I NEED THIS?
// app.use('/plogs', require('./controllers/routeController.js'))

// const Plog = require('./models/plogs')

// // This is an example of 2 middlewares used together
// app.get('/thursday', headersCheck, logger2, (req, res) => {
//   res.send('Oh yea its thursday')
// })

// // This is an example of 2 middlewares used together
// app.get('/friday', logger2, headersCheck, (req, res) => {
//   res.send('Oh yea its friday 🔥😎')
// })

// We are just going to redirect to /plogs if the user goes to our base route
app.get('/', (req, res) => {
  res.redirect('/plogs/')
})

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`)
})

// apparently this is not needed here anymore

// // Mount Express Middleware
// app.use((req, res, next) => {
//   res.locals.data = {}
//   next()
// })

// // Creates res.locals.data
// app.use(express.urlencoded({ extended: true })) // Creates req.body
// // where does this go?

// // app.use('/plogs', require('./controllers/plogController.js')) // Mounts our RESTFUL/INDUCES ROUTES at /plogs
