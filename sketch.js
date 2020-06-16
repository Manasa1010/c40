var canvas,backgroundImg;
var database;
var playerCount;
var gameState=0
var form,player,game;
var allPlayers;
var cars,car1,car2,car3,car4;

function setup(){
    database=firebase.database();
    cavas=createCanvas(displayWidth-30,displayHeight-30);
    game=new Game();
    game.getState();
    game.start();
    
}

function draw(){
  
   if(playerCount===4){
       game.update(1);
   }
   if(gameState==1){
       clear();
       game.play();
   }

   
}


