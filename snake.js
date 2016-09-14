var model = {

  init: function() {
    this.totalBlanks = 1600;
    this.rows = 0
    this.key = 39;
    this.body = [0,1];
    this.food = Math.floor(Math.random() * 1600);
    this.time = 100;
    this.input = setInterval(view.listenForInput, this.time);
    this.boundary = setInterval(view.checkBoundaryUpDown, model.time);
    this.boundary2 = setInterval(view.checkBoundaryLeftRight, model.time);
  }

}

var view = {
  

  init: function() {
    this.setBoard();
    this.listenForInput();
    this.placeFood();
    model.input;
    model.boundary;
    model.boundary2;
  },

  resetBoard: function() {
    controller.init();
    window.clearTimeout(model.input);
    window.clearTimeout(model.boundary);
  },

  placeFood: function() {
    var food = Math.floor(Math.random() * 1600);
    $("#" + food).addClass("food");
    model.food = food;
    this.makeGameFaster();
  },
    
  listenForInput: function() {
    $(".total-length").text(model.body.length);
    view.eatFood();
    window.onkeyup = function(e) {
      var newKey = e.keyCode ? e.keyCode : e.which;

      if (model.key == 37 && newKey != 39) {
          model.key = newKey;
      }else if (model.key == 38 && newKey != 40) {
          model.key = newKey;
      }else if (model.key == 39 && newKey != 37) {
          model.key = newKey;
      }else if (model.key == 40 && newKey != 38) {
          model.key = newKey;
      }
    }
    if (model.key == 37) {
        view.moveBodyLeft();
        view.removeBody();
    }else if (model.key == 38) {
        view.moveBodyUp();
        view.removeBody();
    }else if (model.key == 39) {
        view.moveBodyRight();
        view.removeBody();
    }else if (model.key == 40) {
        view.moveBodyDown();
        view.removeBody();
    }
  },

  setBoard: function() {
    $(".body-part").remove();
    $(".blank-body").remove();
    while (model.rows < model.totalBlanks) {
      $(".container").append("<div class='blank-body' id=" + model.rows + "></div>");
      model.rows ++;
    }
  },

  startBody: function() {
    $("#0").addClass("body-part");
    $("#1").addClass("body-part");
  },

  moveBodyRight: function() {
    for(var i = 0; i < model.body.length; i++) {
      $("#" + model.body[i]).addClass("body-part")
    }
    model.body.push(Number(model.body.slice(-1)) + 1);
  },

  moveBodyDown: function() {
    for(var i = 0; i < model.body.length; i++) {
      $("#" + model.body[i]).addClass("body-part")
    }
    model.body.push(Number(model.body.slice(-1)) + 40);
  },

  moveBodyUp: function() {
    for(var i = 0; i < model.body.length; i++) {
      $("#" + model.body[i]).addClass("body-part")
    }
    model.body.push(Number(model.body.slice(-1)) - 40);
  },

  moveBodyLeft: function() {
    for(var i = 0; i < model.body.length; i++) {
      $("#" + model.body[i]).addClass("body-part")
    }
    model.body.push(Number(model.body.slice(-1)) - 1);
  },

  removeBody: function() {
    $("#" + model.body.shift(model.body[0])).removeClass("body-part");
  },

  checkBoundaryUpDown: function() {
    if (model.body.slice(-1) > 1600 || model.body.slice(-1) < 0) {
      view.resetBoard();
    }
  },

  checkBoundaryLeftRight: function() {
    if ((model.body.slice(-2)[1]) % 40 === 0) {
      if((model.body.slice(-2)[0] + 1) % 40 === 0) {
        view.resetBoard();
      }
    }
    if ((model.body.slice(-2)[1] + 1) % 40 === 0) {
      if((model.body.slice(-2)[0]) % 40 === 0) {
        view.resetBoard();
      }
    }
  },

  eatFood: function() {
    if(model.body[model.body.length - 1] === model.food){
      view.growSnake(model.food);
      view.makeGameFaster();
      view.removeFood()
      view.placeFood();
      
    }
  },

  removeFood: function(food) { 
    $(".food").removeClass("food");
  },

  growSnake: function(food) {
    if (model.key == 37) {
      model.body.unshift(model.body[0] - 1)
    }else if (model.key == 38) {
      model.body.unshift(model.body[0] + 40)
    }else if (model.key == 39) {
      model.body.unshift(model.body[0] + 1)
    }else if (model.key == 40) {
      model.body.unshift(model.body[0] - 40)
    }
  },

  makeGameFaster: function() {
    if(model.body.length > 5) {
      model.time += 1000;
    }
  }

}

var controller = {
  init: function() {
    model.init();
    view.init();
  }
}