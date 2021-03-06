'use strict'

// const todosPokemons = async () => {
//     const url = `https://pokeapi.co/api/v2/pokemon`
//     const response = await fetch(url)
//     const data = await response.json()
//     return data.results
// }

const container = document.querySelector('#container-cards')
let index = 1
const pokemons = []

const pesquisarPokemon = async (index) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${index}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const criarCard = async (pokemon) => {

    let card = document.createElement('div')
    let imageContainer = document.createElement('div')
    let image = document.createElement('img')
    let divNumNome = document.createElement('div')
    let divNumero = document.createElement('div')
    let numero = document.createElement('p')
    let divNome = document.createElement('div')
    let nome = document.createElement('p')

    card.setAttribute("class", "card")
    imageContainer.setAttribute("class", "image-container")
    image.setAttribute("src", `${pokemon.sprites.front_default}`)
    divNumNome.setAttribute("class", "divNumNome")
    divNumero.setAttribute("class", "divNumero")
    numero.setAttribute("class", "numero")
    numero.textContent = `${pokemon.id}`
    divNome.setAttribute("class", "divNome")
    nome.setAttribute("class", "nome")
    nome.textContent = `${pokemon.name}`

    imageContainer.appendChild(image)
    card.appendChild(imageContainer)
    divNumero.appendChild(numero)
    card.appendChild(divNumero)
    divNome.appendChild(nome)
    card.appendChild(divNome)
    divNumNome.appendChild(divNumero)
    divNumNome.appendChild(divNome)
    card.appendChild(divNumNome)
    
    return card
}

const gerarCards = async () => {
    while(index <= 151) {
        const pokemon = await pesquisarPokemon(index)
        pokemons.push(await criarCard(pokemon))
        index++
    }

    container.setAttribute("class", "container-cards")
    container.replaceChildren(...pokemons)
}

gerarCards()

export {pesquisarPokemon, criarCard, gerarCards}














 
