const Game = function(deck) {
  this.deck = []
}

Game.prototype.addCardToDeck = function(card) {
  this.deck.push(card);
};

// Game.prototype.countCardsInDeck = function() {
//   this.deck.length();
// };

Game.prototype.removeCardFromDeck = function() {
  card = this.deck.shift();
  return card;
};



module.exports = Game;
