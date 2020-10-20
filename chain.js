class rope{
    constructor(body1,body2,x,y)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options ={
            bodyA:body1,
            bodyB:body2,
            pointB:{x: this.offsetX,y: this.offsetY}
        }
        this.pointB=pointB
        this.Rope=Constraint.create(options)
        World.add(world,this.Rope)
    }
    display(){
        var pointA=this.Rope.bodyA.position;
        var pointB=this.pointB
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y) 
       }
}