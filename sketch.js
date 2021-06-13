var bg;
var iss;
var spacecraft;
var hasDocked = false;

function preload(){
   bg = loadImage("images/spacebg.jpg");
   issImg = loadImage("images/iss.png");
   scImg1= loadImage("images/spacecraft1.png");
   scImg2= loadImage("images/spacecraft2.png");
   scImg3= loadImage("images/spacecraft3.png");
   scImg4= loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 150, 40, 40);
  iss.addImage(issImg);
  iss.scale = 0.7;

  spacecraft = createSprite(400,300,40,40);
  spacecraft.addImage(scImg1);
  spacecraft.scale = 0.14;
  
}

function draw() {
  background(bg);

  if(spacecraft.y <= (iss.y + 70) && spacecraft.x <= (iss.x - 10)){
     hasDocked = true;
     textSize(30);
     fill(255);
     text("Docking Successful!",200,300);
  }
  drawSprites();
}

function keyPressed(){

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
  
  if(keyCode === LEFT_ARROW){
      spacecraft.x = spacecraft.x-1;
      spacecraft.addImage(scImg4);
  }

  if(keyCode === RIGHT_ARROW){
    spacecraft.x = spacecraft.x+1;
    spacecraft.addImage(scImg3);
  }

  if(keyCode === UP_ARROW){
    spacecraft.y = spacecraft.y-1;
  }

  if(keyCode === DOWN_ARROW){
    spacecraft.addImage(scImg2);
    spacecraft.y = spacecraft.y+1;
  }
}
}