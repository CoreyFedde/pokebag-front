'use strict'
// const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetAllPokemon = function (event) {
  api.getAllPokemon()
    .then(ui.getAllPokemonSuccess)
    .catch(ui.productionError)
}
const onGetAllItems = function (event) {
  api.getAllItems()
    .then(ui.getAllItemsSuccess)
    .catch(ui.productionError)
}
const onInspectPokemon = function (data) {
  $('#inspectPokemonModal').modal('show')
  api.getOnePokemon(data)
    .then(ui.inspectPokemonSuccess)
    .catch(ui.productionError)
}
const onGetOnePokemon = function (data) {
  api.getOnePokemon(data)
    .then(ui.getOneItemSuccess)
    .catch(ui.productionError)
}
const onInspectItem = function (data) {
  $('#inspectItemModal').modal('show')
  api.getOneItem(data)
    .then(ui.inspectItemSuccess)
    .catch(ui.productionError)
}
const onGetOneItem = function (data) {
  api.getOneItem(data)
    .then(ui.getOneItemSuccess)
    .catch(ui.productionError)
}
const onGetOnePokemonEvolutionChain = function (data) {
  api.getOnePokemonEvolution(data)
    .then(ui.getPokemonEvolutionChainSuccess)
    .catch(ui.productionError)
}
// These may look confusing, but basically the first get request finds the URL
// The onGetOnePokemonEvolutionChain follows the URL and grabs the possible
// evolutions and checks if the User's pokemon can be evolved.
// Better explained in the UI file
const onGetOnePokemonEvolution = function (data) {
  api.getOnePokemonEvolution(data)
    .then((data) => {
      const url = data.evolution_chain.url
      onGetOnePokemonEvolutionChain(url)
    })
    .catch(ui.productionError)
}

module.exports = {
  onGetAllPokemon,
  onGetAllItems,
  onGetOnePokemon,
  onGetOneItem,
  onInspectPokemon,
  onInspectItem,
  onGetOnePokemonEvolution
}
