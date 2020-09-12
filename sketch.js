
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5, bob6;
var roof1;
var line1,line2,line3,line4,line5,line6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(100,300,30);
	bobObject2 = new Bob(100,300,30);
	bobObject3 = new Bob(100,300,30);
	bobObject4 = new Bob(100,300,30);
	bobObject5 = new Bob(100,300,30);
	bobObject6 = new Bob(100,300,30);
  roof1 = new Roof(400, 100, 800, 20);
  rope1 = new Rope(bobObject1.body, roof1.body, -60, 0)
  rope2 = new Rope(bobObject2.body, roof1.body, -60, 0)
  rope3 = new Rope(bobObject3.body, roof1.body, -60, 0)
  rope4 = new Rope(bobObject4.body, roof1.body, -60, 0)
  rope5 = new Rope(bobObject5.body, roof1.body, -60, 0)
  rope6 = new Rope(bobObject6.body, roof1.body, -60, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  bobObject6.display();
  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -385, y: 385})
  }
}