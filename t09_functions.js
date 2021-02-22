/********************************************************/
//
/********************************************************/

var speedX = 3;
var speedY = 3;
var speedB = 3;
var speedD = 3;
var canvwidth = 400;
var canvheight = 400;
var r = 225;
var g = 225;
var b = 225;
var t = 0;
var ballC ={
	r:255,
	g:255,
	b:255
};



function setup() {
  createCanvas(canvwidth, canvheight);
	ball.x = random (0, 100);
	ball.y = random (100, 200);
	bball.x = random (10, 100);
	bball.y = random (200, 300);
}
function draw() {
  background(r, g, b, /*t*/);
	ballC.r = random (50, 250);
	ballC.g = random (50, 250);
	ballC.b = random (50, 250);
	fill(ballC.r, ballC.g, ballC.b);
	noStroke();
	aball();
	abball();

}
