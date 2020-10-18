var wall ,car;
var speed ,weight


function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
speed = random(55 ,90);
weight = random(400 ,1500)

}

function draw() {
  background(255,255,255);  
  car = createSprite(50 ,200 ,50 ,50);
  wall = createSprite(1500 ,200 ,60 ,hieght/2);
  
car.velocityX = speed;

var deformation=0.5 * weight * speed * speed/22508
if (deformation>180){

  car.shapeColor = "red"(230 ,230 ,0);
}
if (deformation >180 && deformation>100)
{
  car.shapeColor="blue"(0 , 255 ,0);
}

  drawSprites();
}