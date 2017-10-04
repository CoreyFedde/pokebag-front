'use strict'
// const store = require('../store.js')
const config = require('../config.js')

const getAllPokemon = function () {
  return $.ajax({
    url: config.apiOrigin + '/generation/1/',
    method: 'GET'
  })
}
const getOnePokemon = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/pokemon/' + data,
    method: 'GET'
  })
}

const getOnePokemonEvolution = function (data) {
  return $.ajax({
    url: data,
    method: 'GET'
  })
}

const getAllItems = function () {
  return $.ajax({
    url: config.apiOrigin + '/item/?limit=746',
    method: 'GET'
  })
}
const getOneItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/item/' + data,
    method: 'GET'
  })
}

const findPokemonEvolution = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/evolution-chain/' + data,
    method: 'GET'
  })
}

module.exports = {
  getAllPokemon,
  getOnePokemon,
  getAllItems,
  getOneItem,
  getOnePokemonEvolution,
  findPokemonEvolution
}
