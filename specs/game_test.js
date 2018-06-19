const assert = require('assert');
const Game = require('../game.js');
const Card = require('../card.js');
const Player = require('../player.js');

describe('Game', function() {

  let game;
  let player;
  let card;

  beforeEach(function() {
    game = new Game([])
    card = new Card("Superman", 6, 9, 7)
  })

  it('should have deck', function() {
    assert.deepStrictEqual(game.deck, []);
  });

  it('should have card add function', function() {
    game.addCardToDeck(card);
    assert.deepStrictEqual(game.deck, [card]);
  });

  it('should remove card from deck', function() {
    game.addCardToDeck(card);
    game.addCardToDeck(card);
    game.removeCardFromDeck();
    assert.deepStrictEqual(game.deck, [card]);
  });

});
