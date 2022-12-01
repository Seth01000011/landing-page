import {Gameboard} from "./gameboard.js"
import {Ship} from "./shipMaker.js"
// Create Player.

// should each player be its own object, or should all players be under 
// "players" object to enable automagic incrementing? default as computer?

export class Player { 
  constructor(playername = "Player", board) {
    this.playername = playername;
    this.board = board


    }
}

// Players can take turns playing the game by attacking the enemy Gameboard.
// The game is played against the computer, so make ‘computer’ players capable of 
// making random plays. The AI does not have to be smart, but it should know whether 
// or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).

