var test = require('tape')
var tapDiff = require('tap-diff')
var sinon = require('sinon')

test.createStream()
  .pipe(tapDiff())
  .pipe(process.stdout)

test('/sing-up/', t => {
  t.ok(true)
  t.end()
})

test('/sing-ip/', t => {
  t.ok(true)
  t.end()
})

test('/confirm/:code/', t => {
  t.ok(true)
  t.end()
})

test('/restore/', t => {
  t.ok(true)
  t.end()
})

test('/reset/', t => {
  t.ok(true)
  t.end()
})
