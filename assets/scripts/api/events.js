'use strict'
// const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetAllPokemon = function (event) {
  api.getAllPokemon()
    .then(ui.getAllPokemonSuccess)
    .catch((error) => console.log(error))
}
const onGetAllItems = function (event) {
  api.getAllItems()
    .then(ui.getAllItemsSuccess)
    .catch((error) => console.log(error))
}
const onInspectPokemon = function (data) {
  $('#inspectPokemonModal').modal('show')
  api.getOnePokemon(data)
    .then(ui.inspectPokemonSuccess)
    .catch((error) => console.log(error))
}
const onGetOnePokemon = function (data) {
  api.getOnePokemon(data)
    .then(ui.getOneItemSuccess)
    .catch((error) => console.log(error))
}
const onInspectItem = function (data) {
  $('#inspectItemModal').modal('show')
  api.getOneItem(data)
    .then(ui.inspectItemSuccess)
    .catch((error) => console.log(error))
}
const onGetOneItem = function (data) {
  api.getOneItem(data)
    .then(ui.getOneItemSuccess)
    .catch((error) => console.log(error))
}
const onGetOnePokemonEvolutionChain = function (data) {
  api.getOnePokemonEvolution(data)
    .then(ui.getPokemonEvolutionChainSuccess)
    .catch((error) => console.log(error))
}

const onGetOnePokemonEvolution = function (data) {
  api.getOnePokemonEvolution(data)
    .then((data) => {
      const url = data.evolution_chain.url
      onGetOnePokemonEvolutionChain(url)
    })
    .catch((error) => console.log(error))
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
