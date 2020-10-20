
const Engine = Matter.Engine;
const World = Matter.World;																																						
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{																											
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob2 = new bob1(600,600,30)
	bob3 = new bob1(650,650,30)
	bob4 = new bob1(700,700,30)
	bob5 = new bob1(750,750,30)
	bob6 = new bob1(800,800,30)
	roof6 = new roof1(300,300,20,1000)
	rope3 = new rope(bob2.body,{x:300,y:300})
	rope4 = new rope(bob3.body,{x:400,y:400})
	rope5 = new rope(bob4.body,{x:500,y:500})
	rope6 = new rope(bob5.body,{x:600,y:600}) 
	rope7 = new rope(bob6.body,{x:700,y:700})
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  rope3.display()
  rope4.display()
  rope5.display()
  rope6.display()
  rope7.display()

  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  bob6.display()

  roof6.display()
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:85,y:85})
	 }
}



