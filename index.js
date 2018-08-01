module.exports = generateRandomString

const adjectives = require('adjectives')
const animals = require('animals')
const randomNumber = require('random-number-in-range')

function generateRandomString () {
  return [randomAdjective(), animals(), randomNumber(10, 99)].join('-')
}

function randomAdjective () {
  return adjectives[randomNumber(0, adjectives.length - 1)]
}
