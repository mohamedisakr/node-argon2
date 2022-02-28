const {SESSION_NAME} = require('./config')

const isLoggedIn = (req) => {
  !!req.session.userId
}

const login = (req, userId) => {
  req.session.userId = userId
  req.session.createdAt = Date.now()
}

const logout = (req, res) => {
  new Promise((resolve, reject) => {
    req.session.destroy((err) => {
      if (err) {
        reject(err)
      }
      res.clearCookie(SESSION_NAME)
      resolve()
    })
  })
}

module.exports = {login, logout, isLoggedIn}
