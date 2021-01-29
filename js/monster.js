class Monster{
    constructor(x,y,r){
        var options={
            'restitution':0.04,
            'density':1.0,
            'friction':0.4
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("images/Monster-01.png")
        this.body=Bodies.circle(x,y,r,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        imageMode(RADIUS);
        image(this.image,0,0,this.radius);
        pop();
    }
}