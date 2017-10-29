var express = require('express')
var bodyParser = require('body-parser')

function router (auth) {
  var server = express()

  server.use(bodyParser.urlencoded())
  server.use(bodyParser.json())

  server.post('/sign-up/', async function signUp (req, res) {
    var email = req.body.email
    var password = req.body.password

    try {
      var result = await auth.signUp({ email, password })
    } catch (error) {
      res
        .status(400)
        .json({ message: error.message })
    }
  })

  server.post('/sign-in/', async function signIn (req, res) {
    var email = req.body.email
    var password = req.body.password

    try {
      var result = await auth.signIn({ email, password })
    } catch (error) {
      res
        .status(401)
        .json({ message: error.message })
    }
  })

  server.get('/confirm/:code/', function confirm (req, res) {

  })

  server.post('/restore/', function restore (req, res) {

  })

  server.post('/reset/', function reset (req, res) {

  })

  return server
}

module.exports = router
