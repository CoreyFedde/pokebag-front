'use strict'
// const store = require('../store.js')
const config = require('../config.js')
const onePokemonTemplate = require('../templates/show-one-pokemon.handlebars')
const pokemonTemplate = require('../templates/show-all-pokemon.handlebars')
const itemTemplate = require('../templates/show-all-items.handlebars')
const oneItemTemplate = require('../templates/show-one-item.handlebars')

const getAllPokemon = function () {
  return $.ajax({
    url: config.apiOrigin + '/pokemon/',
    method: 'GET'
  })
}
const getOnePokemon = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/pokemon/' + data,
    method: 'GET'
  })
}

const getAllItems = function () {
  return $.ajax({
    url: config.apiOrigin + '/item/',
    method: 'GET'
  })
}
const getOneItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/item/' + data,
    method: 'GET'
  })
}

const onGetAllPokemon = function (event) {
  getAllPokemon()
    .then((data) => {
      const pokemonHTML = pokemonTemplate({ pokemons: data.results })
      $('#pokemonBoard').prepend(pokemonHTML)
    })
    .catch((error) => console.log(error))
}
const onGetAllItems = function (event) {
  getAllItems()
    .then((data) => {
      const itemHTML = itemTemplate({ items: data.results })
      $('#itemBoard').prepend(itemHTML)
    })
    .catch((error) => console.log(error))
}
const onGetOnePokemon = function (data) {
  // const data = $(this).attr('data-name')
  // console.log(data)
  getOnePokemon(data)
    .then((data) => {
      const pokemonHTML = onePokemonTemplate({ pokemon: data })
      $('#pokemonSelectionBoard').append(pokemonHTML)
    })
    // .then((data) => console.log('data: ', data))
    .catch((error) => console.log(error))
}
const onGetOneItem = function (data) {
  getOneItem(data)
    .then((data) => {
      const itemHTML = oneItemTemplate({ item: data })
      $('#itemSelectionBoard').append(itemHTML)
    })
    // .then((data) => console.log('data: ', data))
    .catch((error) => console.log(error))
}
module.exports = {
  onGetAllPokemon,
  onGetAllItems,
  onGetOnePokemon,
  onGetOneItem
}
