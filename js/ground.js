class Ground{
    constructor(x,y,width,height){
       var options={
          'restitution':0.04,
          'density': 1.0,
          "isStatic":true
       }

       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       this.body=Bodies.rectangle(x,y,width,height,options);
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       strokeWeight(4);
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop();
    }
}