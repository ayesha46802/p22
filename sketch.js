var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1.createSprite(200,400,10,20)
	box1.shapeColor=("red")

	box2.createSprite(250,400,10,20)
	box2.shapeColor=("red")

	box3.createSprite(200,400,20,10)
	box3.shapeColor=("red")

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.01, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	box1 = Bodies.rectangle( {isStatic:true} );
	 World.add(world, box1);
	 
	 box2 = Bodies.rectangle( {isStatic:true} );
	 World.add(world, box2);

	 box3 = Bodies.rectangle( {isStatic:true} );
	 World.add(world, box3);

	 
	Engine.run(engine);
  
}


function draw() {
    Engine.update(engine);



    rect(ground.position.x,ground.position.y,400,20);
	
	rectMode(CENTER); 
	background(0);
		 packageSprite.x= packageBody.position.x
		 packageSprite.y= packageBody.position.y 



		 drawSprites(); 
	
   
}

function keyPressed(){
	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false)
	}
}

 



