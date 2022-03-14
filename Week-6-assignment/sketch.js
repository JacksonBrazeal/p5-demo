let img;
function setup() {
  createCanvas(800, 500, WEBGL);
  sun = loadImage('sun.png');
  Earth = loadImage('earth.jpeg');
  moon = loadImage('moon.jpg');
  halo = loadImage('halo.jpg');
}

function draw() {
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100); //light on mouse
  
  push();
  translate(-(width / 2) - 650, (-height / 4) - 320, -1230);
  rotateY(frameCount * 0.01);
  texture(sun);
  sphere(270); //sun
  pop();

    push();
  translate(0, 0, -2279);
  texture(halo);
  box(5000, 3500, 70);
  pop(); //backdrop
  

  push();
  translate(0, 0, -150);
  rotateY(frameCount * -0.01);
  texture(Earth);
  sphere(140);
  pop(); //earth

  push();
  translate((width / 4)+ 20, -(height/2)+100, 0);
  rotateY(frameCount * 0.01);
   texture(moon);
  sphere(70); //moon
  pop();
}
