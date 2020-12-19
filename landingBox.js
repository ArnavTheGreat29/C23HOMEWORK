class Land{

    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        
   
        this.width = width;
        this.height = height;
        this.land = Bodies.rectangle(x,y,this.width,this.height,options)
       
       
        World.add(world, this.land)
    }

    display(){
       
        var pos =this.land.position;
        rectMode(CENTER);
        fill("red")
        rect(pos.x, pos.y, this.width, this.height)

    }


}

