class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
    console.log(this.game.playMove[0,0]);
    console.log(this.game.currentPlayer);
    console.log(this.game.playMove[0, 1]);
  }

  bindEvents() {
    $(this.$el).on("click", "li", (e) => {
      const $square = $(e.currentTarget);
      // console.log($square);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = $square.data("pos").split(',');
  
    $square.toggleClass("marked unmarked");
    $square.append(this.game.currentPlayer);
    try {
      this.game.playMove(pos);
    }
    catch(err) {
      alert("Invalid move!");
    }
  };

  setupBoard() {
    this.$el.append("<ul>");
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        $("ul").append("<li>");
        $('li:last-child')
          .attr("data-pos", [rowIdx, colIdx])
          .addClass("unmarked")

      };
    };
  };
};

module.exports = View;
