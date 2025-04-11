function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noStroke();
  fill(255, 100, 150, 20);
  ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
