const RESOURCE_PATH = '/plogs'

const viewController = {
  index(req, res) {
    res.render('plogs/Index', res.locals.data)
  },
  indexforsearch(req, res) {
    res.render('vlogs/searchIndex', res.locals.data)
  },
  show(req, res) {
    res.render('plogs/Show', res.locals.data)
  },
  edit(req, res) {
    res.render('plogs/Edit', res.locals.data)
  },
  newView(req, res) {
    res.render('plogs/New')
  },
  redirectHome(req, res) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res) {
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
}

module.exports = viewController
