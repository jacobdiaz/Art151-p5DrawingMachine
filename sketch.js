// creating 2 points that move accross the the screen using 'perlin' random number,
// and create a line between both the random points
// the speed in which 'randomness' is drawn is based on x values

var xOffset = 0;
var xOffset2 = 1000; // getting y value from far away in the graph

var xOffset3 = 30;
var xOffset4 = 2000; // getting y value from far away in the graph

let currentColor = 0;
let colorPallete = ["#348AA7", "#2CB1DE", "#08B9F4", "#FFFFFF"]; // Olive, Bluish, Grey, Pale
function setup() {
  createCanvas(800, 800);
  background(225);
}

function draw() {
  isInsideArray();

  let x1 = map(noise(xOffset), 0, 1, 0, width); // Perlin Noise returns values from 0 - 1, X sets spot on x axis
  let y1 = map(noise(xOffset2), 0, 1, 0, height);
  let x2 = map(noise(xOffset3), 0, 1, 0, width);
  let y2 = map(noise(xOffset4), 0, 1, 0, height);
  let velocity = mouseX / 45000; // velocity must be small bc perlin values move

  if (mouseIsPressed == true) {
    if (currentColor == 4 || currentColor > 4) {
      currentColor == 1;
    }
    xOffset += velocity;
    xOffset2 += velocity;

    xOffset3 += velocity;
    xOffset4 += velocity;

    stroke(colorPallete[currentColor]);
    strokeWeight(0.25);
    line(x1, y1, x2, y2);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    currentColor--;
  } else if (keyCode === RIGHT_ARROW) {
    currentColor++;
    console.log("Current Color" + currentColor);
  }
}

function isInsideArray() {
  if (currentColor >= 4 || currentColor <= -1) {
    currentColor = 0;
    console.log("Current Color now " + currentColor);
  } else return;
}
