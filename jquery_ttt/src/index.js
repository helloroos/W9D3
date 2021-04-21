const View = require ("./ttt-view.js");
const Game = require ("../node_solution/game.js");

  $(() => {
    console.log('hello')
    const g = new Game();
    const v = new View(g);
  });