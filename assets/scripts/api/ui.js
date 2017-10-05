'use strict'

const inspectItemTemplate = require('../templates/inspect-item.handlebars')
const inspectPokemonTemplate = require('../templates/inspect-pokemon.handlebars')
const pokemonTemplate = require('../templates/show-all-pokemon.handlebars')
const itemTemplate = require('../templates/show-all-items.handlebars')
const oneItemTemplate = require('../templates/show-one-item.handlebars')

const getAllPokemonSuccess = (data) => {
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
  const inspectHTML = inspectPokemonTemplate({ pokemon: data })
  $('#inspectPokemonBoard').text('')
  $('#inspectPokemonBoard').append(inspectHTML)
}

const inspectItemSuccess = (data) => {
  const inspectHTML = inspectItemTemplate({ item: data })
  $('#inspectItemBoard').text('')
  $('#inspectItemBoard').append(inspectHTML)
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
  const originalPickButton = '.' + original + '-pick-button'
  const originalRemoveButton = '.' + original + '-remove-button'
  const originalUseButton = '.' + original + '-use-button'
  const firstEvoCard = '.' + firstEvolution + '-card'
  const firstPickButton = '.' + firstEvolution + '-pick-button'
  const firstRemoveButton = '.' + firstEvolution + '-remove-button'
  const firstUseButton = '.' + firstEvolution + '-use-button'
  const secondEvoCard = '.' + secondEvolution + '-card'
  const secondPickButton = '.' + secondEvolution + '-pick-button'
  const secondRemoveButton = '.' + secondEvolution + '-remove-button'
  const secondUseButton = '.' + secondEvolution + '-use-button'
  if ($(originalCard).hasClass('evolve') === true) {
    if ($(firstEvoCard).hasClass('selected') === true) {
      $('.text-box').text('You already have the evolved form. Try another pokemon!')
    } else {
      $(originalCard).toggle()
      $(originalCard).removeClass('selected')
      $(originalCard).removeClass('evolve')
      $(originalPickButton).toggle()
      $(originalRemoveButton).toggle()
      $(originalUseButton).toggle()
      $(firstEvoCard).toggle()
      $(firstEvoCard).addClass('selected')
      $(firstPickButton).toggle()
      $(firstRemoveButton).toggle()
      $(firstUseButton).toggle()
      $('.text-box').text(`Your pokemon evolved into ${firstEvolution}`)
    }
    $(originalCard).removeClass('evolve')
  } else if ($(firstEvoCard).hasClass('evolve') === true) {
    if ($(secondEvoCard).hasClass('selected') === true) {
      $('.text-box').text('You already have the evolved form. Try another pokemon!')
    } else {
      $(secondEvoCard).toggle()
      $(secondEvoCard).addClass('selected')
      $(secondPickButton).toggle()
      $(secondRemoveButton).toggle()
      $(secondUseButton).toggle()
      $(firstEvoCard).toggle()
      $(firstEvoCard).removeClass('selected')
      $(firstEvoCard).removeClass('evolve')
      $(firstPickButton).toggle()
      $(firstRemoveButton).toggle()
      $(firstUseButton).toggle()
      $('.text-box').text(`Your pokemon evolved into ${secondEvolution}`)
    }
    $(firstEvoCard).removeClass('evolve')
  } else if ($(secondEvoCard).hasClass('evolve') === true) {
    $('.text-box').text('That pokemon cannot be evolved')
    $(secondEvoCard).removeClass('evolve')
  }
  $('#useItemModal').modal('hide')
}

const productionError = (data) => {
  $('.text-box').text('There was an error! Please try again!')
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
