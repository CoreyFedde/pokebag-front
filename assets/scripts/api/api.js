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

const findPokemonEvolution = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/evolution-chain/' + data,
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
const onFindPokemonEvolution = function (data) {
  findPokemonEvolution(data)
    .then((data) => {
      const name = data.chain.evolves_to[0].species.name
      const pickButton = '.' + name + '-pick-button'
      const removeButton = '.' + name + '-remove-button'
      const useButton = '.' + name + '-use-button'
      const targetCard = '.' + name + '-card'
      // $(parent).toggle()
      // api.onGetOneItem(data)
      // const targetCard = $(this).attr('data-target')
      if ($(targetCard).hasClass('selected') === true) {
        console.log('You already have the evolved form. Try another pokemon!')
      } else {
      // const secondTarget = $(this).attr('data-second-target')
      // $(targetCard).removeClass('inspect')
      $(targetCard).toggle()
      $(pickButton).toggle()
      $(removeButton).toggle()
      $(useButton).toggle()
      console.log('Your pokemon has evolved into: ', name)
      $('#useItemModal').modal('hide')
    }
    })
}
const onGetOnePokemonId = function (data) {
  getOnePokemon(data)
    .then((data) => {
      onFindPokemonEvolution(data.id)
      console.log(data)
      console.log(data.id)
    })
    .catch((error) => console.log(error))
}
const onGetOnePokemon = function (data) {
  getOnePokemon(data)
    .then((data) => {
      const itemHTML = oneItemTemplate({ item: data })
      $('.pokemon-selection-board').append(itemHTML)
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
  onGetRareCandy,
  onGetOnePokemonId
}
