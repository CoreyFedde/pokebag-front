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
  $('#pokemonBoard').hide()
  $('#itemBoard').hide()
  $('#pokemonView').hide()
  $('#itemView').hide()
  $('#testButton').on('click', function () {
    $('#menu').toggle()
  })
  // Store options
  $('#storeShow').on('click', function () {
    $('#storeView').toggle()
    $('#pokemonView').hide()
    $('#itemView').hide()
    $('#menu').hide()
    $('#body').css('background-image', "url('https://cdn.bulbagarden.net/upload/f/f8/Pok%C3%A9_Mart_interior_FRLG.png')")
    $('#storeModal').modal('toggle')
  })
  $('#pokemonStoreButton').on('click', function () {
    $('#pokemonBoard').show()
    $('#storeModal').modal('toggle')
  })
  $('#itemStoreButton').on('click', function () {
    $('#itemBoard').show()
    $('#storeModal').modal('toggle')
  })

  // Pokemon view options
  $('#pokemonShow').on('click', function () {
    $('#pokemonView').toggle()
    $('#storeView').hide()
    $('#itemView').hide()
    $('#menu').hide()
  })

  // Item view options
  $('#itemShow').on('click', function () {
    $('#itemView').toggle()
    $('#pokemonView').hide()
    $('#storeView').hide()
    $('#menu').hide()
  })
  $('#pokemonBoard').on('click', '.pokemon-selector', function (event) {
    const parent = $(event.target).parent('div')
    parent.toggle()
    let data = $(this).attr('data-name')
    // console.log(this)
    api.onGetOnePokemon(data)
    console.log()
    console.log('Calling single ajax request for left!')
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
