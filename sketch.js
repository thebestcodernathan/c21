var fixedRect, movingRect,go1,go2;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "purple";
 
  movingRect = createSprite(1000, 400,80,30);
  movingRect.shapeColor = "green";

  go1= createSprite(200, 400, 50, 80);
  go1.shapeColor = "yellow";
  
  go2 = createSprite(300, 400, 50, 80);
  go2.shapeColor = "red";
 

  movingRect.velocityX = -10;
  
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,go2)
  drawSprites();
}


