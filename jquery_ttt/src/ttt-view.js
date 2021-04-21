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
    
  };

  setupBoard() {
    this.$el.append("<ul>");
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        $("ul").append("<li>");
        $('li:last-child').attr("data-pos", [rowIdx, colIdx]);
      };
    };
  };
};


module.exports = View;
