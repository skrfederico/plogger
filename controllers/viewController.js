const RESOURCE_PATH = '/plogs'
const viewController = {
  index(req, res, next) {
    res.render('plogs/Index', res.locals.data)
  },
  show(req, res, next) {
    res.render('plogs/Show', res.locals.data)
  },
  edit(req, res, next) {
    res.render('plogs/Edit', res.locals.data)
  },
  newView(req, res, next) {
    res.render('plogs/New')
  },
  redirectHome(req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res, next) {
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
}

module.exports = viewController
