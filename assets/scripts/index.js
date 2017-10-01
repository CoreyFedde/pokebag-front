'use strict'
const api = require('./api/api.js')
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
  $('#bodyText').on('click', api.onGetAllItems)
  $('#bodyText').on('click', api.onGetAllPokemon)
  $('#menu').hide()
  $('#storeView').hide()
  $('#pokemonView').hide()
  $('#itemView').hide()
  $('#testButton').on('click', function () {
    $('#menu').toggle()
  })
  $('#storeShow').on('click', function () {
    $('#storeView').toggle()
    $('#pokemonView').hide()
    $('#itemView').hide()
  })
  $('#pokemonShow').on('click', function () {
    $('#pokemonView').toggle()
    $('#storeView').hide()
    $('#itemView').hide()
  })
  $('#itemShow').on('click', function () {
    $('#itemView').toggle()
    $('#pokemonView').hide()
    $('#storeView').hide()
  })
  $('#pokemonBoard').on('click', '.pokemon-selector', function (event) {
    const parent = $(event.target).parent('div')
    parent.css('background-color', 'green')
  })
  // $('#pokemonSelector').on('click', function (event) {
  //   $(event.target).css('border', 'green')
  // })
})

// On page load, we will need to randomly assign pokemon and items
// Pokemon will be given random stats and level
// Items will each be quantity of 1

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
