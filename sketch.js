var car ,wall
var speed , weight 

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500)

  car=createSprite(50,200,50,30)
  car.velocityX=(speed);
  car.shapeColor="green";
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="yellow";

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car.x<=(car.width/2+wall.width/2)){
  car.shapeColor="red"
  wall.shapeColor="red"
  car.velocityX=0;
  }else{
    car.shapeColor="green"
    wall.shapeColor="yellow"
  }
}