class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    $(".ttt").append("<ul>");
    for (let i = 0; i < 9; i++) {
      $("ul").append("<li>");
    };
  };
};

module.exports = View;
