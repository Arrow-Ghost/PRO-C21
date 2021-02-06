var canvas;
var music;
var object1,object2,object3,object4,object5;
var BLUE,YELLOW,PINK,GREEN,ColorBall;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //building BLUE
    BLUE = createSprite(90,575,180,40);
    BLUE.shapeColor = "blue";
    
    // yellow
    YELLOW = createSprite(300,575,180,40);
    YELLOW.shapeColor = "#ff9900";

    //pink
    PINK = createSprite(500,575,180,40);
    PINK.shapeColor = "#9c0382";

    //green
    GREEN = createSprite(710,575,180,40);
    GREEN.shapeColor = "green";
    //create box sprite and give velocity
    ColorBall = createSprite(random(20,750),530,30,30);
    ColorBall.velocityX = 1; 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
      if (ColorBall.x > 783){
        ColorBall.velocityX = 0;
        //ffdgr  
      }
      if (ColorBall.x > 10){
          ColorBall.shapeColor = "blue";
          //ffdgr
      }
      if(ColorBall.x > 175) {
        ColorBall.shapeColor = "white";
      }
      if(ColorBall.x > 215) {
        ColorBall.shapeColor = "#ff9900";
        //ffdgr
      }
      if(ColorBall.x > 380) {
         ColorBall.shapeColor = "white";
      }
      if(ColorBall.x > 410) {
          ColorBall.shapeColor = "#9c0382";
          //ffdgr
      }
      if(ColorBall.x > 580) {
          ColorBall.shapeColor = "white";
      }
      if(ColorBall.x > 630) {
          ColorBall.shapeColor = "green";
          //ffdgr
      }


    //add condition to check if box touching surface and make it box'
    drawSprites();
}
