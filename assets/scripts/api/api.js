'use strict'
// const store = require('../store.js')
const config = require('../config.js')
const inspectItemTemplate = require('../templates/inspect-item.handlebars')
const inspectPokemonTemplate = require('../templates/inspect-pokemon.handlebars')
const onePokemonTemplate = require('../templates/show-one-pokemon.handlebars')
const pokemonTemplate = require('../templates/show-all-pokemon.handlebars')
const itemTemplate = require('../templates/show-all-items.handlebars')
const oneItemTemplate = require('../templates/show-one-item.handlebars')
const rareTemplate = require('../templates/show-rare-candy.handlebars')

const getAllPokemon = function () {
  return $.ajax({
    url: config.apiOrigin + '/pokemon/?limit=811',
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

const onGetAllPokemon = function (event) {
  getAllPokemon()
    .then((data) => {
      const pokemonHTML = pokemonTemplate({ pokemons: data.results })
      $('#pokemonBoard').append(pokemonHTML)
      $('.pokemon-selection-board').append(pokemonHTML)
      $('.pokemon-view-board').append(pokemonHTML)
    })
    .catch((error) => console.log(error))
}
const onGetAllItems = function (event) {
  getAllItems()
    .then((data) => {
      const itemHTML = itemTemplate({ items: data.results })
      $('#itemBoard').append(itemHTML)
      $('.item-selection-board').append(itemHTML)
      $('.item-view-board').append(itemHTML)
    })
    .catch((error) => console.log(error))
}
const onInspectPokemon = function (data) {
  $('#inspectPokemonModal').modal('show')
  getOnePokemon(data)
    .then((data) => {
      // const targetCard = '#' + data.name + 'SelectorCard'
      // const targetCard = '.' + data.name + '-selector-card'
      const inspectHTML = inspectPokemonTemplate({ pokemon: data })
      $('#inspectPokemonBoard').text('')
      $('#inspectPokemonBoard').append(inspectHTML)
      // const pokemonHTML = onePokemonTemplate({ pokemon: data })
      // $('.pokemon-selection-board').append(pokemonHTML)
      // $('.pokemon-view-board').append(pokemonHTML)
      // $(targetCard).hide()
      // $(targetCard).hasClass()
    })
    .catch((error) => console.log(error))
}
const onGetOnePokemon = function (data) {
  getOnePokemon(data)
    .then((data) => {
      const pokemonHTML = onePokemonTemplate({ pokemon: data })
      $('.pokemon-selection-board').append(pokemonHTML)
      $('.pokemon-view-board').append(pokemonHTML)
    })
    .catch((error) => console.log(error))
}
const onInspectItem = function (data) {
  $('#inspectItemModal').modal('show')
  getOneItem(data)
    .then((data) => {
      // const targetCard = '.' + data.name + '-selector-card'
      const inspectHTML = inspectItemTemplate({ item: data })
      $('#inspectItemBoard').text('')
      $('#inspectItemBoard').append(inspectHTML)
      // const itemHTML = oneItemTemplate({ item: data })
      // $('.item-selection-board').append(itemHTML)
      // $(targetCard).hide()
      // $(targetCard).hasClass()
    })
    .catch((error) => console.log(error))
}
const onGetOneItem = function (data) {
  getOneItem(data)
    .then((data) => {
      const itemHTML = oneItemTemplate({ item: data })
      $('.item-selection-board').append(itemHTML)
      $('.inspect-button').hide()
      $('.use-button').hide()
    })
    // .then((data) => console.log('data: ', data))
    .catch((error) => console.log(error))
}
const onGetRareCandy = function () {
  getOneItem('rare-candy')
    .then((data) => {
      const itemHTML = rareTemplate({ item: data })
      $('#itemBoard').prepend(itemHTML)
    })
    // .then((data) => console.log('data: ', data))
    .catch((error) => console.log(error))
}

module.exports = {
  onGetAllPokemon,
  onGetAllItems,
  onGetOnePokemon,
  onGetOneItem,
  onInspectPokemon,
  onInspectItem,
  onGetRareCandy
}
