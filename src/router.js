var express = require('express')

function app (auth) {
  var server = express()

  server.post('/sign-in/', function signIn (req, res) {

  })

  server.post('/sign-up/', function signUp (req, res) {

  })

  server.get('/confirm/:code/', function confirm (req, res) {

  })

  server.post('/restore/', function restore (req, res) {

  })

  server.post('/reset/', function reset (req, res) {

  })

  return server
}

module.exports = app
