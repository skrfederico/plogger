//IMPORTANT WE MAY NEED TO ADD ../ IF WE CREATE A PLOG FOLDER
const Plog = require('../models/plogs.js')

const dataController = {
  index(req, res, next) {
    Plog.find({}, (error, allPlogs) => {
      if (error) {
        res.status(404).send({
          msg: error.message
        })
      } else {
        res.locals.data.plog = allPlogs
        next()
      }
    })
  },

  create(req, res, next) {
    console.log(req.body)
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
      if (error) {
        res.status(404).send({
          msg: error.message
        })
      } else {
        res.locals.data.plog = createdPlog
        next()
      }
    })
  },
  show(req, res, next) {
    Plog.findById(req.params.id, (err, foundPlog) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        ;(res.locals.data.plog = foundPlog), next()
      }
    })
  },
  update(req, res, next) {
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
    Plog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedPlog) => {
        if (err) {
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.plog = updatedPlog
          next()
        }
      }
    )
  },

  // trying to map on Edit
  // router.get('/plogs/:id/edit', (req, res) => {
  //   const { id } = req.params

  //   Plog.findById(id, (err, foundPlog) => {
  //     res.render('plogs/Edit', {
  //       _id: foundPlog._id,
  //       success: foundPlog.success,
  //       student: foundPlog.student,
  //       parent: foundPlog.parent,
  //       teacher: foundPlog.teacher,
  //       date: foundPlog.date,
  //       category: foundPlog.category,
  //       description: foundPlog.description,
  //       introduction: foundPlog.introduction,
  //       information: foundPlog.information,
  //       examNotice: foundPlog.examNotice,
  //       body: foundPlog.body,
  //       etiquette: foundPlog.etiquette
  //     })
  //   })
  // })

  destroy(req, res, next) {
    Plog.findByIdAndRemove(req.params.id, (err, plog) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.plog = plog
        next()
      }
    })
  }
}

module.exports = dataController
