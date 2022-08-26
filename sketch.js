
var canvas
var backgroundImage, jewelsImage, sharkImage, playerImage, seaweedImage





function preload() {
backgroundImage = loadImage("Background.jpeg")
jewelsImage = loadImage("Jewels.jpeg")
seaweedImage = loadImage("SeaWeed.jpeg")
sharkImage = loadImage("NEWSHARK.png")
playerImage = loadImage("Diver-Vector-PNG.png")
}


function setup() {
canvas = createCanvas(windowWidth,windowHeight)


ocean = createSprite(windowWidth/2 - 300, windowHeight/2 - 200)
ocean.addImage(backgroundImage)
ocean.scale = 2.45
ocean.setVelocity(-2,0)


Diver = createSprite(350,windowHeight-250)
Diver.addImage(playerImage)

Shark = createSprite(1050,900)
Shark.addImage(sharkImage)
Shark.scale = 0.95

Jewels = createSprite(1500,1000)
Jewels.addImage(jewelsImage)
Jewels.scale = 0.7



}


function draw() {
background(backgroundImage)
console.log(ocean.position.x)
if(ocean.position.x<500){
    ocean.position.x = windowWidth/2
}
drawSprites()



}