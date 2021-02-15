/********************************************************/
//
/********************************************************/
var x = 0;
var y = 100;
var dia = 100;
var speedX = 3;
var speedY = 3;
var canvwidth = 400;
var canvheight = 400;

function setup() {
  createCanvas(canvwidth, canvheight);
}
function draw() {
  background(220);
	ellipse(x, y, dia);
	if (x >= (canvwidth - dia/2)){
		speedX = -3;
	}
	if (x <= canvwidth - canvwidth + dia/2){
		speedX = 3;
	}
	if (y >= canvheight - dia/2){
		speedY = -3;
	}
	if (y <= canvheight - canvheight + dia/2){
		speedY = 3;
	}
	x = x + speedX;
	y = y + speedY;
}
