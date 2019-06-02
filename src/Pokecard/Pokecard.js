import React from 'react'
import './Pokecard.css'

export default function Pokecard(props) {
  const { id, name, exp, type } = props
  return (
    <li className="Pokecard">
      <h3>{name}</h3>
      <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </li>
  )
}
