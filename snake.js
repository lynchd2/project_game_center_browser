//sections of a snake
//Eating food creates new head on snake(link l)

var snakeModel = {
  // State
  body: 2,
  head: {
    x: -1,
    y: 0
  },
  length: function() {
    return this.body.length;
  },
  direction: 'left',
  setDirection: function(keyEvent) {
    snakeModel.direction = keyEvent;
  }
};



var boardModel = {
  width: 200,
  height: 200,
  food: function () {
    return (Math.random() * 10 + 1);
  }, 
  var keys = {
    38: "up",
    40: "down",
    39: "right",
    37: "left"
  }
};

var controller = {
  init: function() {
    snakeModel
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
