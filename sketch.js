const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine,world
var ball,ground

function setup(){
createCanvas(400,400)
engine = Engine.create();
world = engine.world

var options1={
  restitution:1.0
}

ball = Bodies.circle(200,100,20,options1)
World.add(world,ball)

var options ={
  isStatic:true
}

ground = Bodies.rectangle(200,380,400,20,options)
World.add(world,ground)

}

function draw(){

background(0)

Engine.update(engine)

fill ("red")
ellipseMode(CENTER)
ellipse(ball.position.x,ball.position.y,40,40)

fill ("green")
rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)

}

























