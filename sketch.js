var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var gameState="play";
var gameState="end";
var survivalTime=0;
function preload(){
 
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
monkey= createSprite(80,315,20,20); 
monkey.addAnimation("monkeyRunning",monkey_running);
monkey.scale=0.1;

banana= createSprite(400,200,40,50); 
banana.addImage("bananaimage",bananaImage);
banana.scale=0.1;
  
ground= createSprite(400,350,900,10); 

//ground.x=ground.width/2;
console.log(ground.x);
if (ground.x < 0){
    ground.x = ground.width/2;
}  

obstacle= createSprite(300,300,40,50); 
obstacle.addImage("obstacleimage",obstacleImage);
obstacle.scale=0.1;

score=0;
}


function draw() {
background("cyan");

stroke("white");  
textSize(20);
fill("white");
text("Score : "+ score,500,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate());
text("SurvivalTime:"+survivalTime,100,50);

  
  
if(gameState==="play"){
 ground.velocityX=-4;  
if(World.framecount%500===0){
//banana= createSprite(20,30,40,50); 
bananaImage = loadImage("banana.png");
banana.scale=0.1;
banana.velocityX=-4;
   }  
if(World.framecount%900===0){
//obstacle= createSprite(20,300,40,50); 
obstacleImage = loadImage("obstacle.png");
obstacle.scale=0.1;  

   }

if(keyDown("space")&& monkey.y >= 160) {
monkey.velocityY = -12;
monkey.Y=monkey.Y+0.8;
}
if(monkey.isTouching(obstacle)){
  gameState="end";
  banana.destroy();
  obstacle.destroy();
   }
if(monkey.istouching(banana)){
   banana.destroy();
   }
score = score + Math.round(getFrameRate()/60); monkey.velocityY = monkey.velocityY + 0.8;

   }
  
if(gameState==="end"){
 ground.velocityX=0;    
 monkey.velocityY = 0; 
 
   }
obstacleFunction();
bananaFunction();
drawSprites();  
}

function obstacleFunction(){
obstacleImage = loadImage("obstacle.png");  
obstacle= createSprite(300,300,40,50); 
obstacle.addImage("obstacleimage",obstacleImage);
obstacle.scale=0.1;
obstacle.velocityX=-4;
}

function bananaFunction(){
bananaImage = loadImage("banana.png");  
banana= createSprite(400,200,40,50); 
banana.addImage("bananaimage",bananaImage);
banana.scale=0.1;
banana.velocityX=-4;
}





