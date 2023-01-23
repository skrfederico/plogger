const express = require('express')
const router = express.Router()

/**
 * Models
 */
const Plog = require('../models/plogs')

//ROUTES
//redirect
router.get('/', (req, res) => {
  res.redirect('/plogs')
})

// Index - route
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
// New
router.get('/plogs/new', (req, res) => {
  res.render('plogs/New')
})

// Show - Route
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

// Edit - route
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

// Create
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
    //if checked, req.body.success is set to 'on'
    req.body.success = true
  } else {
    //if not checked, req.body.success is undefined
    req.body.success = false
  }
  if (req.body.etiquette === 'on') {
    //if checked, req.body.success is set to 'on'
    req.body.etiquette = true
  } else {
    //if not checked, req.body.success is undefined
    req.body.etiquette = false
  }

  Plog.create(req.body, (error, createdPlog) => {
    //Plog.create({ title, body }, (error, createdPlog) => {
    // console.log(req.body)
    // console.log(createdPlog)
    // //console.error(error)
    // if (!err) {
    //   console.log(createdPlog)

    //   res.redirect(`/blog/${createdPlog._id}`)
    //   return
    // }
    res.redirect('/plogs/') // sends to /plogs get route
  })

  // Plog.create({ title, body }, (error, createdPlogPost) => {
  //   // Blog.create({...req.body }, (error, createdBlogPost) => {
  //   if (error) {
  //     res.status(400).json({ error })
  //     return
  //   }

  //   res.status(200).json(createdPlogPost)
  // })
})

// Update - route
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

/** 
router.get('/', (req, res) => {
  // this / actually means /plogs/
  res.send('Should send back all bplogs')
  // -alternative- res.send(req.path)
})
*/

// DELETE
router.delete('/plogs/:id', (req, res) => {
  // const { id } = req.params
  //res.send('Should delete one plog')
  // Plog.findByIdAndDelete(id, (error, deletedPlog) => {
  console.log(req.params.id)
  Plog.findByIdAndDelete(req.params.id, (error, deletedPlog) => {
    // if (!error) {
    console.log(req.params.id)
    console.log('Deleted plog post', { deletedPlog })
    res.redirect('/plogs')
    // console.log(deletedPlog)
    // return
  })
  // res.status(400).send('Try again later...')
})
// })

module.exports = router
