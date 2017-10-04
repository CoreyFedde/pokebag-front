'use strict'
const api = require('./api/events.js')
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const store = require('./views/store-view.js')
const home = require('./views/home-view.js')
const pokemon = require('./views/pokemon-view.js')
const item = require('./views/item-view.js')

const selectPokemon = function () {
  const data = $(this).attr('data-name')
  const pickButton = '.' + data + '-pick-button'
  const removeButton = '.' + data + '-remove-button'
  const useButton = '.' + data + '-use-button'
  const targetCard = $(this).attr('data-target')
  $(targetCard).toggle()
  $(targetCard).addClass('selected')
  $(pickButton).toggle()
  $(removeButton).toggle()
  $(useButton).toggle()
}
const removePokemon = function () {
  const data = $(this).attr('data-name')
  const pickButton = '.' + data + '-pick-button'
  const removeButton = '.' + data + '-remove-button'
  const useButton = '.' + data + '-use-button'
  const targetCard = $(this).attr('data-target')
  $(targetCard).toggle()
  $(targetCard).removeClass('selected')
  $(pickButton).toggle()
  $(removeButton).toggle()
  $(useButton).toggle()
}
const selectItem = function () {
  const data = $(this).attr('data-name')
  const pickButton = '.' + data + '-pick-button'
  const removeButton = '.' + data + '-remove-button'
  const useButton = '.' + data + '-use-button'
  const targetCard = $(this).attr('data-target')
  $(targetCard).toggle()
  $(pickButton).toggle()
  $(removeButton).toggle()
  $(useButton).toggle()
}
const removeItem = function () {
  const data = $(this).attr('data-name')
  const pickButton = '.' + data + '-pick-button'
  const removeButton = '.' + data + '-remove-button'
  const useButton = '.' + data + '-use-button'
  const targetCard = $(this).attr('data-target')
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
  // api.onGetRareCandy()
  // $('#bodyText').on('click', api.onGetAllItems)
  // $('#bodyText').on('click', api.onGetAllPokemon)
  $('#menu').hide()
  $('#storeView').hide()
  $('#pokemonBoard').hide()
  $('#itemBoard').hide()
  $('#pokemonView').hide()
  $('#itemView').hide()
  // Home view
  home.addHandlers()
  // Store options
  store.addHandlers()
  $('#pokemonBoard').on('click', '#pickPokemon', function (event) {
    if (pokemonCount < 6) {
      const data = $(this).attr('data-name')
      const pickButton = '.' + data + '-pick-button'
      const removeButton = '.' + data + '-remove-button'
      const useButton = '.' + data + '-use-button'
      // const parent = '#' + data + 'Card'
      // $(parent).toggle()
      // api.onGetOnePokemon(data)
      const targetCard = $(this).attr('data-target')
      // const secondTarget = $(this).attr('data-second-target')
      // console.log(secondTarget)
      // $(targetCard).removeClass('inspect')
      // $(secondTarget).toggle()
      // $(targetCard).show()
      $(targetCard).toggle()
      $(targetCard).addClass('selected')
      $(pickButton).toggle()
      $(removeButton).toggle()
      $(useButton).toggle()
      pokemonCount += 1
      console.log(pokemonCount)
    } else {
      console.log('max number of pokemon reached!')
    }
  })
  $('#pokemonSelectionBoard').on('click', '#removePokemon', function (event) {
    const data = $(this).attr('data-name')
    const pickButton = '.' + data + '-pick-button'
    const removeButton = '.' + data + '-remove-button'
    const useButton = '.' + data + '-use-button'
    const targetCard = $(this).attr('data-target')
    $(targetCard).toggle()
    $(targetCard).removeClass('selected')
    $(pickButton).toggle()
    $(removeButton).toggle()
    $(useButton).toggle()
    // $(data).show()
    // $(card).remove()
    pokemonCount -= 1
    console.log(pokemonCount)
  })

  $('#itemBoard').on('click', '#pickItem', function (event) {
    if (itemCount < 10) {
      const data = $(this).attr('data-name')
      const pickButton = '.' + data + '-pick-button'
      const removeButton = '.' + data + '-remove-button'
      const useButton = '.' + data + '-use-button'
      // const parent = '#' + data + 'Card'
      // $(parent).toggle()
      // api.onGetOneItem(data)
      const targetCard = $(this).attr('data-target')
      // const secondTarget = $(this).attr('data-second-target')
      // $(targetCard).removeClass('inspect')
      $(targetCard).toggle()
      $(pickButton).toggle()
      $(removeButton).toggle()
      $(useButton).toggle()
      itemCount += 1
      console.log(itemCount)
    } else {
      console.log('max number of items reached!')
    }
  })
  $('.item-selection-board').on('click', '#removeItem', function (event) {
    const data = $(this).attr('data-name')
    const pickButton = '.' + data + '-pick-button'
    const removeButton = '.' + data + '-remove-button'
    const useButton = '.' + data + '-use-button'
    // const parent = '#' + data + 'Card'
    // $(parent).toggle()
    // api.onGetOneItem(data)
    const targetCard = $(this).attr('data-target')
    // const secondTarget = $(this).attr('data-second-target')
    // $(targetCard).removeClass('inspect')
    $(targetCard).toggle()
    $(pickButton).toggle()
    $(removeButton).toggle()
    $(useButton).toggle()
    // const data = $(this).attr('data-target')
    // const parent = $(event.target).parent('div')
    // const card = $(this).attr('data-card')
    // parent.toggle()
    // $(card).remove()
    // $(data).show()
    itemCount -= 1
    console.log(itemCount)
  })
  $('.item-selection-board').on('click', '#useItem', function (event) {
    console.log('Navigate to "Items" to use items!')
  })

  // Pokemon view options
  pokemon.addHandlers()
  $('.pokemon-view-board').on('click', '#removePokemon', function (event) {
    const data = $(this).attr('data-name')
    const pickButton = '.' + data + '-pick-button'
    const removeButton = '.' + data + '-remove-button'
    const useButton = '.' + data + '-use-button'
    const targetCard = $(this).attr('data-target')
    $(targetCard).toggle()
    $(targetCard).removeClass('selected')
    $(pickButton).toggle()
    $(removeButton).toggle()
    $(useButton).toggle()
    // $(data).show()
    // $(card).remove()
    pokemonCount -= 1
    console.log(pokemonCount)
  })

  // Item view options
  item.addHandlers()
  $('.item-view-board').on('click', '#removeItem', function (event) {
    const data = $(this).attr('data-name')
    const pickButton = '.' + data + '-pick-button'
    const removeButton = '.' + data + '-remove-button'
    const useButton = '.' + data + '-use-button'
    // const parent = '#' + data + 'Card'
    // $(parent).toggle()
    // api.onGetOneItem(data)
    const targetCard = $(this).attr('data-target')
    // const secondTarget = $(this).attr('data-second-target')
    // $(targetCard).removeClass('inspect')
    $(targetCard).toggle()
    $(pickButton).toggle()
    $(removeButton).toggle()
    $(useButton).toggle()
    // const data = $(this).attr('data-target')
    // const parent = $(event.target).parent('div')
    // const card = $(this).attr('data-card')
    // parent.toggle()
    // $(card).remove()
    // $(data).show()
    itemCount -= 1
    console.log(itemCount)
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
