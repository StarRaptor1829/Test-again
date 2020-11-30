const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var a;
var circles=[];
var polygon_img, polygon
var ground1;
var slingShot
var gameState = "onSling";
var block8, block9, block10, block11, block12, block13, block14, block15, block16
function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(800,800);
 //engine = Engine.create();
//world = engine.world;

  stroke(255)
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11= new Box(420,235,30,40);
  block12= new Box(450,235,30,40);

  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  block16 = new Box(390,195,30,40);

  ground1 = new Ground(390,250,90,3);

  slingShot= new SlingShot(this.polygon,{x:100,y:200})
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine)
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
ground2.display();
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed (){
  if(keyCode === 32){
    polygon.attach(polygon.body)
  }
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  polygon.fly();
  gameState = "launched";
}