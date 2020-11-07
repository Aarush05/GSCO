var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
 speed=random(55,90);
 weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.shapeColor="white"
  car.velocityX=speed;
  wall=createSprite(1500,200,50,height/2);
  wall.shapeColor="Black"
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX= 0
    var Deformation=0.5*weight*speed*speed/22500;
    if(Deformation>180){
      car.shapeColor="red";
      text("Dangerous",800,250);
    }
    if(Deformation<180&&Deformation>100){
      car.shapeColor="Yellow";
      text("Moderate",800,250);
    }
    if(Deformation<100){
      car.shapeColor="Green";
      text("Safe",800,250);

    }
  }
  drawSprites();
}