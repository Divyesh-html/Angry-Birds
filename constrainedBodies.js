class constrainedBodies
{
    constructor(bodyA,bodyB){
        var options={
            stiffnes:0.5,
            bodyA:bodyA,
            bodyB:bodyB,
            length:10
        }
this.object=constraint.create(options);
World.add(world,this.object)
    }
    display(){
        var pointA=this.object.bodyA.position;
        var pointB=this.object.bodyB.position;
        push();
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}