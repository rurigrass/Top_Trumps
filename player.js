const Game = require('game.js');

const Player = function(name, hand) {
    this.name = name
    this.hand = []
}

Player.prototype.addCardToHand = function () {
  card = Game.removeCardFromDeck();
  this.hand.push(card);
};

module.exports = Player;
