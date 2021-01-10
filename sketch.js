
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin1,dustbin2,dustbin3;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.

	paper1 = new Paper(100,350,10,10);
	dustbin1 = new Dustbin(500,345,10,30);
	dustbin2 = new Dustbin(630,355,250,10);
	dustbin3 = new Dustbin(750,345,10,30);
	ground1 = new Ground(400,365,800,10);
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background("white");
  if(keyCode === DOWN_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:30})
}
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed(){

}


