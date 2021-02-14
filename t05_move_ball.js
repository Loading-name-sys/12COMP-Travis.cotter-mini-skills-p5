/********************************************************/
//
/********************************************************/
var circleX = 50;
var circleY = 200;
var circleColour = (255, 255, 255, 50);
var circleradiusX = (1);
var circleradiusY = (1);

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
	stroke(circleColour);
	ellipse(circleX, circleY, circleradiusX, circleradiusY);
	
	circleX = circleX + 1;
	circleY = circleY - 1;
	circleradiusX = circleradiusX + 1;
	circleradiusY = circleradiusY + 1;
}