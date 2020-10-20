class roof1{
    constructor(x,y,width,height)
    {
        var options=
    {
        restitution:0
    
    }
    this.body=Bodies.rectangle(x,y,width,height)
    World.add(world,this.body)
    }
    display(){
    
    var rpos=this.body.position
    rectMode(CENTER)
    fill(255,0,0)
    rect(rpos.x,rpos.y,this.width,this.height)
    }
    }
