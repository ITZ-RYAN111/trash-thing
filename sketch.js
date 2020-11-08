
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2

}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground=new ground(200,690,4000,20);
	paperobject=new paperobject(200,650,10,10);
	boxbottom=new boxbottom(600,680,200,10);
	boxright=new boxright(700,635,10,100);
	boxleft=new boxleft(500,635,10,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paperobject.display();
  boxbottom.display();
  boxright.display();
  boxleft.display();	
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:85});


	}
}



