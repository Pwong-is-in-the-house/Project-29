const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var engine,world;
var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15
var polygon,slingShot;
function setup(){
    var canvas = createCanvas(1600,900);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,700,600,50);
box1=new Box(335,235,30,40)
box2=new Box(365,235,30,40)
box3=new Box(395,235,30,40)
box4=new Box(425,235,30,40)
box5=new Box(455,195,30,40)
box6=new Box(365,195,30,40)
box7=new Box(395,195,30,40)
box8=new Box(425,195,30,40)
box9=new Box(455,155,30,40)
box10=new Box(395,155,30,40)
box11=new Box(425,155,30,40)
box12=new Box(455,155,30,40)
box13=new Box(425,115,30,40)
box14=new Box(455,115,30,40)
box15=new Box(485,115,30,40)
polygon=new Polygon();
slingShot=new SlingShot(polygon.body,{x:100,y:200});
}
function draw(){
    background("brown");
    Engine.update(engine)
    polygon.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    ground.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly()

}
