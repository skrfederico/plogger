const Plog = require('../models/plogs.js')

const dataController = {
  index(req, res, next) {
    Plog.find({}, (error, allPlogs) => {
      if (err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.plogs = allPlogs
        next()
      }
    })
  },
  create(req, res, next) {
    req.body.success = req.body.success === 'on' ? true : false
    req.body.etiquette = req.body.etiquette === 'on' ? true : false
    // Use Model to create Plog Document
    Plog.create(req.body, (error, createdPlog) => {
      // Once created - respond to client
      if (err) {
        res.status(404).send({
          msg: err.message
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
        res.locals.data.plog = foundPlog
        next()
      }
    })
  },
  update(req, res, next) {
    req.body.success = req.body.success === 'on' ? true : false
    req.body.etiquette = req.body.etiquette === 'on' ? true : false
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
