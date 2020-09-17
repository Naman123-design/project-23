const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale=0.6
    
    box1 = new Box(600,580,200,20);
    box2 = new Box(500,550,20,100);
    box3 = new Box(700,550,20,100);
    ground = new Ground(width/2,height,1200,20);

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
  

}

function draw(){
    background(0);
    packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y 
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
    keyPressed();
    drawSprites();
}

function keyPressed(){

	if(keyDown("DOWN_ARROW")){
		//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:false});
		//packageSprite.velocityY = 2;
	Matter.Body.setStatic(packageBody, false);
	}
}