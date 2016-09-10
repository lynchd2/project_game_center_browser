//sections of a snake
//Eating food creates new head on snake(link l)

var snakeModel = {
  // State
  init: function () {
    setDirection();
    setTailCoordinates();
  },
  head: [-2,0],
  tail: [0,0],
  setTailCoordinates: function() {
    snakeModel.tail = coordinates;
  },
  setDirection: function(coordinates) {
    snakeModel.head = coordinates;
  }
};

var boardModel = {
  init: function() {
    this.food();
  },
  width: 200,
  height: 200,
  food: function () {
    return (Math.random() * 10 + 1);
  },
  keys: {
    38: [-2,0],
    40: [0,2],
    39: [2,0],
    37: [-2,0]
  }
};

var controller = {
  init: function() {
    cacheDOM();
    this.listen();
    view.render(snakeModel,BoardModel);
  },
  listen: function() {
    $snake.on('keypress',function (ev) {
      snakeModel.setDirection(ev,boardModel);
    });
  },
  cacheDOM: function() {
    $snake = $('div#snake');
  }
};

var view = {
  render: function() {
  }
};

// What direction the snake is gonna go
// Where the food will be
// On keypress event to change snake's direction
// - snake's head
// - snake head -> food
//   -> snake length++
//   -> delete food
//   -> add food elsewhere
// - snake head -> snake
//   -> game over
// - snake head -> edge of board
//   -> game over
//
// ## MODELS ##
// Snake
//   .head
//   .length
//   .direction
// Board
//   .width
//   .height
//   .food
//
//
// ## CONTROLLERS ##
// SnakeController
// -> grabbing state from snake model to view
// -> updating state from view to snake model(e.g. change direction; growth)
//
// ## VIEW ##
// View
