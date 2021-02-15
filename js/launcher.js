class launcher {
    constructor(body, point)
    {
        var options = {
            bodyA:body,pointB:point,
            stiffness : 0.004, 
            length: 1
        }
        this.bodyA = body;
        this.pointB = point;
        this.launcher = Constraint.create(options)
        World.add(world,this.launcher);

    }
    fly(){
        this.launcher.bodyA = null;
    }
    display()
    {
        if(this.launcher.bodyA){
        var pointA = this.bodyA.position
        var pointB = this.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y)

        }
        
    }

    

}