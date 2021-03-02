class Drop{
constructor(x, y){
    var options = {
        friction: 0.1,
        restituition: 0.3
    }
  this.body = Bodies.circle(x, y, 10, options)
  this.radius = 10;
  World.add(world, this.body)
}
display(){
    fill("blue");
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius*2)
}

update(){
    Matter.Body.setPosition(this.body, {x:random(0, displayWidth), y:random(0, displayHeight)})
}

}