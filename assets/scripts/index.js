'use strict'
const api = require('./api/api.js')
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
  api.onGetAllItems()
  api.onGetAllPokemon()
  // $('#bodyText').on('click', api.onGetAllItems)
  // $('#bodyText').on('click', api.onGetAllPokemon)
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
    $('#storeView').show()
    $('#pokemonView').hide()
    $('#itemView').hide()
    $('#menu').hide()
    $('#body').css('background-image', "url('https://cdn.bulbagarden.net/upload/f/f8/Pok%C3%A9_Mart_interior_FRLG.png')")
    $('#storeModal').modal('toggle')
  })
  $('#pokemonStoreButton').on('click', function () {
    $('#pokemonBoard').show()
    $('#pokemonSelectionBoard').show()
    $('#itemBoard').hide()
    $('#itemSelectionBoard').hide()
    $('#storeModal').modal('toggle')
  })
  $('#itemStoreButton').on('click', function () {
    $('#itemBoard').show()
    $('#itemSelectionBoard').show()
    $('#pokemonBoard').hide()
    $('#pokemonSelectionBoard').hide()
    $('#storeModal').modal('toggle')
  })
  $('#pokemonBoard').on('click', '#pickPokemon', function (event) {
    const parent = $(event.target).parent('div')
    parent.toggle()
    const data = $(this).attr('data-name')
    api.onGetOnePokemon(data)
  })
  $('#inspectPokemonBoard').on('click', '#addPokemon', function (event) {
    const parent = $(event.target).parent('div')
    parent.toggle()
    let targetCard = $(this).attr('data-target')
    let secondTarget = $(this).attr('data-second-target')
    $(targetCard).show()
    $(secondTarget).hide()
    // const data = $(this).attr('data-name')
    // console.log(this)
    // api.onGetOnePokemon(data)
  })
  $('#pokemonBoard').on('click', '#inspectPokemon', function (event) {
    // const parent = $(event.target).parent('div')
    // parent.css('background-color', 'red')
    const data = $(this).attr('data-name')
    api.onInspectPokemon(data)
  })
  $('#pokemonSelectionBoard').on('click', '#removePokemon', function (event) {
    const data = $(this).attr('data-target')
    const parent = $(event.target).parent('div')
    parent.toggle()
    $(data).show()
  })
  $('#itemBoard').on('click', '#pickItem', function (event) {
    const parent = $(event.target).parent('div')
    parent.toggle()
    const data = $(this).attr('data-name')
    // console.log(this)
    api.onGetOneItem(data)
  })
  $('#itemSelectionBoard').on('click', '#removeItem', function (event) {
    const data = $(this).attr('data-target')
    const parent = $(event.target).parent('div')
    parent.toggle()
    $(data).show()
  })

  // Pokemon view options
  $('#pokemonShow').on('click', function () {
    $('#pokemonView').show()
    $('#pokemonSelect').show()
    $('#storeView').hide()
    $('#itemView').hide()
    $('#menu').hide()
    $('#body').css('background-image', "url('https://i.imgur.com/OWtmgr7.png')")
  })

  // Item view options
  $('#itemShow').on('click', function () {
    $('#itemView').show()
    $('#itemSelect').show()
    $('#pokemonView').hide()
    $('#storeView').hide()
    $('#menu').hide()
    $('#body').css('background-image', "url('https://i.imgur.com/DoyaAtv.png')")
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
