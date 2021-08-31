class Food 
{


constructor ()
{
this.image = loadImage("Milk.png")
this.lastFed
this.foodStock = 0

}

updateFoodStock(foodStock)
{
this.foodStock = foodStock
}

getFedTime(lastFed)
{
this.lastFed = lastFed
}

deductFood()
{
if(this.foodStock>0)
{
this.foodStock = this.foodStock - 1
}
}

getFoodStock()
{
return this.foodStock
}

display()
{
var x = 90, y = 90

imageMode (CENTER)
image(this.image, 800, 200, 10,10)

if(this.foodStock != 0)
{
for(var j = 0; j< this.foodStock; j = j+1)
{
if(j%15===0)
{
x = 90
y=y + 60
}
image (this.image,x,y,10,10)
x = x + 20
}
}

}
}