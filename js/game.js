class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
   async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef= await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
          
            form=new Form();
            form.display();
        }
        car1=createSprite(100,200);
        car1.addImage("car",car1_img)
        car2=createSprite(300,200);
        car2.addImage("car",car2_img)
        car3=createSprite(500,200);
        car3.addImage("car",car3_img)
        car4=createSprite(700,200);
        car4.addImage("car",car4_img);
        cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();

       // title.htmlSize(30);
       // title.html("GAME START",120,100);
        Player.getPlayerInfo();
        player.getCarsAtEnd();

        if(allPlayers!==undefined){
            background(ground);
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
           var index=0;
           var x=175;
           var y;
           // var display_position=130;
            for(var plr in allPlayers){
                index++;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance-50;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index){
                    fill("red");
                    circle(x,y,100);
                    camera.position.x=displayWidth/2;
                    camera.position.y= cars[index-1].y;
                } 

            }
        }   
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance=player.distance+50;
            player.update();
        }
        if(player.distance>3860){
            gameState=2;
            player.rank++;
            Player.updateCarsAtEnd(player.rank);
        }
        drawSprites()

        
    }
    end(){
        console.log("gameEnded");
        console.log(player.rank);
        
        var title=createElement("h2");
        title.position(displayWidth/2-200,displayHeight/8);
        if(player.rank===1){
        title.html("you are "+player.rank+"st");
        }
        if(player.rank===2){
            title.html("you are "+player.rank+"nd");
            }
       if(player.rank===3){
            title.html("you are "+player.rank+"rd");
             }
         if(player.rank===4){
            title.html("you are "+player.rank+"th");
             }
    }

}
