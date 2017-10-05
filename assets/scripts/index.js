'use strict'
const api = require('./api/events.js')
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const store = require('./views/store-view.js')
const home = require('./views/home-view.js')
const pokemon = require('./views/pokemon-view.js')
const item = require('./views/item-view.js')

// function for selecting Pokemon
const selectPokemon = function (data) {
  // Grabs the name of the pokemon selected via an attribute in the templates
  // name data-name
  const name = $(data).attr('data-name')
  // This function uses the name of the pokmon to get the specific class
  // Classes were used because there are multiple cards being made, so IDs would
  // not be unique
  const pickButton = '.' + name + '-pick-button'
  const removeButton = '.' + name + '-remove-button'
  const useButton = '.' + name + '-use-button'
  // The data target is the specific card wanted
  const targetCard = $(data).attr('data-target')
  // By toggling the card, any cards already shown will be hidden, and hidden
  // cards will be shown
  $(targetCard).toggle()
  // Add class "selected" to shown cards so other functions know this pokemon is
  // part of the user's team
  $(targetCard).addClass('selected')
  // These functions hide and show the relevant options on the pokemon card
  $(pickButton).toggle()
  $(removeButton).toggle()
  $(useButton).toggle()
}
const removePokemon = function (data) {
  const name = $(data).attr('data-name')
  const pickButton = '.' + name + '-pick-button'
  const removeButton = '.' + name + '-remove-button'
  const useButton = '.' + name + '-use-button'
  const targetCard = $(data).attr('data-target')
  $(targetCard).toggle()
  $(targetCard).removeClass('selected')
  $(pickButton).toggle()
  $(removeButton).toggle()
  $(useButton).toggle()
}
const selectItem = function (data) {
  const name = $(data).attr('data-name')
  const pickButton = '.' + name + '-pick-button'
  const removeButton = '.' + name + '-remove-button'
  const useButton = '.' + name + '-use-button'
  const targetCard = $(data).attr('data-target')
  $(targetCard).toggle()
  $(pickButton).toggle()
  $(removeButton).toggle()
  $(useButton).toggle()
}
const removeItem = function (data) {
  const name = $(data).attr('data-name')
  const pickButton = '.' + name + '-pick-button'
  const removeButton = '.' + name + '-remove-button'
  const useButton = '.' + name + '-use-button'
  const targetCard = $(data).attr('data-target')
  $(targetCard).toggle()
  $(pickButton).toggle()
  $(removeButton).toggle()
  $(useButton).toggle()
}
$(() => {
  let pokemonCount = 0
  let itemCount = 0
  setAPIOrigin(location, config)
  api.onGetAllItems()
  api.onGetAllPokemon()
  // The addHandlers have the basic listeners needed for each view
  home.addHandlers()
  store.addHandlers()
  pokemon.addHandlers()
  item.addHandlers()
  $('.text-box').hide()
  $('#menu').hide()
  $('#storeView').hide()
  $('#pokemonBoard').hide()
  $('#itemBoard').hide()
  $('#pokemonView').hide()
  $('#itemView').hide()
  // Store options
  $('#pokemonBoard').on('click', '#pickPokemon', function (event) {
    if (pokemonCount < 6) {
      selectPokemon(this)
      pokemonCount += 1
      $('.text-box').text(`You have chosen ${pokemonCount}/6 pokemon so far!`)
    } else {
      console.log('max number of pokemon reached!')
    }
  })
  $('#pokemonSelectionBoard').on('click', '#removePokemon', function (event) {
    removePokemon(this)
    pokemonCount -= 1
    $('.text-box').text(`You have chosen ${pokemonCount}/6 pokemon so far!`)
  })

  $('#itemBoard').on('click', '#pickItem', function (event) {
    if (itemCount < 10) {
      selectItem(this)
      itemCount += 1
      $('.text-box').text(`You have chosen ${itemCount}/10 pokemon so far!`)
    } else {
      console.log('max number of items reached!')
    }
  })
  $('.item-selection-board').on('click', '#removeItem', function (event) {
    removeItem(this)
    itemCount -= 1
    $('.text-box').text(`You have chosen ${itemCount}/10 pokemon so far!`)
  })
  $('.item-selection-board').on('click', '#useItem', function (event) {
    console.log('Navigate to "Items" to use items!')
  })

  // Pokemon view options
  $('.pokemon-view-board').on('click', '#removePokemon', function (event) {
    removePokemon(this)
    pokemonCount -= 1
  })

  // Item view options
  $('.item-view-board').on('click', '#removeItem', function (event) {
    removeItem(this)
    itemCount -= 1
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
