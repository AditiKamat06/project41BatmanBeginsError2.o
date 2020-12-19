class Umbrella {
    constructor(x,y){
        var options = {
            isStatic : true 
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
        // Matter.Bodies.setStatic(Bodies, true);
    }

    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 10, 10);
    }
}