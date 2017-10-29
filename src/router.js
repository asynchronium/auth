var express = require('express')
var bodyParser = require('body-parser')

function router (auth) {

  async function signUp (req, res) {
    var email = req.body.email
    var password = req.body.password

    try {
      var user = await auth.signUp({ email, password })
    } catch (error) {
      res
        .status(400)
        .json({ message: error.message })
    }
  }

  async function signIn (req, res) {
    var email = req.body.email
    var password = req.body.password

    try {
      var user = await auth.signIn({ email, password })
    } catch (error) {
      res
        .status(401)
        .json({ message: error.message })
    }
  }

  async function confirm (req, res) {
    var code = req.params.code

    try {
      var user = await auth.confirm({ code })
    } catch (error) {
      res
        .status(400)
        .json({ message: error.message })
    }
  }

  async function restore (req, res) {

  }

  async function reset (req, res) {

  }

  var server = express()

  server.use(bodyParser.urlencoded())
  server.use(bodyParser.json())

  server.post('/sign-up/', signUp)

  server.post('/sign-in/', )

  server.get('/confirm/:code/', confirm)

  server.post('/restore/', restore)

  server.post('/reset/', reset)

  return server
}

module.exports = router
