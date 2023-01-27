const jwt = require('jsonwebtoken')

async function basicAuth(req, res, next) {
  //Parse the header with the token. Verify the jwt and then pass the _id into the context
  const { authorization } = req.headers
  const bearerToken = authorization?.split(' ')[1]
  if (!bearerToken) {
    return res.redirect('/user/login')
  }
  try {
    const verified = jwt.verify(bearerToken, process.env.SECRET)
    console.log(verified)
    if (verified) {
      res.locals.data.user = verified
      next()
    } else {
      return res.status(401).json({ error: 'This is an error from basicAuth' })
    }
  } catch (error) {
    return res.status(401).json({ error: 'This is an error from basicAuth2' })
  }
}

module.exports = basicAuth
