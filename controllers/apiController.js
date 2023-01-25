const apiController = {
  index(req, res, next) {
    res.json(res.locals.data.plogs)
  },
  show(req, res, next) {
    res.json(res.locals.data.plog)
  }
}

// We only need Index and Show because we are currently only ever showing a list of plogs
// Or we are showing a single fruit

module.exports = apiController

//why is this ignored?
// Additional Routes will be added on Tuesday once we incorporate nuanced functionality
