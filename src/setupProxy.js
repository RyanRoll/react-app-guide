// NodeJS ES6 only
const bodyParser = require('body-parser')
const crypto = require('crypto')

const sessions = {}

module.exports = app => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())

  app.post('/api/login', (req, res) => {
    const { email, password } = req.body
    console.log('post data', req.body)
    const userID = crypto.createHash('sha256').update(password).digest('base64')
    res.cookie('userID', userID, { path: '/' })
    sessions[userID] = email
    res.json({
      success: true,
      email,
    })
  })
  app.get('/api/user/:userid', (req, res) => {
    const { userid } = req.params
    const email = sessions[userid]
    if (email) {
      res.json({
        email,
        members: Object.keys(sessions).length
      })
    } else {
      res.status(404).json({
        message: `The person was not found, get out of here.`
      })
    }
  })
}
