const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var engine, world;
var drop;
var rain = []

function preload(){
    
}
function setup(){
createCanvas(displayWidth, displayHeight)
//created engine
engine = Engine.create() 
//created world
world = engine.world
for(var i = 0; i<100; i = i+1){
    drop = new Drop(random(0, displayWidth),random(0, displayHeight))
    rain.push(drop);
    
}

    
}

function draw(){
background(0)  
Engine.update(engine)
for(var i = 0; i<100; i++){
    rain[i].display()
    if(rain[i].body.position.y>displayHeight)
    rain[i].update()
}
} 


