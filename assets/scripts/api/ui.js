'use strict'

// const store = require('../store.js')
// const api = require('./api.js')
const inspectItemTemplate = require('../templates/inspect-item.handlebars')
const inspectPokemonTemplate = require('../templates/inspect-pokemon.handlebars')
// const onePokemonTemplate = require('../templates/show-one-pokemon.handlebars')
const pokemonTemplate = require('../templates/show-all-pokemon.handlebars')
const itemTemplate = require('../templates/show-all-items.handlebars')
const oneItemTemplate = require('../templates/show-one-item.handlebars')
// const rareTemplate = require('../templates/show-rare-candy.handlebars')

const getAllPokemonSuccess = (data) => {
  console.log(data.pokemon_species)
  const pokemonHTML = pokemonTemplate({ pokemons: data.pokemon_species })
  $('#pokemonBoard').append(pokemonHTML)
  $('.pokemon-selection-board').append(pokemonHTML)
  $('.pokemon-view-board').append(pokemonHTML)
}

const getAllItemsSuccess = (data) => {
  const itemHTML = itemTemplate({ items: data.results })
  $('#itemBoard').append(itemHTML)
  $('.item-selection-board').append(itemHTML)
  $('.item-view-board').append(itemHTML)
}

const inspectPokemonSuccess = (data) => {
  // const targetCard = '#' + data.name + 'SelectorCard'
  // const targetCard = '.' + data.name + '-selector-card'
  const inspectHTML = inspectPokemonTemplate({ pokemon: data })
  $('#inspectPokemonBoard').text('')
  $('#inspectPokemonBoard').append(inspectHTML)
  // const pokemonHTML = onePokemonTemplate({ pokemon: data })
  // $('.pokemon-selection-board').append(pokemonHTML)
  // $('.pokemon-view-board').append(pokemonHTML)
  // $(targetCard).hide()
  // $(targetCard).hasClass()
}

const inspectItemSuccess = (data) => {
  // const targetCard = '.' + data.name + '-selector-card'
  const inspectHTML = inspectItemTemplate({ item: data })
  $('#inspectItemBoard').text('')
  $('#inspectItemBoard').append(inspectHTML)
  // const itemHTML = oneItemTemplate({ item: data })
  // $('.item-selection-board').append(itemHTML)
  // $(targetCard).hide()
  // $(targetCard).hasClass()
}

const getOneItemSuccess = (data) => {
  const itemHTML = oneItemTemplate({ item: data })
  $('.item-selection-board').append(itemHTML)
  $('.inspect-button').hide()
  $('.use-button').hide()
}

const getOnePokemonSuccess = (data) => {
  const itemHTML = oneItemTemplate({ item: data })
  $('.pokemon-selection-board').append(itemHTML)
}

const getPokemonEvolutionChainSuccess = (data) => {
  const original = data.chain.species.name
  const firstEvolution = data.chain.evolves_to[0].species.name
  const secondEvolution = data.chain.evolves_to[0].evolves_to[0].species.name
  const originalCard = '.' + original + '-card'
  const firstEvoCard = '.' + firstEvolution + '-card'
  const secondEvoCard = '.' + secondEvolution + '-card'
  if ($(originalCard).hasClass('evolve') === true) {
    if ($(firstEvoCard).hasClass('selected') === true) {
      console.log('You already have the evolved form. Try another pokemon!')
    } else {
      console.log(firstEvolution)
    }
    $(originalCard).removeClass('evolve')
  } else if ($(firstEvoCard).hasClass('evolve') === true) {
    if ($(secondEvoCard).hasClass('selected') === true) {
      console.log('You already have the evolved form. Try another pokemon!')
    } else {
      console.log(secondEvolution)
    }
    $(firstEvoCard).removeClass('evolve')
  } else if ($(secondEvoCard).hasClass('evolve') === true) {
    console.log('cannot be evolved')
    $(secondEvoCard).removeClass('evolve')
  }
  $('#useItemModal').modal('hide')
}

const productionError = (data) => {
  console.log('There was an error! Please try again!')
}

module.exports = {
  getAllPokemonSuccess,
  getAllItemsSuccess,
  inspectPokemonSuccess,
  inspectItemSuccess,
  getOneItemSuccess,
  getOnePokemonSuccess,
  getPokemonEvolutionChainSuccess,
  productionError
}
