'use strict'
const api = require('.././api/events.js')

const setPokemonStoreView = function () {
  $('.text-box').text('Remember: You can only take 6 pokemon with you!')
  $('#pokemonBoard').show()
  $('#pokemonSelectionBoard').show()
  $('#itemBoard').hide()
  $('#itemSelectionBoard').hide()
}

const setItemStoreView = function () {
  $('.text-box').text('Remember: You can only take 10 items total! That rare-candy looks good...')
  $('#itemBoard').show()
  $('#itemSelectionBoard').show()
  $('#pokemonBoard').hide()
  $('#pokemonSelectionBoard').hide()
}

const setStoreView = function () {
  $('.text-box').text('Welcome to the store. Take your time...')
  $('#storeView').show()
  $('#location').text('Store')
  $('#pokemonView').hide()
  $('#itemView').hide()
  $('#menu').hide()
  $('#body').css('background-image', "url('https://i.imgur.com/jnOhaDG.jpg')")
  $('#storeModal').modal('toggle')
}

const modalSetPokemonStoreView = function () {
  $('#pokemonBoard').show()
  $('#pokemonSelectionBoard').show()
  $('#itemBoard').hide()
  $('#itemSelectionBoard').hide()
  $('#storeModal').modal('toggle')
}
const modalSetItemStoreView = function () {
  $('#itemBoard').show()
  $('#itemSelectionBoard').show()
  $('#pokemonBoard').hide()
  $('#pokemonSelectionBoard').hide()
  $('#storeModal').modal('toggle')
}

const inspectItem = function (event) {
  const data = $(this).attr('data-name')
  api.onInspectItem(data)
}

const inspectPokemon = function (event) {
  const data = $(this).attr('data-name')
  api.onInspectPokemon(data)
}
const useStoreItem = function (event) {
  $('.text-box').text('Navigate to "Items" to use items!')
}
// Store options
$('#viewPokemonStore').on('click', setPokemonStoreView)
$('#viewItemStore').on('click', setItemStoreView)
$('#storeShow').on('click', setStoreView)
$('#pokemonStoreButton').on('click', modalSetPokemonStoreView)
$('#itemStoreButton').on('click', modalSetItemStoreView)
$('#itemBoard').on('click', '#inspectItem', inspectItem)
$('#pokemonBoard').on('click', '#inspectPokemon', inspectPokemon)
$('.item-selection-board').on('click', '#useItem', useStoreItem)
// $('#pokemonBoard').on('click', '#pickPokemon', function (event) {
//   if (pokemonCount < 6) {
//
//     pokemonCount += 1
//     console.log(pokemonCount)
//   } else {
//     console.log('max number of pokemon reached!')
//   }
// })
// $('#pokemonSelectionBoard').on('click', '#removePokemon', function (event) {
//   pokemonCount -= 1
//   console.log(pokemonCount)
// })
// $('#itemBoard').on('click', '#pickItem', function (event) {
//   if (itemCount < 10) {
//
//     itemCount += 1
//     console.log(itemCount)
//   } else {
//     console.log('max number of items reached!')
//   }
// })
// $('.item-selection-board').on('click', '#removeItem', function (event) {
//
//   itemCount -= 1
//   console.log(itemCount)
// })

const addHandlers = function () {
  $('#viewPokemonStore').on('click', setPokemonStoreView)
  $('#viewItemStore').on('click', setItemStoreView)
  $('#storeShow').on('click', setStoreView)
  $('#pokemonStoreButton').on('click', modalSetPokemonStoreView)
  $('#itemStoreButton').on('click', modalSetItemStoreView)
  $('#itemBoard').on('click', '#inspectItem', inspectItem)
  $('#pokemonBoard').on('click', '#inspectPokemon', inspectPokemon)
  $('.item-selection-board').on('click', '#useItem', useStoreItem)
}

module.exports = {
  addHandlers
}
