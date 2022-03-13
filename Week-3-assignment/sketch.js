//Jackson Brazeal, part of the base code was done with Ian Richardson, thanks Ian
let edge = 50;
let x = y = 0
let xMovement = 1
let yMovement = 1.5
let rainbow = false;
let mouseRelease = false;

function setup() {
  createCanvas(400, 400);
  drawBackground();
}

function draw() {
  
  stroke(0); //red square, click on canvas to redraw background
  fill(255, 0, 0);
  rect(0, 0, 25, 25);
  
    if (mouseX < 25 && mouseY < 25) { //draw background
    fill(0, 255, 0);
    rect(0, 0, 25, 25);
    if (mouseIsPressed) drawBackground()
  }
  
    fill(255, 255, 0); //yellow square
  rect(375, 0, 400, 25);
  
    if (mouseX > 375 && mouseX < 400 && mouseY < 25) { //toggle rainbow mode, bugging and clicks every fps change
    fill(0, 0, 255);
    rect(375, 0, 400, 25);
    if (mouseIsPressed) {
      if(mouseRelease==false){
        
      if(rainbow==false){
        rainbow = true
      }
      else{
        rainbow = false;
      }
    }
    mouseRelease = true;
  }
mouseRelease =false;  
      
  }

  stroke(0)
  fill(255)
  
  translate(0, 0)
edge = 50 + (mouseX/10);
  
  push();
  //scale(50+mouseX/450)
  translate(x, y);
  drawShape();
  y += yMovement
  x += xMovement
  pop();

  if (y < 0 || y > height - edge) {
    yMovement *= -1
    
    
  }
  if (x < 0 || x > width - edge) {
    xMovement *= -1
    
  }
}
function drawBackground(){
    translate(width/2,height/2)
  for(let i=0; i<100; i++){
    push()
    scale(.5+(.1*i)) //each rectangle gets larger
    rotate(1+i) //causes the spiral
    
    if(rainbow==true){ //will redraw with rainbow if true
    fill(random(0,255),random(0,255),random(0,255))
  stroke(random(0,255),random(0,255),random(0,255))
    }
    else{ //if false, draw black and white
      stroke(0)
      fill(255)
    }
    rect(10,10,10,20)
    pop()
  }
}

function drawShape() { //draws a square but fancier
  beginShape();
  //fill(random(0,255),random(0,255),random(0,255))
  //stroke(random(0,255),random(0,255),random(0,255))
    vertex(0,0);
    vertex(0, edge);
    vertex(edge,edge);
    vertex(edge, 0);
  endShape(CLOSE);
}
