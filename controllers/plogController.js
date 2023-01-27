const express = require('express')
const router = express.Router()

// Data controller
const dataController = require('./dataController')
const viewController = require('./viewController')
const apiController = require('./apiController')

router.use((req, res, next) => {
  // console.log('session', req.session)

  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect('/user/login')
  }
})

//API ROUTES -
//index
router.get('/api', dataController.index, apiController.index)
//show
router.get('/api/:id', dataController.show, apiController.show)

//delete
router.delete('/api/:id', dataController.destroy, apiController.show)

//update
router.put('/api/:id', dataController.update, apiController.show)

//create
//post request doesn't need id after /api/
router.post('/api/', dataController.create, apiController.show)

//
// NEW routes
// Index
router.get('/', dataController.index, viewController.index)
// New
router.get('/new', viewController.newView)
// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// Update
router.put('/:id', dataController.update, viewController.redirectShow)
// Create
router.post('/', dataController.create, viewController.redirectHome)
// Edit
router.get('/:id/edit', dataController.show, viewController.edit)
// Show
router.get('/:id', dataController.show, viewController.show)

module.exports = router

/** 
// Index - route (BEFORE MIDDLEWARE)
router.get('/plogs', (req, res) => {
  //render a template
  // res.send('Should send back all plogs')
  Plog.find({}, (error, allPlogs) => {
    res.render('plogs/Index', {
      plogs: allPlogs
    })
  })
})

//put this above your Show route
// New (BEFORE MIDDLEWARE)
router.get('/plogs/new', (req, res) => {
  res.render('plogs/New')
})

// Show - Route (BEFORE MIDDLEWARE)
router.get('/plogs/:id', (req, res) => {
  const { id } = req.params

  Plog.findById(id, (error, foundPlog) => {
    if (error) {
      console.Plog(error)
    }
    console.log(foundPlog)
    res.render('plogs/Show', {
      //plog: foundPlog
      _id: foundPlog._id,
      success: foundPlog.success,
      student: foundPlog.student,
      parent: foundPlog.parent,
      teacher: foundPlog.teacher,
      date: foundPlog.date,
      category: foundPlog.category,
      description: foundPlog.description,
      introduction: foundPlog.introduction,
      information: foundPlog.information,
      examNotice: foundPlog.examNotice,
      body: foundPlog.body,
      etiquette: foundPlog.etiquette
    })
  })
})

// Edit - route (BEFORE MIDDLEWARE)
router.get('/plogs/:id/edit', (req, res) => {
  const { id } = req.params

  Plog.findById(id, (err, foundPlog) => {
    res.render('plogs/Edit', {
      _id: foundPlog._id,
      success: foundPlog.success,
      student: foundPlog.student,
      parent: foundPlog.parent,
      teacher: foundPlog.teacher,
      date: foundPlog.date,
      category: foundPlog.category,
      description: foundPlog.description,
      introduction: foundPlog.introduction,
      information: foundPlog.information,
      examNotice: foundPlog.examNotice,
      body: foundPlog.body,
      etiquette: foundPlog.etiquette
    })
  })
})

// Create (BEFORE MIDDLEWARE)
router.post('/plogs/', (req, res) => {
  const {
    success,
    student,
    parent,
    teacher,
    date,
    category,
    description,
    etiquette
  } = req.body
  // console.log(req.body)
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

  Plog.create(req.body, (error, createdPlog) => {
    res.redirect('/plogs/') // sends to /plogs get route
  })
})

// Update - route (BEFORE MIDDLEWARE)
router.put('/plogs/:id', (req, res) => {
  console.log(req.body.body)
  // UPDATE
  //res.send('Should update one plog by id')
  if (req.body.success === 'on') {
    req.body.success = true
  } else {
    req.body.success = false
  }
  if (req.body.etiquette === 'on') {
    //if checked, req.body.success is set to 'on'
    req.body.etiquette = true
  } else {
    //if not checked, req.body.success is undefined
    req.body.etiquette = false
  }

  Plog.findByIdAndUpdate(req.params.id, req.body, (err, updatedPlog) => {
    if (err) {
      return res.send({ error: err })
    }
    console.log('updatedPlog', updatedPlog)
    res.redirect(`/plogs/${req.params.id}`)
  })
})

// router.get('/:id', (req, res) => {
//   // this is a straight READ by Id
//   res.send('Should send back one plog')
// })


// DELETE (BEFORE MIDDLEWARE)
router.delete('/plogs/:id', (req, res) => {
  console.log(req.params.id)
  Plog.findByIdAndDelete(req.params.id, (error, deletedPlog) => {
    // if (!error) {
    console.log(req.params.id)
    console.log('Deleted plog post', { deletedPlog })
    res.redirect('/plogs')
  })
  // res.status(400).send('Try again later...')
})
// })
*/

//

/** 
router.get('/', (req, res) => {
  // this / actually means /plogs/
  res.send('Should send back all bplogs')
  // -alternative- res.send(req.path)
})
*/
