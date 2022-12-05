import React from "react";
import Pokedex from "./Pokedex";


const PokeGame = (props) => {

    const hand1 = []
    const hand2 = [...props.pokemon]

    while( hand1.length < hand2.length) {
        // take a random pokemon from hand 2, add it to hand 1
      const randomIdx = Math.floor(Math.random() * hand2.length)
        // return Object
      let randomPokemonObject = hand2.splice(randomIdx, 1)[0]
        // return Array
       // let randomPokemonArray = hand2.splice(randomIdx, 1)
      hand1.push(randomPokemonObject)
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    console.log("Experience1", exp1)
    console.log("Experience2", exp2)


    return (
        <div>
            <Pokedex
            pokemon={hand1} name='Player-1' experience={exp1} isWinner={exp1 > exp2}  />
            <Pokedex
            pokemon ={hand2} name='Player-2' experience={exp2} isWinner={exp2 > exp1} />
        </div>
    )
}


PokeGame.defaultProps = {
  pokemon: [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ]
    };














export default PokeGame