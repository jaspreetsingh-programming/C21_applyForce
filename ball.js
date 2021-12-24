class Ball{
    constructor(x,y,radius){
        var options = {
            restitution: 0.95
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world, this.body)
        this.radius = radius;
    }

    display(){
        var pos = this.body.position;

        push();
        ellipseMode(RADIUS)
        fill("purple")
        ellipse(pos.x, pos.y, this.radius, this.radius)
        pop();
    }
}