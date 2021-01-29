const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Bodies=Matter.Bodies;
var bck;

//var engine, world,

function preload() {
//preload the images here
bck=loadImage("images/GamingBackground.png");
}

function setup(){
  createCanvas(1200, 580);
  engine=Engine.create();
  world=engine.world;
  // create sprites here
  ground=new Ground(1200/2, 560,1200,20);
  hero=new Hero(400,280,200,200);
  
    boxTop=new Box(700,460,50,50);

    box1=new Box(700,510,50,50);
    box2=new Box(700,460,50,50);
    box3=new Box(700,410,50,50);
    box4=new Box(700,360,50,50);
    box5=new Box(700,310,50,50);
    box6=new Box(700,260,50,50);
    box7=new Box(700,210,50,50);

    box8=new Box(750,510,50,50);
    box9=new Box(750,460,50,50);
    box10=new Box(750,410,50,50);
    box11=new Box(750,360,50,50);
    box12=new Box(750,310,50,50);
    box13=new Box(750,260,50,50);
    box14=new Box(750,210,50,50);   
    
    box15=new Box(650,510,50,50);
    box16=new Box(650,460,50,50);
    box17=new Box(650,410,50,50);
    box18=new Box(650,360,50,50);
    box19=new Box(650,310,50,50);
    box20=new Box(650,260,50,50);
    box21=new Box(650,210,50,50);  

    sling1=new Slingshot(hero.body,{x:300,y:100}); 
    monster1=new Monster(580,200,10);
}

function draw(){
  background(bck);
  Engine.update(engine);
  ground.display();
  hero.display();

  boxTop.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  //box2.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display()
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();

box15.display();
box16.display();
box17.display();
box18.display()
box19.display();
box20.display();
box21.display();

sling1.display();
monster1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling1.fly();
}