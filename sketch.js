var gameState=0;
var fampic
var family
var trainimg
var link
var train;
var start;
var startimg;
var clue2;
var a1;
function preload(){
 family=loadImage("sd game/family.png");
 trainimg=loadImage("sd game/Train-Station.jpg");
 startimg=loadImage("sd game/start.png")
}
function setup() {
  createCanvas(1400,700);
 fampic= createSprite(300,500);
 fampic.addImage("fam",family);
  start=createSprite(1000,600);
  start.addImage("gamestart",startimg);
  
}

function draw() {
  if(gameState===0){
  background("pink");
  textSize(40);
  fill("black");
  textStyle("bold");
 //textFont('Helvetica');
  text("Goal - Save the pet!",520,65);
  textSize(20);
  fill("green");
  textStyle("georgia");
  text("This little girl named Venziya lost her pet dog named Tommy. She wants you to save her pet.",270,400);
  textStyle("italic");
  fill("red");

  if(mousePressedOver(start)){
    gameState=1;
  }
}

if(gameState===1){
  background(trainimg);
  fampic.visible=false;
  start.visible=false;
   textSize(25);
   fill("black");
   textStyle("italic")
  text("CLUE :1 I have seats but I’m not a living room ,I have an engine but I’m not a car , ",100,100)
  text("I’m sometimes a bullet but I’m not fired out of a gun , I can be found in a subway but I’m not a sandwich",100,130);

clue2=createInput(" ");
  clue2.position(450,150);
if(mousePressedOver(clue2)) { 
 a1= print(clue2.value()); 
}
if(a1==="train" || a1=== "Train"){
  textSize(30);
  fill("yellow");
  textStyle("bold");
  text("WOW!! YOU ARE RIGHT.NOW TRY TO FIND THE BELT OF THE DOG FOR NEXT CLUE",300,180);
  }
}
  drawSprites();

}
