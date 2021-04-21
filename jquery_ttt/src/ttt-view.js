class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $(this.$el).on("click", "li", (e) => {
      const $square = $(e.currentTarget);
      console.log($square);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    console.log(pos);
    $square.toggleClass("marked unmarked");
    $square.append(this.game.currentPlayer);
    this.game.playMove(pos);
    alert("Invalid move!");
    console.log(this.game.currentPlayer);
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
