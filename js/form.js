class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);
        var input=createInput("Name");
        var button=createButton('play');
        input.position(130,160);
        button.position(130,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();

            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting=createElement('h3');
            greeting.html("hello "+name);
           greeting.position(130,160);
        });

        
    }
}