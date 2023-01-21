const express = require('express')
const router = express.Router()

/**
 * Models
 */
const FoodLog = require('../models/foodLogs')

// Index - route
router.get('/', (req, res) => {
  //render a template
  // res.send('Should send back all logs')
  FoodLog.find({}, (error, allFoodLogs) => {
    res.render('foodLogs/Index', {
      foodLogs: allFoodLogs
    })
  })
})

//put this above your Show route
// New
router.get('/new', (req, res) => {
  res.render('foodLogs/New')
})

// Show - Route
router.get('/:id', (req, res) => {
  const { id } = req.params

  FoodLog.findById(id, (error, foundFoodLog) => {
    if (error) {
      console.log(error)
    }
    console.log(foundFoodLog)
    res.render('foodLogs/Show', {
      //log: foundFoodLog
      main: foundFoodLog.main,
      side: foundFoodLog.side,
      createdAt: foundFoodLog.createdAt,
      _id: foundFoodLog._id
    })
  })
})

// Edit - route
router.get('/:id/edit', (req, res) => {
  const { id } = req.params

  FoodLog.findById(id, (err, foundFoodLog) => {
    res.render('foodLogs/Edit', {
      _id: foundFoodLog._id,
      main: foundFoodLog.main,
      side: foundFoodLog.side,
      seconds: foundFoodLog.seconds,
      leftovers: foundFoodLog.leftovers
    })
  })
})

// Create
// router.post('/foodlog/', (req, res) => {
router.post('/', (req, res) => {
  const { name, data, seconds, leftovers, body } = req.body
  console.log(req.body)
  if (req.body.seconds === 'on') {
    //if checked, req.body.seconds is set to 'on'
    req.body.seconds = true
  } else {
    //if not checked, req.body.seconds is undefined
    req.body.seconds = false
  }
  if (req.body.leftovers === 'on') {
    //if checked, req.body.leftovers is set to 'on'
    req.body.leftovers = true
  } else {
    //if not checked, req.body.leftovers is undefined
    req.body.leftovers = false
  }
  FoodLog.create(req.body, (error, createdFoodLog) => {
    //Log.create({ main, body }, (error, createdLog) => {
    console.log(req.body)
    console.log(createdFoodLog)
    //console.error(error)
    // if (!err) {
    //   console.log(createdLog)

    //   res.redirect(`/blog/${createdLog._id}`)
    //   return
    // }
    res.redirect('/foodlog/') // sends to /foodlog get route
  })

  // Log.create({ main, body }, (error, createdLogPost) => {
  //   // Blog.create({...req.body }, (error, createdBlogPost) => {
  //   if (error) {
  //     res.status(400).json({ error })
  //     return
  //   }

  //   res.status(200).json(createdLogPost)
  // })
})

// Update - route
router.put('/:id', (req, res) => {
  console.log('/foodlog/:id')
  // UPDATE
  //res.send('Should update one log by id')
  if (req.body.seconds === 'on') {
    req.body.seconds = true
  } else {
    req.body.seconds = false
  }
  if (req.body.leftovers === 'on') {
    req.body.leftovers = true
  } else {
    req.body.leftovers = false
  }
  FoodLog.findByIdAndUpdate(req.params.id, req.body, (err, updatedFoodLog) => {
    if (err) {
      return res.send({ error: err })
    }
    console.log('updatedFoodLog', updatedFoodLog)
    res.redirect(`/foodlog/${req.params.id}`)
  })
})

// router.get('/:id', (req, res) => {
//   // this is a straight READ by Id
//   res.send('Should send back one log')
// })

/** 
router.get('/', (req, res) => {
  // this / actually means /logs/
  res.send('Should send back all blogs')
  // -alternative- res.send(req.path)
})
*/

// DELETE
router.delete('/:id', (req, res) => {
  // const { id } = req.params
  console.log(req.params.id)
  //res.send('Should delete one log')
  FoodLog.findByIdAndDelete(
    req.params.id,
    (error, deletedFoodLog) => {
      // if (!err) {
      console.log('Deleted foodLog post', { deletedFoodLog })
      console.log(req.params.id)
      res.redirect('/foodlog')
      // return
    }
    // res.status(400).send('Failing in the delete route')
  )
})

module.exports = router
