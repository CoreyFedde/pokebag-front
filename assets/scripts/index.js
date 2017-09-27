'use strict'
const api = require('./api/api.js')
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
  $('#bodyText').on('click', api.onGetOneItem)
  $('#bodyText').on('click', api.onGetOnePokemon)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
