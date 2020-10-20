class bob1{
    constructor(x,y,r)
    {
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
    
        }
      
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
        display()
        {
            var bobpos=this.body.position
    
            push()
            translate(bobpos.x,bobpos.y)
            imageMode(CENTER)
           image(this.image,0,0,15,20)
            pop()
        }
    
    }
   