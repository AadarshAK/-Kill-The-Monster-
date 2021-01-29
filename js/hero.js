class Hero{
    constructor(x,y,width,height){
        var options={
            'restitution':0.04,
            'density':1.0,
            'friction':0.4
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("images/Superhero-01.png")
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}