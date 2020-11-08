class paperobject {
    constructor(x, y, width, height) {
      var options = {
       isStatic:true  
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      ellipse(100,655,40,40);   
      fill(255);
      //rect(pos.x, pos.y, this.width, this.height);
    
    }
  };
  