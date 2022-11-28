import { Gameboard } from "./src/gameboard.js"

let newGame = Gameboard(10, 10);

test('Creates dimensions of game board', () => {
  newGame.borders = [10,10];
})

test('Places ship at [1,1] coordinate, horizontally', () => {
  newGame.addShip(0, 2, 1, 1, 0);
  console.log(newGame.ships[0]);
})


// Create Gameboard factory.

//     Note that we have not yet created any User Interface. We should know our code is 
// coming together by running the tests. You shouldn’t be relying on console.logs or DOM 
// methods to make sure your code is doing what you expect it to.

//     Gameboards should be able to place ships at specific coordinates by calling the 
// ship factory function.

//     Gameboards should have a receiveAttack function that takes a pair of coordinates,
//  determines whether or not the attack hit a ship and then sends the ‘hit’ function 
// to the correct ship, or records the coordinates of the missed shot.

//     Gameboards should keep track of missed attacks so they can display them properly.

//     Gameboards should be able to report whether or not all of their ships have been sunk.
