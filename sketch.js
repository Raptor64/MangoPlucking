
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(950,210,30);
	mango4=new mango(1070,190,30);
	mango5=new mango(1200,210,30);

	stone1=new stone(245, 500, 20);

	launcherObject=new launcher(stone1.body,{x:245,y:420})

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();

  launcherObject.display();

  groundObject.display();

  collision(stone1, mango1)
  collision(stone1, mango2)
  collision(stone1, mango3)
  collision(stone1, mango4)
  collision(stone1, mango5)

}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	console.log("hello")
	launcherObject.fly();
}

function collision(stone, mango){
	mangoPosition = mango.body.position
	stonePosition = stone.body.position
	var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)
	if(distance<=stone.r+mango.r){
		Matter.Body.setStatic(mango.body,false);
	}

}