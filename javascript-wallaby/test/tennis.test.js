let assert = require('chai').assert;
tennisGame1 = require('../services/TennisGame1');
tennisGame2 = require('../services/TennisGame2');
tennisGame3 = require('../services/TennisGame3');

const player1 = "player1";
const player2 = "player2";
const allScores = [
    {player1Score: 0, player2Score: 0, expectedScore: "Love-All"},
    {player1Score: 1, player2Score: 1, expectedScore: "Fifteen-All"},
    {player1Score: 2, player2Score: 2, expectedScore: "Thirty-All"},
    {player1Score: 3, player2Score: 3, expectedScore: "Deuce"},
    {player1Score: 4, player2Score: 4, expectedScore: "Deuce"},

    {player1Score: 1, player2Score: 0, expectedScore: "Fifteen-Love"},
    {player1Score: 0, player2Score: 1, expectedScore: "Love-Fifteen"},
    {player1Score: 2, player2Score: 0, expectedScore: "Thirty-Love"},
    {player1Score: 0, player2Score: 2, expectedScore: "Love-Thirty"},
    {player1Score: 3, player2Score: 0, expectedScore: "Forty-Love"},
    {player1Score: 0, player2Score: 3, expectedScore: "Love-Forty"},
    {player1Score: 4, player2Score: 0, expectedScore: "Win for player1"},
    {player1Score: 0, player2Score: 4, expectedScore: "Win for player2"},

    {player1Score: 2, player2Score: 1, expectedScore: "Thirty-Fifteen"},
    {player1Score: 1, player2Score: 2, expectedScore: "Fifteen-Thirty"},
    {player1Score: 3, player2Score: 1, expectedScore: "Forty-Fifteen"},
    {player1Score: 1, player2Score: 3, expectedScore: "Fifteen-Forty"},
    {player1Score: 4, player2Score: 1, expectedScore: "Win for player1"},
    {player1Score: 1, player2Score: 4, expectedScore: "Win for player2"},

    {player1Score: 3, player2Score: 2, expectedScore: "Forty-Thirty"},
    {player1Score: 2, player2Score: 3, expectedScore: "Thirty-Forty"},
    {player1Score: 4, player2Score: 2, expectedScore: "Win for player1"},
    {player1Score: 2, player2Score: 4, expectedScore: "Win for player2"},

    {player1Score: 4, player2Score: 3, expectedScore: "Advantage player1"},
    {player1Score: 3, player2Score: 4, expectedScore: "Advantage player2"},
    {player1Score: 5, player2Score: 4, expectedScore: "Advantage player1"},
    {player1Score: 4, player2Score: 5, expectedScore: "Advantage player2"},
    {player1Score: 15, player2Score: 14, expectedScore: "Advantage player1"},
    {player1Score: 14, player2Score: 15, expectedScore: "Advantage player2"},

    {player1Score: 6, player2Score: 4, expectedScore: "Win for player1"},
    {player1Score: 4, player2Score: 6, expectedScore: "Win for player2"},
    {player1Score: 16, player2Score: 14, expectedScore: "Win for player1"},
    {player1Score: 14, player2Score: 16, expectedScore: "Win for player2"},
];

describe('Tennis Game 1 scoring', function () {
    allScores.forEach(({player1Score, player2Score, expectedScore}) => {
        it(`should show "${expectedScore}" when player 1 has ${player1Score} and player 2 has ${player2Score}`, () => {
            const game = new tennisGame1(player1, player2);

            const actualScore = getScore(player1Score, player2Score, game);

            assert.equal(actualScore, expectedScore);
        });
    });
});

describe('Tennis Game 2 scoring', function () {
    allScores.forEach(({player1Score, player2Score, expectedScore}) => {
        it(`should show "${expectedScore}" when player 1 has ${player1Score} and player 2 has ${player2Score}`, () => {
            const game = new tennisGame2(player1, player2);

            const actualScore = getScore(player1Score, player2Score, game);

            assert.equal(actualScore, expectedScore);
        });
    });
});

describe('Tennis Game 3 scoring', function () {
    allScores.forEach(({player1Score, player2Score, expectedScore}) => {
        it(`should show "${expectedScore}" when player 1 has ${player1Score} and player 2 has ${player2Score}`, () => {
            const game = new tennisGame3(player1, player2);

            const actualScore = getScore(player1Score, player2Score, game);

            assert.equal(actualScore, expectedScore);
        });
    });
});

function getScore(player1Score, player2Score, game) {
    const highestScore = Math.max(player1Score, player2Score);
    for (let i = 0; i < highestScore; i++) {
        if (i < player1Score) {
            game.wonPoint(player1);
        }
        if (i < player2Score) {
            game.wonPoint(player2);
        }
    }
    return game.getScore();
}
