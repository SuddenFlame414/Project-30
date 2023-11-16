const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var groundObj, stand1, stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon, slingShot;

function setup() {
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    groundObj = new Ground(500,390,1000,20);
    stand1 = new Ground(400,250,250,20);
    stand2 = new Ground(800,150,200,20);

    //blocks
    block1 = new Box(750,100,30,40);
    block2 = new Box(780,100,30,40);
    block3 = new Box(810,100,30,40);
    block4 = new Box(840,100,30,40);
    block5 = new Box(780,60,30,40);
    block6 = new Box(810,60,30,40);
    block7 = new Box(795,20,30,40);
    block8 = new Box(340,225,30,40);
    block9 = new Box(370,225,30,40);
    block10 = new Box(400,230,30,40);
    block11 = new Box(430,230,30,40);
    block12 = new Box(460,230,30,40);
    block13 = new Box(370,195,30,40);
    block14 = new Box(400,195,30,40);
    block15 = new Box(430,195,30,40);
    block16 = new Box(400,155,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    //slingShot = new slingshot(this.polygon.body,{x:100,y:200});

}
function draw() {
    
    background("black");
    Engine.update(engine);

    groundObj.display();
    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
}
/*function mouseDragged() {
    Matter.Body.setPosition({x:mouseX,y:mouseY});
}
function mouseReleased() {
    slingshotObj.fly();
}*/