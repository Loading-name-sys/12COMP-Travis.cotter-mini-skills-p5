/********************************************************/
//t04_mouse_X_and_Y.js
/********************************************************/
function setup() {
  createCanvas(800, 415);
}

function draw() {
	stroke(255, 17, 0, 50);
	line(mouseX, mouseY, mouseX, mouseY);
}