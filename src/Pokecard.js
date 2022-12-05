import React from "react";
import './Pokecard.css'

const Pokecard = ( { name, id, type, exp}) => {
    return (
        <div className="Pokecard">
        <div>
            <div>{name}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
            <div>ID: {id}</div>
            <div>Type: {type}</div>
            <div>EXP: {exp}</div>
        </div>
        </div>
    )
}

export default Pokecard;