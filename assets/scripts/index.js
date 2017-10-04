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
  api.onGetRareCandy()
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
  // Home view
  $('#homeShow').on('click', function () {
    $('#location').text('Home')
    $('#pokemonView').hide()
    $('#pokemonSelect').hide()
    $('#storeView').hide()
    $('#itemView').hide()
    $('#menu').hide()
    $('#body').css('background-image', "url('https://i.imgur.com/dBgzE6u.jpg')")
  })
  // Store options
  $('#viewPokemonStore').on('click', function () {
    $('#pokemonBoard').show()
    $('#pokemonSelectionBoard').show()
    $('#itemBoard').hide()
    $('#itemSelectionBoard').hide()
  })
  $('#viewItemStore').on('click', function () {
    $('#itemBoard').show()
    $('#itemSelectionBoard').show()
    $('#pokemonBoard').hide()
    $('#pokemonSelectionBoard').hide()
  })
  $('#storeShow').on('click', function () {
    $('#storeView').show()
    $('#location').text('Store')
    $('#pokemonView').hide()
    $('#itemView').hide()
    $('#menu').hide()
    $('#body').css('background-image', "url('https://i.imgur.com/jnOhaDG.jpg')")
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
    const targetCard = '.' + item + '-selector-card'
    const classCheck = $(targetCard).hasClass('inspect')
    console.log(item)
    console.log(targetCard)
    console.log(classCheck)
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
      const targetCard = $(this).attr('data-target')
      const secondTarget = $(this).attr('data-second-target')
      $(targetCard).removeClass('inspect')
      $(secondTarget).hide()
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
    const card = $(this).attr('data-card')
    parent.toggle()
    $(data).show()
    $(card).remove()
    pokemonCount -= 1
    console.log(pokemonCount)
  })

  $('#itemBoard').on('click', '#pickItem', function (event) {
    if (itemCount < 10) {
      const parent = $(event.target).parent('div')
      parent.toggle()
      const data = $(this).attr('data-name')
      api.onGetOneItem(data)
      const targetCard = $(this).attr('data-target')
      const secondTarget = $(this).attr('data-second-target')
      $(targetCard).removeClass('inspect')
      $(secondTarget).hide()
      itemCount += 1
      console.log(itemCount)
    } else {
      console.log('max number of items reached!')
    }
  })
  $('#inspectItemBoard').on('click', '#addItem', function (event) {
    if (itemCount < 10) {
      const targetCard = $(this).attr('data-target')
      console.log(targetCard)
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
    const card = $(this).attr('data-card')
    parent.toggle()
    $(card).remove()
    $(data).show()
    itemCount -= 1
    console.log(itemCount)
  })

  // Pokemon view options
  $('#pokemonShow').on('click', function () {
    $('#location').text('Pokemon')
    $('#pokemonView').show()
    $('#pokemonSelect').show()
    $('#storeView').hide()
    $('#itemView').hide()
    $('#menu').hide()
    $('#body').css('background-image', 'none')
  })

  // Item view options
  $('#itemShow').on('click', function () {
    $('#location').text('Items')
    $('#itemView').show()
    $('#itemSelect').show()
    $('#pokemonView').hide()
    $('#storeView').hide()
    $('#menu').hide()
    $('#body').css('background-image', "url('https://i.imgur.com/4yT1BIZ.png')")
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
