var food, foodStock;
var dog;
var Happydog,dog1;
var database;

function preload()
{
  Happydog.loadImage("images/dogImg1.png");
  dog1.loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  database=firbase.database;
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  

  drawSprites();
  
  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.AddImage(Happydog);
  }
 text("PRESS UP KEY TO FEED DOG MILK! :)", 250,100);
  background(46,139,87);

}
function readStock(data){
  food=data.val;
}

function writeStock(x){
if(x<=0){
  x=0
}else{
  x=1;
}

  database.ref('/').update({
    Food:x
  })
}
