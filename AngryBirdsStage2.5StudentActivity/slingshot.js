class Slingshot {
   constructor(bodyA, pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:15,
            stiffness:0.8
        }
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
   }

    fly ()
    {
        this.sling.bodyA = null
    }

display(){
    if(this.sling.bodyA!=null){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

  }
}