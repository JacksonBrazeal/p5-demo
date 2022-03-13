//Jackson Brazeal
function setup() {
  createCanvas(1100, 1000);
  i = 0;
}

function draw() {
  background(142, 218, 237);
  fill(68, 203, 80);

  stroke(68, 203, 80);
  circle(550, 1500, 1600);

  fill(72, 153, 24);
  rect(525, 445, 50, 300);

  fill(240, 234, 65);
  stroke(240, 234, 65);
  circle(550, 445, 170);

  fill(143, 101, 201);
  stroke(143, 101, 201);
  ellipse(550, 325, 60, 120);

  ellipse(670, 445, 120, 60);

  ellipse(550, 565, 60, 120);

  ellipse(430, 445, 120, 60);

  rotate(45);
  ellipse(680, -120, 60, 120);

  ellipse(650, -350, 60, 120);

  rotate(-90);
  ellipse(-70, 580, 60, 120);

  ellipse(-110, 830, 60, 120);

  rotate(45);
  stroke(255, 255, 255, 255);
  let a = 0.0;
  let inc = TWO_PI / 25.0;
  for (let i = 0; i < 100; i++) {
    line(i * 10, 150, i * 10, 150 + sin(a) * 70.0);
    a = a + inc;
  }
}
