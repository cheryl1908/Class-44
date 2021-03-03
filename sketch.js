var gameState=0;
var form,game,allPlayers;

function preload(){
  track = loadImage("Images/road.jpg");  
}

function setup() {
  createCanvas(displayWidth-10,displayHeight-10);
  game=new Game();
  game.start();
  //player1 = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255);  
  text(mouseX+","+mouseY,50,50)
  if(gameState===1){
    game.play();
  }
  //controlPlayer1();
  drawSprites();
}
function controlPlayer1(){
  if(keyDown(RIGHT_ARROW)){
    player1.x+=30;
  }
  if(keyDown(UP_ARROW)){
    player1.y+=-30;
  }
  if(keyDown(LEFT_ARROW)){
    player1.x+=-30;
  }
  /*if(keyDown(DOWN_ARROW)){
    player1.y+=30;
  }*/

}