// maim i want to give the gameState in making the object and display if car
//collided with the o1 o2 o3 o4 o5 o6 then the gamestate end 
//maim in this case my star will go down in my review of this project in whiteHatjr
//maim i also uploaded the code of plinko 2


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const sat = Matter.SAT.collides
var engine, world;
var gameState = PLAY;
var PLAY = 1
var END = 0
var time = 3
var o1 = []
var o2 = []
var o3 = []
var o4 = []
var o5 = []
var o6 = []

function preload(){

  bgi = loadImage("assest/bg.jpg")
 
bgm = loadSound("assest/bgm.mp3")
winpng = loadImage("assest/win.png")
}

function setup() {
  createCanvas(1168,552);
  engine = Engine.create();
  world = engine.world;
  bg = createSprite(width/2+100,height/2)

  bg.velocityY = 5

 sm = new SM(200,350)
steering = new Steering(200,420)
//speed = new SB(800,450)
// brake = new SB(1000,500)

 player = new Player(500,500,50,100)
 border = new Border(470,height/2,5,height)
 border = new Border(594,height/2,5,height)
 meter = new Meter({x:88,y:434},{x:200,y:420})
 Matter.Body.setVertices(meter.body, {x:88,y:434+10})
bgm.play()
 
}

function draw() {
     Engine.update(engine);
   
  
      cursor("assest/mouse2.png");
  
      drawSprites();
     if(frameCount%100 === 0 ){
      bg.velocityY = bg.velocityY+5
      //meter = new Meter({x:88,y:434},{x:200,y:420})
     
     }
   if (bg.y > height){
      bg.y = bg.height;
    }
    if(frameCount%100 === 0){
o1.push(new Opposite(500,-10,50,100))  

    }
    
   if(frameCount%175 === 0){
    o2.push(new Opposite(570,-10,50,100))  
          
    }  
    if(frameCount%340 === 0){
      o3.push(new Opposite(500,-10,50,100))  
            
      } 
      if(frameCount%560 === 0){
        o4.push(new Opposite(570,-10,50,100))  
              
        } 
        if(frameCount%730 === 0){
          o5.push(new Opposite(500,-10,50,100))  
                
          } 
          if(frameCount%1190 === 0){
            o6.push(new Opposite(577,-10,50,100))  
                  
            } 
     
 
  
  imageMode(CENTER)
image(bgi,bg.x,bg.y,width+1000,height-height)
// bg.addImage(bgi)

sm.display()

//speed.display()
meter.display()
steering.display()
//brake.display2()
player.display3()
for(var i = 0;i<o1.length;i++){

  o1[i].display2()
 

}
for(var i = 0;i<o2.length;i++){
  o2[i].display()

}
for(var i = 0;i<o3.length;i++){
  o3[i].display3()

}
for(var i = 0;i<o4.length;i++){
  o4[i].display4()

}
for(var i = 0;i<o5.length;i++){
  o5[i].display5()

}
for(var i = 0;i<o6.length;i++){
  o6[i].display6()

}

fill("red")
textFont("italic")
stroke("black")
textSize(25)

text("100% canvas zoom is best for this game thanks!",250,20)
  text(time+"/3 Lap",30,70)
  text("It's highway",30,100)
  text("In Forest mode",30,130)
  text("Enjoy!",30,160)
  text("W",190,270)
  text("D",363,430)
  text("A",20,430)
  
  textSize(50)
 
  text(mouseX+","+mouseY,500,250)
  text(frameCount-1,1000,250)

  if(keyCode === 68){
    Matter.Body.setPosition(player.body,{x:560,y:500})
  Matter.Body.setAngle(steering.body,50)
  
 
  }
 else if(keyCode === 65)
  {Matter.Body.setAngle(steering.body,-50)
    Matter.Body.setPosition(player.body,{x:500,y:500})
   }
  else if(keyCode === 87)
  {Matter.Body.setAngle(steering.body,0)
    Matter.Body.setAngle(player.body,0)}
  
  
  
    
   

}



