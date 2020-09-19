class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 10
        }
        this.SlingShot = Constraint.create(options);
        World.add(world, this.SlingShot);
    }

    display(){
        if(this.SlingShot.bodyA){
        var pointA = this.SlingShot.bodyA.position;
        var pointB = this.SlingShot.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }

    fly(){
        this.SlingShot.bodyA=null;
        console.log("there")
    }
    
}