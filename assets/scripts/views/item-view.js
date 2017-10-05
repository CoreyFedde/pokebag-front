'use strict'
const api = require('.././api/events.js')

const setItemView = function () {
  $('.text-box').text('Look at your items. I bet you could use a rare-candy! Change your invetory in the store')
  $('#location').text('Items')
  $('#itemView').show()
  $('#itemSelect').show()
  $('#pokemonView').hide()
  $('#storeView').hide()
  $('#menu').hide()
  $('#body').css('background-image', "url('https://i.imgur.com/4yT1BIZ.png')")
}
const inspectItem = function (event) {
  const data = $(this).attr('data-name')
  api.onInspectItem(data)
}
const selectUseItem = function () {
  const data = $(this).attr('data-url')
  const targetCard = '.' + $(this).attr('data-name') + '-card'
  $(targetCard).addClass('evolve')
  api.onGetOnePokemonEvolution(data)
}
const setUseItem = function (event) {
  const data = $(this).attr('data-name')
  const pokeArray = []
  $('#useItemModal').modal('show')
  $('#useItemBoard ul').empty()
  if (data === 'rare-candy') {
    $('.selected').each(function () {
      const pokemonName = $(this).attr('data-name')
      const pokemonUrl = $(this).attr('data-url')
      if (pokeArray.indexOf(pokemonName) === -1) {
        pokeArray.push(pokemonName)
        $('#useItemBoard ul').append(`<li class="${pokemonName}-evolve-card pokemon-use-list" data-name="${pokemonName}" data-url="${pokemonUrl}"><h3>${pokemonName}</h3><li>`)
      }
    })
  } else {
    $('.text-box').text('It is not time to use that item right now')
  }
}
// Item view options

const addHandlers = function () {
  $('#itemShow').on('click', setItemView)
  $('.item-selection-board').on('click', '#inspectItem', inspectItem)
  $('.item-view-board').on('click', '#inspectItem', inspectItem)
  $('.item-view-board').on('click', '#useItem', setUseItem)
  $('#useItemBoard').on('click', '.pokemon-use-list', selectUseItem)
}

module.exports = {
  addHandlers
}
