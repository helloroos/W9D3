const View = require ("./ttt-view.js");
const Game = require ("../node_solution/game.js");

  $(() => {
    const $el = $('.ttt');
    const g = new Game();
    console.log(g);
    const v = new View(g, $el);
  });