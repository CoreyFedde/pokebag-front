'use strict'
// const store = require('../store.js')
const config = require('../config.js')

const getAllPokemon = function () {
  return $.ajax({
    url: config.apiOrigin + '/pokemon/',
    method: 'GET'
  })
}
const getOnePokemon = function () {
  return $.ajax({
    url: config.apiOrigin + '/pokemon/' + 1,
    method: 'GET'
  })
}

const getAllItems = function () {
  return $.ajax({
    url: config.apiOrigin + '/item/',
    method: 'GET'
  })
}
const getOneItem = function () {
  return $.ajax({
    url: config.apiOrigin + '/item/' + 1,
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
const onGetOnePokemon = function (event) {
  getOnePokemon()
    .then((data) => console.log('data: ', data))
    .catch((error) => console.log(error))
}
const onGetOneItem = function (event) {
  getOneItem()
    .then((data) => console.log('data: ', data))
    .catch((error) => console.log(error))
}
module.exports = {
  onGetAllPokemon,
  onGetAllItems,
  onGetOnePokemon,
  onGetOneItem
}
