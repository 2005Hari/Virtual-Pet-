//Create variables here
var dog, happyDog, database, foodS, foodStock 
var foodS, foodStock;
var addfood,FeedDog
var LastFeed
function preload()
{
	dog=loadImage("dogImg.png")
  happyDog=loadImage("dogImg1.png")
  bedroom=loadImage("Bed Room.png")
  Garden=loadImage("Garden.png")

}

function setup() {
	createCanvas(500, 500);
  Dog = createSprite(200,300,50,50)
  Dog.addImage(happyDog)
  Dog.scale = 0.4;
 FoodObj=new Food() 
database=firebase.database();
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)

addfood=createButton("ADD Food ")
addfood.position(520,50)
FeedDog=createButton("Feed Dog")
FeedDog.position(600,50)



}


function draw() {  
  background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    Dog.addImage(happyDog)
  }
  readLastFeed()
 FoodObj.display()
  drawSprites();
addfood.mousePressed(()=>writeStock(1))
FeedDog.mousePressed(()=>writeStock(-1))
  strokeWeight()
  stroke("red");  
  text("Food Remaining:" + foodS, 250,480);
  currentTime=hour()
  if(currentTime==(LastFeed+1)){
    FoodObj .garden()
  }else if (currentTime==(LastFeed+2)){
    FoodObj.bedroom()
  }
  
}
function readStock(data){
  foodS=data.val()
  
}
function readLastFeed(){
  database.ref("LastFeed").on("value",(data)=>LastFeed=data.val()) 
}
function writeStock(x){
     database.ref('/').update({
    Food:foodS+x,
    LastFeed:hour()

  }

  )
}




