var wall ,bullet;
var speed, weight,thickness;
var result,bulletRightEdge,wallleftedge,result;



function setup() {
  createCanvas(800,400);
  speed=random(50,100);
  weight=random(400,1500);
  thickness=random(20,80);
  bullet=createSprite(40, 200, 30, 30);
  bullet.velocityX=speed;
  
  wall=createSprite(700,200,thickness,200);
}

function draw() {
  background(255,255,255);  
  
    



calculateDamage(wall,bullet)

  
  drawSprites();
}


function hasCollide(wall,bullet){
  bulletRightEdge = bullet.x + bullet.width
  wall= wall.x;
  
  if(bulletRightEdge>= wall ){
    return true

  }
    else{
      return false;}
}
function calculateDamage(wall,bullet){
  if(hasCollide(wall,bullet)){
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage > 10){
      wall.shapeColor = "red"
      bullet.velocityX = 0}}    
      if(damage<10){
        wall.shapeColor="green"
        bullet.velocityX=0
      }

      }

  





