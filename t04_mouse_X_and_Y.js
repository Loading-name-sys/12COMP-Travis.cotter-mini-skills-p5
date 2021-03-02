/********************************************************/
//t04_mouse_X_and_Y.js
/********************************************************/
function setup() {
  createCanvas(800, 415);
}

function draw() {
	stroke(225, 225, 225);
	line(mouseX, mouseY, mouseX, mouseY);
}