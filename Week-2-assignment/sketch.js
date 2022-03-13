function setup() {
  createCanvas(400, 400);
  background(backgroundVal);
}
//global variables
let backgroundVal = 220;
let theStroke = 1;
let rainbowVar = false;
function draw() {
  let randX = random(1, 399);
  let randY = random(1, 399);
  let randR = random(5, 60);

  let randRed = random(0, 255);
  let randGreen = random(0, 255);
  let randBlue = random(0, 255);

  noStroke(); //red square
  fill(255, 0, 0);
  rect(0, 0, 25, 25);

  fill(255, 255, 0); //yellow square
  rect(375, 0, 400, 25);

  if (mouseX < 25 && mouseY < 25) { //reset board
    fill(0, 255, 0);
    rect(0, 0, 25, 25);
    if (mouseIsPressed) background(backgroundVal);
  }

  if (mouseX > 375 && mouseX < 400 && mouseY < 25) { //draw circles
    fill(0, 0, 255);
    rect(375, 0, 400, 25);
    if (mouseIsPressed) {
      fill(randRed, randGreen, randBlue);
      circle(randX, randY, randR);
    }
  }
  //set stroke color
  if(rainbowVar==false){
      stroke(0);
  }
  else{
   stroke(randRed, randGreen, randBlue); 
  }
  
  //draw variable
  if (mouseIsPressed == true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed(event) { //increase stroke width
  if (event.shiftKey) {
    theStroke++;
    strokeWeight(theStroke);
  } else if (keyCode === LEFT_ARROW) { //decrease stroke width
    console.log("bruh");
    if (theStroke == 1) {
    } else {
      theStroke--;
      strokeWeight(theStroke);
    }
  } else if (keyCode === UP_ARROW) { //whiten background color
    backgroundVal += 10;
    background(backgroundVal);
  } else if (keyCode === DOWN_ARROW) { //darken background color 
    backgroundVal -= 10;
    background(backgroundVal);
  }
  else if (keyCode === RIGHT_ARROW) { //enable/disable rainbow stroke.
    if(rainbowVar==false){
      rainbowVar=true;
       }
    else{
      rainbowVal=false;
    }
  }
  
}
