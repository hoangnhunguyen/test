let angle;
let shapeSize;
let colorModeToggle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angle = 0;
  shapeSize = 50;
  colorModeToggle = true;
  noLoop();  // Draw once initially, but you can enable it if you want continuous interaction.
}

function draw() {
  background(255);
  
  for (let i = 0; i < width; i += shapeSize) {
    for (let j = 0; j < height; j += shapeSize) {
      push();
      translate(i + shapeSize / 2, j + shapeSize / 2);
      rotate(angle);
      
      // Random color and shape
      let c = color(random(255), random(255), random(255));
      fill(c);
      noStroke();
      
      if (random(1) > 0.5) {
        ellipse(0, 0, shapeSize, shapeSize);
      } else {
        rect(-shapeSize / 2, -shapeSize / 2, shapeSize, shapeSize);
      }
      
      pop();
    }
  }
}

function mousePressed() {
  // Change angle and shapeSize on mouse press
  angle = random(TWO_PI);
  shapeSize = random(30, 100);
  redraw();  // Redraw the pattern with updated parameters
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    // Toggle color mode on key 'c' press
    colorModeToggle = !colorModeToggle;
    if (colorModeToggle) {
      colorMode(RGB);
    } else {
      colorMode(HSB);
    }
    redraw();  // Redraw the pattern with updated color mode
  }
}
