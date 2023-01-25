const express = require('express')
const router = express.Router()
const Plog = require('../models/plogs.js')
const apiController = require('./apiController.js')
const dataController = require('./dataController.js')

//API ROUTES - I NEED TO HAVE THEM IN PLOG CONTROLLER WHEN ERASE THIS CONTROLLER
//index
router.get('/api', dataController.index, apiController.index)
//show
router.get('/api/:id', dataController.index, apiController.show)

// add routes
// Index
router.get('/', (req, res) => {
  // Use Plogs model to get all Plogs
  Plog.find({}, (error, allPlogs) => {
    res.render('plogs/Index', {
      plogs: allPlogs
    })
  })
})

// New
router.get('/new', (req, res) => {
  res.render('plogs/New')
})

// Delete
router.delete('/:id', (req, res) => {
  // Delete document from collection
  Plog.findByIdAndRemove(req.params.id, (err, plog) => {
    res.redirect('/plogs')
  })
})

// Update
router.put('/:id', (req, res) => {
  req.body.success = req.body.success === 'on' ? true : false
  req.body.etiquette = req.body.etiquette === 'on' ? true : false

  // Update the plog document using our model
  Plog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedModel) => {
      res.redirect('/plogs')
    }
  )
})

// Create
router.post('/', (req, res) => {
  if (req.body.success === 'on') {
    req.body.success = true
  } else {
    req.body.success = false
  }
  if (req.body.etiquette === 'on') {
    req.body.etiquette = true
  } else {
    req.body.etiquette = false
  }
  // Use Model to create Plog Document
  Plog.create(req.body, (error, createdPlog) => {
    // Once created - respond to client
    res.redirect('/plogs')
  })
})

// Edit
router.get('/:id/edit', (req, res) => {
  // Find our document from the collection - using mongoose model
  Plog.findById(req.params.id, (err, foundPlog) => {
    // render the edit view and pass it the found plog
    res.render('plogs/Edit', {
      plog: foundPlog
    })
  })
})

// Show
router.get('/:id', (req, res) => {
  // Find the specific document
  Plog.findById(req.params.id, (error, foundPlog) => {
    // render the Show route and pass it the foundPlog
    res.render('plogs/Show', {
      plog: foundPlog
    })
  })
})

// export router
module.exports = router
