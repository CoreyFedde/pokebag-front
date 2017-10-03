'use strict'
const api = require('./api/api.js')
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  let pokemonCount = 0
  let itemCount = 0
  setAPIOrigin(location, config)
  api.onGetAllItems()
  api.onGetAllPokemon()
  // $('#bodyText').on('click', api.onGetAllItems)
  // $('#bodyText').on('click', api.onGetAllPokemon)
  $('#menu').hide()
  $('#closeMenu').on('click', function () {
    $('#menu').hide()
  })
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
  $('#inspectItemModal').on('hidden.bs.modal', function (e) {
    const item = $('#inspectModalItem').text()
    const targetCard = '#' + item + 'SelectorCard'
    const classCheck = $(targetCard).hasClass('inspect')
    if (classCheck === true) {
      $(targetCard).remove()
    }
    $('#inspectItemBoard').text('Loading...')
  })
  $('#itemBoard').on('click', '#inspectItem', function (event) {
    const data = $(this).attr('data-name')
    api.onInspectItem(data)
  })
  $('#inspectPokemonModal').on('hidden.bs.modal', function (e) {
    const pokemon = $('#inspectModalPokemon').text()
    const targetCard = '#' + pokemon + 'SelectorCard'
    const classCheck = $(targetCard).hasClass('inspect')
    if (classCheck === true) {
      $(targetCard).remove()
    }
    $('#inspectPokemonBoard').text('Loading...')
  })
  $('#pokemonBoard').on('click', '#inspectPokemon', function (event) {
    // const parent = $(event.target).parent('div')
    // parent.css('background-color', 'red')
    const data = $(this).attr('data-name')
    api.onInspectPokemon(data)
  })

  $('#pokemonBoard').on('click', '#pickPokemon', function (event) {
    if (pokemonCount < 6) {
      const parent = $(event.target).parent('div')
      parent.toggle()
      const data = $(this).attr('data-name')
      api.onGetOnePokemon(data)
      pokemonCount += 1
      console.log(pokemonCount)
    } else {
      console.log('max number of pokemon reached!')
    }
  })
  $('#inspectPokemonBoard').on('click', '#addPokemon', function (event) {
    if (pokemonCount < 6) {
      const targetCard = $(this).attr('data-target')
      const secondTarget = $(this).attr('data-second-target')
      $(targetCard).show()
      $(targetCard).removeClass('inspect')
      $(secondTarget).hide()
      $('#inspectPokemonModal').modal('hide')
      pokemonCount += 1
      console.log(pokemonCount)
    } else {
      console.log('max number of pokemon reached!')
    }
  })
  $('#pokemonSelectionBoard').on('click', '#removePokemon', function (event) {
    const data = $(this).attr('data-target')
    const parent = $(event.target).parent('div')
    parent.toggle()
    $(data).show()
    pokemonCount -= 1
    console.log(pokemonCount)
  })

  $('#itemBoard').on('click', '#pickItem', function (event) {
    if (itemCount < 10) {
      const parent = $(event.target).parent('div')
      parent.toggle()
      const data = $(this).attr('data-name')
      api.onGetOneItem(data)
      itemCount += 1
      console.log(itemCount)
    } else {
      console.log('max number of items reached!')
    }
  })
  $('#inspectItemBoard').on('click', '#addItem', function (event) {
    if (itemCount < 10) {
      const targetCard = $(this).attr('data-target')
      const secondTarget = $(this).attr('data-second-target')
      $(targetCard).show()
      $(targetCard).removeClass('inspect')
      $(secondTarget).hide()
      $('#inspectItemModal').modal('hide')
      itemCount += 1
      console.log(itemCount)
    } else {
      console.log('max number of items reached!')
    }
  })
  $('#itemSelectionBoard').on('click', '#removeItem', function (event) {
    const data = $(this).attr('data-target')
    const parent = $(event.target).parent('div')
    parent.toggle()
    $(data).show()
    itemCount -= 1
    console.log(itemCount)
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
