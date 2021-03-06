'use strict'
const api = require('.././api/events.js')

const setPokemonView = function () {
  $('.text-box').text('Take a look at your Pokemon team! Change your team in the store if you want.')
  $('#location').text('Pokemon')
  $('#pokemonView').show()
  $('#pokemonSelect').show()
  $('#storeView').hide()
  $('#itemView').hide()
  $('#menu').hide()
  $('#body').css('background-image', 'none')
}
const inspectPokemon = function (event) {
  const data = $(this).attr('data-name')
  api.onInspectPokemon(data)
}
// Pokemon view options

const addHandlers = function () {
  $('#pokemonShow').on('click', setPokemonView)
  $('.pokemon-view-board').on('click', '#inspectPokemon', inspectPokemon)
  $('.pokemon-selection-board').on('click', '#inspectPokemon', inspectPokemon)
}

module.exports = {
  addHandlers
}
