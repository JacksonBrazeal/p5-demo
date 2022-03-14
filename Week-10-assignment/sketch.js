/*
Flower Generator

Authors: Moises Perez, Ian Richardson, Jackson Brazeal

Idea - Begin with two base flowers the user creates via a list of options. 
The flower's petal color, petal shape, and the number of petals are options
to change and allow the player to place them on the canvas. After the flowers 
are placed on the canvas, the user can initiate the breeding process between the 
flowers as new hybrid flowers begin to grow relative to the original ‘seeds’ 
determined by the user. The selection process would be random for certain elements, 
but we can direct combinations of values and sizes that go into the child flower 
(potentially pretend some traits are dominant or recessive).
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
*/

function preload() {
  img = loadImage("background.jpg");
}

/*
Flower class:
- A flower has a position x and y, size, petalNumber,petalLength and color.
- We check to see if it's clicked on
- We can display the ellipses and fill in with the color. 
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
*/
class Flower {
  constructor() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    this.size = 15;
    this.petalNumber = random(5,12);
    this.petalLength = random(30, 100);
    this.petalWidth = random(30, 50);
    this.petalColor = color(
      random(0,255),
      random(0,255),
      random(0,255)
    );
  }
  
  clicked(x, y) {
    let d = dist(x, y, this.x, this.y);
    if(d < this.size) {
      this.petalColor = color(random(0,255),random(0,255),random(0,255));
      savedFlowers.push(this);
      numMouseClicks++;
    }
  }
  
  display() {
    this.GenerateFlower();
  }
  
  //Ian's GenerateFlower() function
  GenerateFlower() {
    stroke(0);
    fill('yellow');
    push();
    ellipse(this.x, this.y, this.size);
    translate(this.x, this.y);
    for (let i = 1; i <= this.petalNumber; i++) {
      rotate(2*PI/(this.petalNumber));
      fill(this.petalColor);
      ellipseMode(CORNERS);
      // ellipse as flower gen
      // v1 - ???
      // v2 - length from inner petal to center
      // v3 - actual petal width
      // v4 - actual petal length
      ellipse(0, this.size/6, this.petalWidth, this.petalLength);
    }
    pop();
  }
}

let flowers = [];
let savedFlowers = [];
let spawnButton;
let eraseButton;

let numMouseClicks = 0;
let arrayNum = 0;
let myNum = [0,0,0,0];
let slider;
let beginSpawn = false;

function setup() {
  createCanvas(800, 800);
  img.filter(BLUR, 3);
  
  Flower1PedalSlider = createSlider(5, 20, 0, 1);
  Flower1PedalSlider.position(800 + 10, 50);
  Flower1PedalSlider.style('width', '80px');
  
  Flower1PedalWSlider = createSlider(5, 20, 0, 1);
  Flower1PedalWSlider.position(800 + 10, 65);
  Flower1PedalWSlider.style('width', '80px');
  
  Flower1LengthSlider = createSlider(30, 100, 5, 1);
  Flower1LengthSlider.position(800 + 10, 80);
  Flower1LengthSlider.style('width', '80px');
  
  Flower1RedSlider = createSlider(0, 255, 5, 1);
  Flower1RedSlider.position(800 + 10, 110);
  Flower1RedSlider.style('width', '80px');
  
  Flower1BlueSlider = createSlider(0, 255, 5, 1);
  Flower1BlueSlider.position(800 + 10, 140);
  Flower1BlueSlider.style('width', '80px');
  
  Flower1GreenSlider = createSlider(0, 255, 5, 1);
  Flower1GreenSlider.position(800 + 10, 170);
  Flower1GreenSlider.style('width', '80px');

  
  Flower2PedalSlider = createSlider(5, 20, 0, 1);
  Flower2PedalSlider.position(800 + 10, 250);
  Flower2PedalSlider.style('width', '80px');
  
  Flower2PedalWSlider = createSlider(5, 20, 0, 1);
  Flower2PedalWSlider.position(800 + 10, 265);
  Flower2PedalWSlider.style('width', '80px');

  Flower2LengthSlider = createSlider(30, 100, 5, 1);
  Flower2LengthSlider.position(800 + 10, 280);
  Flower2LengthSlider.style('width', '80px');
  
  Flower2RedSlider = createSlider(0, 255, 5, 1);
  Flower2RedSlider.position(800 + 10, 310);
  Flower2RedSlider.style('width', '80px');
  
  Flower2BlueSlider = createSlider(0, 255, 5, 1);
  Flower2BlueSlider.position(800 + 10, 340);
  Flower2BlueSlider.style('width', '80px');
  
  Flower2GreenSlider = createSlider(0, 255, 5, 1);
  Flower2GreenSlider.position(800 + 10, 370);
  Flower2GreenSlider.style('width', '80px');
  
  button = createButton('Begin Generation');
  button.position(800+10, 400);
  button.mousePressed(StartGame);
  
  spawnButton = createButton('Spawn Flowers');
  spawnButton.position(810, 430);
  spawnButton.mousePressed(flowerSpawn);
}
function draw() {  
  image(img, 0, 0, windowWidth, windowHeight);
  
  if(beginSpawn == false) {
    textSize(20);
    fill(255);
    text("Flower 1", 730, 30);
    text("Flower 2", 730, 230);
    
    //Sliders
    textSize(12)
    let Flower1Pedals = Flower1PedalSlider.value();
    text("Number of pedals: " + Flower1Pedals,730,60)
  
    let Flower1Width = Flower1PedalWSlider.value();
    text("Width of Pedals:  " + Flower1Width,730,75)
    
    let Flower1Length = Flower1LengthSlider.value();
    text("Length of Pedals:  " + Flower1Length,730,90)
  
    let Flower1Red = Flower1RedSlider.value();
    text("Red Value: " + Flower1Red,730,120)

    let Flower1Blue = Flower1BlueSlider.value();
    text("Blue Value: " + Flower1Blue,730,150)
  
    let Flower1Green = Flower1GreenSlider.value();
    text("Green Value: " + Flower1Green,730,180)

    
    
    let Flower2Pedals = Flower2PedalSlider.value();
    text("Number of pedals: " + Flower2Pedals,730,260)
  
    let Flower2Width = Flower2PedalWSlider.value();
    text("Width of Pedals:  " + Flower2Width,730,275)
    
    let Flower2Length = Flower2LengthSlider.value();
    text("Length of pedals: " + Flower2Length,730,290)
  
    let Flower2Red = Flower2RedSlider.value();
    text("Red Value: " + Flower2Red,730,320)
  
    let Flower2Blue = Flower2BlueSlider.value();
    text("Blue Value: " + Flower2Blue,730,350)
  
    let Flower2Green = Flower2GreenSlider.value();
    text("Green Value: " + Flower2Green,730,380)
  
    textSize(20)
    textAlign(CENTER, CENTER)
  }
  if(beginSpawn == true){
    clear();
    beginSpawn = false;
    numMouseClicks = 0;
    despawnFlowers();
    //flowerSpawn();
    firstFlowers();
    myNum = [0,0,0,0];
  }
  if(numMouseClicks < 2){
    text("First, click on the canvas to select the first two flower positions.",350,350);
    text('(' + myNum[0] + "," + myNum[1] + ","+ myNum[2] + "," + myNum[3] + ')',400,400);
  }
  
  if(numMouseClicks >= 2 && beginSpawn==false){
    text("Now, adjust the sliders on the right",350,350);
    text("When you are finished, press the Finish Button to generate!",400,400);
  }
  
  for(let i = 0; i < savedFlowers.length; i++) {
    //flowers[i].display();
    savedFlowers[i].display();
  }
  for(let j = 0; j < flowers.length; j++) {
    flowers[j].display();
  }
}

/*
Initial flower spawn
Pre: Slider input
Post: 2 Flowers from user input
*/
function firstFlowers() {
  // The first 2 flowers to spawn
  f1 = new Flower();
  f2 = new Flower();
  f1.x = width/2;
  f1.y = height/2 - 200;
  f1.petalNumber = Flower1PedalSlider.value();
  f1.petalWidth = Flower1PedalWSlider.value();
  f1.petalLength = Flower1LengthSlider.value();
  f1.petalColor = color(Flower1RedSlider.value(), Flower1GreenSlider.value(), Flower1BlueSlider.value());
  f2.x = width/2;
  f2.y = height/2 + 200;
  f2.petalNumber = Flower2PedalSlider.value();
  f2.petalWidth = Flower2PedalWSlider.value();
  f2.petalLength = Flower2LengthSlider.value();
  f2.petalColor = color(Flower2RedSlider.value(), Flower2GreenSlider.value(), Flower2BlueSlider.value());
  savedFlowers.push(f1);
  savedFlowers.push(f2);
}

/*
Popping the flowers from the array. 
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
*/
function despawnFlowers() {
  for (let i = savedFlowers.length - 1; i >= 0; i--) {
    savedFlowers.splice(i , 1);
  }
  for (let j = flowers.length - 1; j >= 0; j--) {
    flowers.splice(j , 1);
  }
}

/*
"Spawning" the flowers on the canvas
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
*/
function flowerSpawn() {
  gFlower = new Flower();
  
  // Random flower position on screen
  gFlower.x = random(0, width);
  gFlower.y = random(0, height);
  
  // random seed generation
  let seed = Math.floor(random(0, 100));
  print(seed);
  print(savedFlowers);
  // determine genes based on 1/3 into 1/5 chances
  switch (seed % 3) {
    case (0):
        gFlower.petalNumber = savedFlowers[0].petalNumber;
        gFlower.petalLength = savedFlowers[0].petalLength;
        gFlower.petalWidth = savedFlowers[0].petalWidth;
        gFlower.petalColor[0] = savedFlowers[0].petalColor[0];
        gFlower.petalColor[1] = savedFlowers[0].petalColor[1];
        gFlower.petalColor[2] = savedFlowers[0].petalColor[2];
      break;
    case (1):
        gFlower.petalNumber = savedFlowers[1].petalNumber;
        gFlower.petalWidth = savedFlowers[1].petalWidth;
        gFlower.petalLength = savedFlowers[1].petalLength;
        gFlower.petalColor[0] = savedFlowers[1].petalColor[0];
        gFlower.petalColor[1] = savedFlowers[1].petalColor[1];
        gFlower.petalColor[2] = savedFlowers[1].petalColor[2];
      break;
    case (2):
        switch (seed % 5) {
        case (0):
          gFlower.petalNumber = savedFlowers[0].petalNumber;
          gFlower.petalWidth = savedFlowers[0].petalWidth;
          gFlower.petalLength = savedFlowers[1].petalLength;
          gFlower.petalColor[0] = savedFlowers[1].petalColor[0];
          gFlower.petalColor[1] = savedFlowers[0].petalColor[1];
          gFlower.petalColor[2] = savedFlowers[0].petalColor[2];
          break;
        case (1):
          gFlower.petalNumber = savedFlowers[0].petalNumber + 1;
          gFlower.petalWidth = savedFlowers[0].petalWidth;
          gFlower.petalLength = savedFlowers[1].petalLength;
          gFlower.petalColor[0] = savedFlowers[0].petalColor[0];
          gFlower.petalColor[1] = savedFlowers[1].petalColor[1];
          gFlower.petalColor[2] = savedFlowers[0].petalColor[2];
          break;
        case (2):
          gFlower.petalNumber = savedFlowers[0].petalNumber - 1;
          gFlower.petalWidth = savedFlowers[0].petalWidth;
          gFlower.petalLength = savedFlowers[1].petalLength;
          gFlower.petalColor[0] = savedFlowers[0].petalColor[0];
          gFlower.petalColor[1] = savedFlowers[0].petalColor[1];
          gFlower.petalColor[2] = savedFlowers[1].petalColor[2];
          break;
        case (3):
          gFlower.petalNumber = savedFlowers[1].petalNumber;
          gFlower.petalWidth = savedFlowers[1].petalWidth;
          gFlower.petalLength = savedFlowers[1].petalLength;
          gFlower.petalColor[0] = savedFlowers[1].petalColor[0];
          gFlower.petalColor[1] = savedFlowers[1].petalColor[1];
          gFlower.petalColor[2] = savedFlowers[0].petalColor[2];
          break;
        case (4):
          gFlower.petalNumber = savedFlowers[1].petalNumber;
          gFlower.petalWidth = savedFlowers[1].petalWidth;
          gFlower.petalLength = savedFlowers[1].petalLength;
          gFlower.petalColor[0] = savedFlowers[0].petalColor[0];
          gFlower.petalColor[1] = savedFlowers[1].petalColor[1];
          gFlower.petalColor[2] = savedFlowers[1].petalColor[2];
          break;
        default:
            print('how the fuck!?')
      }
      break;
    default:
  }
  print(gFlower);
  flowers.push(gFlower);
}

/*
As long as the mouse cursor is inside the canvas we canc check the clicked function to 
see if we're clicking an object.
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
*/
function mousePressed() {
  if(numMouseClicks < 2){
    myNum[arrayNum] = mouseX;
    arrayNum++;
    myNum[arrayNum] = mouseY;
    arrayNum++;
    for (let i = 0; i < flowers.length; i++) {
      if(mouseX < windowWidth && mouseX > 0 && mouseY < windowHeight && mouseY > 0) {
        flowers[i].clicked(mouseX, mouseY);
      }
    }
  }
}

function StartGame() {
  beginSpawn=true;
}
