var canvas,backgroundImg;
var database;
var playerCount;
var gameState=0
var form,player,game;

function setup(){
    database=firebase.database();
    cavas=createCanvas(400,400);
    game=new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
   

   
}


