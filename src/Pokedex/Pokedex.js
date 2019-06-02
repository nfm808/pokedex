import React, { Component } from 'react'
import Pokecard from '../Pokecard/Pokecard'
import './Pokedex.css'

class Pokedex extends Component {

  render() {
    const { pokemon } = this.props;
    const cards = pokemon.map(card => 
                <Pokecard 
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  type={card.type}
                  exp={card.base_experience} />
                )
    return (
      <>
      <div className='Pokedex'>
        <ul className='Pokedex-list'>
          {cards}
        </ul>
      </div>
      <p>{this.props.isWinner ? 'Winner' : null}</p>
      </>
    )
  }
}

export default Pokedex
