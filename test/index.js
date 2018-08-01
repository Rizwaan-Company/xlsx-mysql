const test = require('tap').test

const generateRandomString = require('../index')

test('smoke test', function (t) {
  const string = generateRandomString()
  t.is(typeof string, 'string')
  t.ok(string.length > 0)
  t.ok(/-\d{2}$/.test(string))
  t.end()
})
