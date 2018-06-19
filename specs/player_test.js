const assert = require('assert');
const Card = require('../card.js');
const Player = require('../player.js');
const Game = require('../game.js');

describe('Player', function() {

  let player;
  let card;
  let game;

  beforeEach(function() {
    game = new Game([])
    player = new Player("Raquel", [])
    card = new Card("Superman", 6, 9, 7)
  })

  it('should have hand', function() {
    assert.deepStrictEqual(player.hand, []);
  });

  it('should add card to hand from deck', function() {
    game.addCardToDeck(card);
    game.addCardToDeck(card);
    player.addCardToHand();
    assert.deepStrictEqual(player.hand, [card])
  })

});
