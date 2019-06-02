export function shuffleDeck (deck)  {
  return deck.slice().sort(() => Math.random() - .5);
}

export function calculateExp (hand) {
  let a = hand.map(card => card.base_experience);
  return a.reduce((a, b) => a + b);
}
