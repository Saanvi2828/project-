class Ground {
    constructor() {
      var options = {
          isStatic:true,
          'density':1.0
      }
      this.body = Bodies.rectangle(400,690,800,20);
      
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
    }
  };
  