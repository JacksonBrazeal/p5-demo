//Jackson Brazeal
let song1;
let playToggle = false;
let songRate = 0;
let forwardBackward = -1;
function preload() {
  song1 = loadSound("Famous.mp3")
  
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.mousePressed(canvasPressed); //click canvas to start song.
  //song1.loop();
  
    let button = createButton("Flip Song negative"); //flips between playing fowards/backwards
  //note: you Must click the canvas and restart the song to get it to work!
  button.mousePressed(function() {
  forwardBackward = forwardBackward *-1
  });
  
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  text('Current Song Rate:', width/2, height/2);
  text(songRate, width/2, height/2 +20);
  
  songRate = width/400 - 1*(width/mouseX); //calculate song rate based on MouseX
    songRate = songRate * forwardBackward 
  
  song1.rate(songRate);
  song1.setVolume(0.1)
}

  
function canvasPressed() { //click to toggle the song being on/ off;
  if(!playToggle){ 
  song1.play()
  }
  else {
    song1.stop();
  }
  playToggle = !playToggle;
}
