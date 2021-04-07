var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var opp1 , opp1image1, opp1image2; 
var opp2 , opp2image1, opp2image2;
var opp3 , opp3image1, opp3image2;

var obstaclesGroup;
var test;

var gover, goveri;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){

  //image adding thingy
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");

  opp1image1 = loadAnimation("images/opponent1.png", "images/opponent2.png");
  opp1image2 = loadAnimation("images/opponent3.png");

  opp2image1 = loadAnimation("images/opponent4.png", "images/opponent5.png");
  opp2image2 = loadAnimation("images/opponent6.png")

  opp3image1 = loadAnimation("images/opponent7.png", "images/opponent8.png");
  opp3image2 = loadAnimation("images/opponent9.png");

  goveri = loadImage("images/gameOver.png");
  
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;

mainCyclist.debug = false;
mainCyclist.setCollider("rectangle", 0, 0,  1000, 1000);

obstaclesGroup = createGroup();




  
}

function draw() {
  background(0);
  
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
   
   path.velocityX = -5;
  
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);


   

  
  //code to reset the background
  if(path.x < 20 ){
    path.x = width/2;
  }
  




if(frameCount% 10 === 0){
  distance = distance+1;
}
    


 spawn1();
 spawn2();
 spawn3();


//level 1
 if(distance >50){
   path.velocityX = path.velocityX + -2;
   opp1.velocityX = opp1.velocityX + -0.01;
   opp2.velocityX = opp2.velocityX + -0.01;
   opp3.velocityX = opp3.velocityX + -0.01;
 }

 //level 2
 if(distance >100){
  path.velocityX = path.velocityX -2;
  opp1.velocityX = opp1.velocityX -0.1;
  opp2.velocityX = opp2.velocityX -0.1;
  opp3.velocityX = opp3.velocityX + -0.1;
}

//level 3
if(distance >150){
  path.velocityX = path.velocityX -2;
  opp1.velocityX = opp1.velocityX -0.5;
  opp2.velocityX = opp2.velocityX -0.5;
  opp3.velocityX = opp3.velocityX -0.5;
}



 if(mainCyclist.collide(obstaclesGroup)){
  gameState = END;
  obstaclesGroup.velocityX = 0;
  mainCyclist.velocityX = 0;

 
 }
 


}

if (gameState === END){
 
  gover = createSprite(250, 150, 1, 1);
  gover.addImage("gover", goveri);
  gover.lifetime = 1;
 // gover.visible = true;
 
  
  path.velocityX = 0;
  obstaclesGroup.setVelocityXEach(0);

  opp1.addAnimation("0")

  obstaclesGroup.setLifetimeEach(-1);

  if(keyDown("space")){
    gover.destroy()
    gameState = PLAY;
    gover.visible = false;
    obstaclesGroup.setLifetimeEach(1);
    distance = 0;    
   
    
  }

}








path.visible= true;
 drawSprites();

textSize(20);
fill(255);
text("Distance: "+ distance,350,30);




}``

function spawn1(){
  if ((frameCount+250) % 300 === 0){
      
    opp1 = createSprite(520 , 100 , 20 ,20);
     opp1.y = Math.round(random(50 , 250));
     opp1.addAnimation("opp1", opp1image1);   
     opp1.scale = 0.07;
     opp1.velocityX = -2;
 
     opp1.lifetime = 300;
 
     opp1.debug = false;
 
     obstaclesGroup.add(opp1);

     opp1.setCollider("rectangle", 0, 0, 1000, 1000);
 
    
  }




}


function spawn2(){
  if (frameCount % 300 === 0){
  opp2 = createSprite(520 , 100 , 20 ,20);
     opp2.y = Math.round(random(50 , 250));
     opp2.addAnimation("opp2", opp2image1);   
     opp2.scale = 0.07;
     opp2.velocityX = -4;
 
     opp2.lifetime = 300;
 
     opp2.debug = false;
 
     obstaclesGroup.add(opp2);
 
    opp2.setCollider("rectangle", 0 ,0, 1000, 1000);
  }
}

function spawn3(){
  if ((frameCount+444 )% 400 === 0){
  opp3 = createSprite(520 , 100 , 20 ,20);
     //opp3.y = Math.round(random(50 , 250));
     opp3.y = World.mouseY;
     opp3.addAnimation("opp3", opp3image1);   
     opp3.scale = 0.07;
     opp3.velocityX = -5;
 
     opp3.lifetime = 300;
 
     opp3.debug = false;
 
     obstaclesGroup.add(opp3);
 
    opp3.setCollider("rectangle", 0, 0, 1000, 1000);
  }
}










