class Game{
   constructor(){}
   start(){
       if(gameState===0){
           form=new Form();
           form.display();
           player=new Player();
           player.getCount();
       }
   }
   play(){
        form.hide();
        image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        var test=Player.getPlayersInfo();
   }
   getState(){
        database.ref("gameState").on("value",(data)=>{
            gameState=data.val();
        })
   }
   update(state){
       database.ref('/').update({
           gameState:state
       })
   }
}