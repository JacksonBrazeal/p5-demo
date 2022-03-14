//Remix done by Jackson Brazeal
let song1, song2;
let c;
let playToggle = false;
var cnv, soundFile, fft, peakDetect;
var ellipseWidth = 10;
var volhistory = [];
let system;
let volume = 1;
let songRate = 1;


function preload(){
  song1 = loadSound("blossom.mp3");  
}
function mousePressed() {
 userStartAudio();	
}
function setup() {
  getAudioContext().suspend();
  let cnv = createCanvas(400,400);
      song1.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(song1);
  //cnv.mouseClicked(togglePlay);
  amplitude = new p5.Amplitude();
  system = new ParticleSystem(createVector(width / 2, height/2));
  
        buttonBeatA = createButton('Increase Rate');
  buttonBeatA.position(155, 50);
  buttonBeatA.mousePressed(increaseRate);
  
      buttonBeatB = createButton('Decrease rate');
  buttonBeatB.position(5, 50);
  buttonBeatB.mousePressed(decreaseRate);


  buttonBeatC = createButton('Toggle Mute');
  buttonBeatC.position(305, 50);
  buttonBeatC.mousePressed(toggleMute);

}
function toggleMute() {
  volume++;
  volume = volume%2;
}

function increaseRate(){
  songRate = songRate + .1;
}

function decreaseRate(){
  songRate = songRate - .1;
}

function draw() {
  background(220);
  
  song1.rate(songRate);
  song1.setVolume(volume)
  
  
  //text('tap to play', 20, 20);
  
  // system.addParticle();
  // system.run();
  
  stroke(255,0,0);
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  //print(size)
  if(size <=20){
    c = color(random(0,40), random(0,40), random(0,40));
  }
  else if(size <= 35 && size > 20){
    c = color(random(40,150), random(40,150),random(40,150));
  }
  else{
    c = color(random(150,200), random(150,200), random(150,200));
  }
  
  fill(c);
  rect(0,0,400,400);
  
    system.addParticle();
  system.run();
  
  //https://www.youtube.com/watch?v=jEwAMgcCgOA
  //  used this as reference
  //  removed some things and changed a couple values
  var vol = amplitude.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  push();
  var currentY = map(vol, 0, 0.5, height, 0);
  translate(0, height / 2 - currentY);
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height, 0);
    stroke(0,0,0)
    vertex(i, y);
  }
  endShape();
  pop();
  if (volhistory.length > width) {  //origionally had -50 after width
    volhistory.splice(0, 1);
  }

  stroke(255, 0, 0);
  //line(volhistory.length, 0, volhistory.length, height);
  
    text('Current Song Rate:', 125, 100);
  text(songRate, 235, 100);
  
}

// function togglePlay() {
//   if (song1.isPlaying() ){
//     song1.pause();
//   } else {
//     song1.loop();
// 		amplitude = new p5.Amplitude();
// 		amplitude.setInput(song1);
//   }
// }

//https://p5js.org/examples/simulate-particle-system.html
//  used this as reference and then changed it so that it doesn't just go down
//  also expriemented with colors but ended up scratching that
//    didn't want to flashbang someones eyes
// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(0, random(-1.25,1.25));
  this.velocity = createVector(random(-15, 15), random(15, -15));
  this.position = position.copy();
  this.lifespan = 100;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

