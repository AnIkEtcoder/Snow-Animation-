const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;
var engine , world;
var snow = [];
var bg , bgImage 


function preload(){
bgImage = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create (); 
  world = engine.world ; 

if(frameCount % 50 === 0){

  for(var i=0; i<200; i++){
    snow.push(new createSnow(random(0,800), random(0,800)));
    
  }
}
}
function draw() {
  background(bgImage);  
 Engine.update (engine) ;
 for(var i = 0; i<200; i++){
  snow[i].showDrop();
  snow[i].updateY()
}
}