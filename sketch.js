//Create variables here
var dogimage, happydog, database, foodS, foodStock, dog, feeddog, addFood, lastFed,
fedTime

function preload()
{
	//load images here
  dogimage = loadImage("Dog.png")

  happydog = loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database ()
  foodStock = database.ref ("Food")
foodStock.on("value", readStock)
  dog = createSprite(250, 300, 50, 50)
  dog.addImage(dogimage)
dog.scale = 0.2

foodobject = new Food()

addFood = createButton("Add more FOOD!")
addFood.position(400, 100)
addFood.mousePressed(addFoods)

feeddog =  createButton("Feed the DOG!")
feeddog.position(650,100)
feeddog.mousePressed(feedDog)
}


function draw() {  
background(46,139, 87)
 foodobject.display()

 fedTime = database.ref('FeedTime')
 fedTime.on("value", function(data){
  lastFed = data.val()
 })
 fill ("white")

if(lastFed>= 12)
{
text("Last Fed:" + lastFed %12 + "PM", 350, 30)

} else if(lastFed === 0)
{
text("Last Fed: 12AM", 350,30)
}
else {
text ("Last fed: " + lastFed + "AM", 350, 30)
}
//if(keyWentDown(UP_ARROW))
//{
//writeStock(foodS)
//dog.addImage(happydog)
//}
  drawSprites();
  //add styles here

  text("Food Remaining:" + foodS, 180, 200)
  text("NOTE: Press the UP ARROW to feed Bruno!", 120, 20)
textSize(10)

}



function readStock(data)
{
foodS = data.val()
console.log(foodS)
}



function writeStock(x)
{
  if(x<=0)
  {
    x = 0
  }  else 
  {
  x =x -1
  }
  
database.ref("/").update({Food: x})
}
function addFoods()
{
foodS++
database.ref("/").update
({
Food: foodS
})
}

function feedDog()
{
dog.addImage(happydog)

foodobject.updateFoodStock(foodobject.getFoodStock()-1)
database.ref("/").update({
  Food: foodobject.getFoodStock(),
  FeedTime: hour ()
})
}

