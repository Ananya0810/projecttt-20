
var bullet, wall
var speed , weight
var thickness

function setup() {


  createCanvas(1600,400);


  car = createSprite(50, 200, 50, 50);
  car.shapeColor="pink"
  car.velocityX = speed;



  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  
  wall= createSprite(1200,200,thickness,height/2)
  wall.shapeColor-color(80,80,80)
}

function draw() {
  background(255,255,255); 
  
  
if(hascolllided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness *thickness * thickness)

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0)
  }

  if (damage<10)
  {
    wall.shapeColor=color(0,255,0)
  }
  }


  if(wall.x-car.x <(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation<180)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if( deformation>180)
    {
      car.shapeColor=color(0,255,0)
    }
    }

  }


    function hasCollided(1wall,1bullet)
{
  bulletRightEdge=1bullet.x=1bullet.width;
  wallLeftEdge=1wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
  }

  


