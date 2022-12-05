import React from 'react'
import Pokecard from './Pokecard.js'
import './Pokedex.css'

const Pokedex =({ pokemon, name, isWinner }) => {


    return (
        <div className='Pokedex'>
            <h3>{name}</h3>
            <h5>{isWinner ? <bold style={{background:"red"}}>This Hand Wins</bold> : null}</h5>
            {pokemon.map(data => (
            <Pokecard
            name={data.name}
            id={data.id}
            type={data.type}
            exp={data.base_experience}
            />
            ))}
        </div>
    )
}
export default Pokedex;