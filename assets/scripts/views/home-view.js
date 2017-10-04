'use strict'

const closeMenu = function () {
  $('#menu').hide()
}
const openMenu = function () {
  $('#menu').toggle()
}
const setHomeView = function () {
  $('#location').text('Home')
  $('#pokemonView').hide()
  $('#pokemonSelect').hide()
  $('#storeView').hide()
  $('#itemView').hide()
  $('#menu').hide()
  $('#body').css('background-image', "url('https://i.imgur.com/dBgzE6u.jpg')")
}

const addHandlers = function () {
  $('#closeMenu').on('click', closeMenu)
  $('#testButton').on('click', openMenu)
  $('#homeShow').on('click', setHomeView)
}

module.exports = {
  addHandlers
}
