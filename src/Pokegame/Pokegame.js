import React, { Component } from 'react'
import {shuffleDeck, calculateExp} from '../PokedexHelper'
import Pokedex from '../Pokedex/Pokedex'

class Pokegame extends Component {
  state = {
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
  }
  assignHands (deck) {
    const hand1 = deck.slice(0, 4);
    const hand2 = deck.slice(4, deck.length);
    return [hand1, hand2]
  }
  
  render() {
    const { pokemon } = this.state;
    const shuffledDeck = shuffleDeck(pokemon);
    const hands = this.assignHands(shuffledDeck);
    const [hand1, hand2] = hands;
    const hand1TotalExp = calculateExp(hand1);
    const hand2TotalExp = calculateExp(hand2);
    const game = (hand1TotalExp > hand2TotalExp)
                ? <>
                  <Pokedex pokemon={hand1} isWinner />
                  <Pokedex pokemon={hand2} />
                </>
                : <>
                <Pokedex pokemon={hand1} />
                <Pokedex pokemon={hand2} isWinner />
              </>

    
    return( 
      <>
        {game}
      </>
    )
    
  }
}


export default Pokegame
