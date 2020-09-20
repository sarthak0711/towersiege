const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box,box1,box2,box3,box4,rock,box5,box6,ground,slingshot,g1
var b1,b2,b3,b4,b5,box6

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    box = new Box(400,200);
    box1 = new Box(350,250);
    box2 = new Box(450,250);
    box3 = new Box(400,300);    
    box4 = new Box(300,300);
    box5 = new Box(500,300);
    b1 = new Box(650,50);
    b2 = new Box(600,150);
    b3 = new Box(700,150);



    g1 = new Ground(650,155,100,10);
    ground = new Ground(400,350,800,10)

    rock = new Rock();

    slingshot = new SlingShot(rock.body,{x:200,y:100})
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)

  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  rock.display();
  ground.display();
  slingshot.display();
  b1.display();
  b2.display();
  b3.display();
  g1.display();

  drawSprites();
}

/*function keyPressed() {

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:140,y:500})

	}

}*/

function mouseDragged(){

    Matter.Body.setPosition(rock.body,{x:mouseX , y:mouseY})

}

function mouseReleased(){
    slingshot.fly();
    console.log("here")
}

function keyPressed(){

    if(keyCode === 32){
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        slingshot.attach(bird.body)
        
    }
    

}
