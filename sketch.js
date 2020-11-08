var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=285;
var score = 0;
var ground;
var particle = null;
var turn = 0;
var gameState = "start";
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 

function draw() {
  background(125, 131, 232);
  textSize(18)
  text("Score : "+score,20,30);
  text("100",340,540);
  text("100",420,540);
  text("100",500,540);
  text("200",580,540);
  text("200",660,540);
  text("200",740,540);
  text("500",260,540);
  text("500",180,540);
  text("500",100,540);
  text("500",20,540);


  Engine.update(engine);
 
  ground.display();

  if(gameState === "end"){
    textSize(40)
    text("GAME OVER!",300,450);
   }
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   /*for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
      if(frameCount%60===0){
       particles.push(new Particle(random(width/2-60, width/2+80), 10,10));
      score++;

          for (var k = 0; k < divisions.length; k++){
            divisions[k].display();
    }
  }
}*/
for (var k = 0; k < divisions.length; k++){
  divisions[k].display();
}

if (particle!=null){
  particle.display();
  if (particle.body.position.y > 760){
    if(particle.body.position.x < 300){
      score =  score+500;
      particle = null;
      if (count>=5)
      gameState = "end"
    }
    else if(particle.body.position.x > 301 && particle.body.position.x < 600){
          score = score+100;
          particle = null;
            if(count>=5)
            gameState = "end";
        }
  }
  else if(particle.body.position.x > 601 && particle.body.position.x < 900)
        {
          score = score+200;
          particle = null;
            if(count>=5)
            gameState = "end";
        }
}

/*if(turn === 5){
  gameState = "end";
 }*/

}  

function mousePressed(){
  if(gameState!=="end"){
    count++
    particle = new Particle(mouseX, 10, 10, 10);
  }
 }
