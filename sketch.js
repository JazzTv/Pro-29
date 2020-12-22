const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var base1;

var polygon;
var chain;

var box;
var boxGroup = [];

var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12;

var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
    
function preload ()
{
   polygonImg = loadImage ("polygon.png")
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   this.polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    ground = new Ground (1000,390,2000,20);
    base1 = new Ground (650,300,450,20);
    base2 = new Ground (1040,160,220,20);

    //  chain = new Chain (this.polygon, {
    //                                     x: 100,
    //                                     y : 200
    //                                   })
    
    
    
    for (var i = 450; i < 840; i+=40)
    {
      box = new Box (i,270,30,40); 
      boxGroup.push (box); 
    }
    // b8 = new Box (660,270,30,40);
    // b9 = new Box (690,270,30,40);
    // b10 = new Box (720,270,30,40);
    // b11 = new Box (750,270,30,40);
    // b12 = new Box (780,270,30,40);
    // b13 = new Box (810,270,30,40);
    // b14 = new Box (840,270,30,40);
    // b1 = new Box (630,270,30,40);
    // b2 = new Box (600,270,30,40);
    // b3 = new Box (570,270,30,40);
    // b4 = new Box (540,270,30,40);
    // b5 = new Box (510,270,30,40);
    // b6 = new Box (480,270,30,40);
    // b7 = new Box (450,270,30,40);
    
    // p1 = new Box (480,230,30,40);
    // p2 = new Box (510,230,30,40);
    // p3 = new Box (540,230,30,40);
    // p4 = new Box (570,230,30,40);
    // p5 = new Box (600,230,30,40);
    // p6 = new Box (630,230,30,40);
    // p7 = new Box (660,230,30,40);
    // p8 = new Box (690,230,30,40);
    // p9 = new Box (720,230,30,40);
    // p10 = new Box (750,230,30,40);
    // p11 = new Box (780,230,30,40);
    // p12 = new Box (810,230,30,40);

    // s1 = new Box (510,190,30,40);
    // s2 = new Box (540,190,30,40);
    // s3 = new Box (570,190,30,40);
    // s4 = new Box (600,190,30,40);
    // s5 = new Box (630,190,30,40);
    // s6 = new Box (660,190,30,40);
    // s7 = new Box (690,190,30,40);
    // s8 = new Box (720,190,30,40);
    // s9 = new Box (750,190,30,40);
    // s10 = new Box (780,190,30,40);

    // f1 = new Box (540,160,30,40);
    // f2 = new Box (570,160,30,40);
    // f3 = new Box (600,160,30,40);
    // f4 = new Box (630,160,30,40);
    // f5 = new Box (660,160,30,40);
    // f6 = new Box (690,160,30,40);
    // f7 = new Box (720,160,30,40);
    // f8 = new Box (750,160,30,40);
    

}

function draw(){
    background(0);
    Engine.update(engine);

    push ();
    imageMode (CENTER);
    image (polygonImg, polygon.position.x, polygon.position.y, 40, 40);


    ground.display ();
    base1.display ();
    base2.display ();

    // b1 is in the middle.
    // fill ("green");
    
    for (i = 0; i < boxGroup.length; i++)
    {
       box = boxGroup [i];
       box.display ();
    }
    

    // fill ("blue");
    // p1.display ();
    // p2.display ();
    // p3.display ();
    // p4.display ();
    // p5.display ();
    // p6.display ();
    // p7.display ();
    // p8.display ();
    // p9.display ();
    // p10.display ();
    // p11.display ();
    // p12.display ();

    // fill ("purple")
    // s1.display ();
    // s2.display ();
    // s3.display ();
    // s4.display ();
    // s5.display ();
    // s6.display ();
    // s7.display ();
    // s8.display ();
    // s9.display ();
    // s10.display ();

    // fill ("pink")
    // f1.display ();
    // f2.display ();
    // f3.display ();
    // f4.display ();
    // f5.display ();
    // f6.display ();
    // f7.display ();
    // f8.display ();
    
}

// function mouseDragged ()
// {
//     Matter.Body.setPosition (bird.body, {x: mouseX, y: mouseY})
// } 

// function mouseReleased ()
// {
//     slingShot1.fly ()
// }