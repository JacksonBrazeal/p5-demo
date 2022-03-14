let font

function preload() {
  font = loadFont('BebasNeue-Regular.ttf')
}

function setup() {
  createCanvas(765, 510, WEBGL);
  textFont(font)
  textSize(width/10)
  textAlign(CENTER, CENTER)
}

function draw() { //if MouseX < mouse Y, spin about X azis. Else, spin about Z axis
  if(mouseX < mouseY){
    if(mouseIsPressed){ //click and hold to freeze
      
    }
    else{
          rotateX((millis()/(mouseX*.01))/ mouseX)
    }
    //rotateX((millis()/(mouseX*.01))/ mouseX)
  }
  else if(mouseY < mouseX){
        if(mouseIsPressed){ //click and hold to freeze
      
    }
    else{
    rotateZ((millis()/(mouseY*.01))/ mouseY)
    }
  }
  background(mouseX/3,mouseY/2,(mouseX/3+mouseY/2)/2);
  fill(0)
  text('(' + mouseX + "," + mouseY + ")", mouseX-width/2, mouseY-height/2)

}
