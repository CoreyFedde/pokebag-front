'use strict'
// const store = require('../store.js')
const config = require('../config.js')

const getAllPokemon = function () {
  return $.ajax({
    url: config.apiOrigin + '/pokemon/',
    method: 'GET'
  })
}
const getAllItems = function () {
  return $.ajax({
    url: config.apiOrigin + '/item/',
    method: 'GET'
  })
}

const onGetAllPokemon = function (event) {
  getAllPokemon()
    .then((data) => console.log('data: ', data))
    .catch((error) => console.log(error))
}
const onGetAllItems = function (event) {
  getAllItems()
    .then((data) => console.log('data: ', data))
    .catch((error) => console.log(error))
}
module.exports = {
  onGetAllPokemon,
  onGetAllItems
}
