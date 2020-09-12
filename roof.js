class Roof {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      stroke("green");
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };