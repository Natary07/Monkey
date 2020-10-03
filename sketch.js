
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage,food;
var FoodGroup, obstacleGroup;
var score, survivalTime, background1, background1Image;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  background1Image = loadImage("jungle.jpg")
 
}



function setup() {
  createCanvas(400,400);
  
  background1=createSprite(200,200,20,20);
  background1.addImage(background1Image);
  
  ground=createSprite(200,330,400,10);
  ground.x=-4;
  ground.x = ground.width /2;
  
  monkey=createSprite(100,300,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1
  
  
  FoodGroup= new Group();
  obstacleGroup = new Group();
  
  survivalTime=0;
}


function draw() {
background("white");
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  
  food();
  obstacles();
  
  drawSprites();
  
  drawSprites(); 
  stroke("black"); textSize(20); fill("black"); survivalTime=Math.ceil(frameCount/frameRate()); text("Survival Time:" + survivalTime,200,100); 
}

function food() {
  if(World.frameCount%80===0) {
    banana=createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-6
    banana.scale=0.07
    
    banana.lifeTimeEach=200;
    banana.y=Math.round(random(120,200));
    
    FoodGroup.add(banana);
  }
}


function obstacles() {
  if(World.frameCount%300===0) {
    obstacle=createSprite(400,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6
    obstacle.scale=0.1
    
    obstacle.lifeTimeEach=200;
    
    obstacleGroup.add(obstacle);
  }
   
}













