var express = require('express')
var bodyParser = require('body-parser')

function router (controller) {
  var server = express()

  server.use(bodyParser.urlencoded())
  server.use(bodyParser.json())

  server.post('/sign-up/', controller.signUp)
  server.post('/sign-in/', controller.signIn)
  server.get('/confirm/:code/', controller.confirm)
  server.post('/restore/', controller.restore)
  server.post('/reset/', controller.reset)

  return server
}

module.exports = router
