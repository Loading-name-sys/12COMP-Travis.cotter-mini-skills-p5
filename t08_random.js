/********************************************************/
//
/********************************************************/
var ball = {
	x: 0,
 	y: 100,
	dia: 50
};
var bball = {
	x: 10,
 	y: 200,
	dia: 50
};
var speedX = 3;
var speedY = 3;
var speedB = 3;
var speedD = 3;
var canvwidth = 400;
var canvheight = 400;
var r = 225;
var g = 225;
var b = 225;
var ballC ={
	r:255,
	g:255,
	b:255
};


function setup() {
  createCanvas(canvwidth, canvheight);
	ball.x = random (0, 90);
	ball.y = random (100, 200);
	bball.x = random (10, 100);
	bball.y = random (200, 300)
}
function draw() {
  background(r, g, b);
	ballC.r = random (50, 250);
	ballC.g = random (50, 250);
	ballC.b = random (50, 250);
	fill(ballC.r, ballC.g, ballC.b);
	noStroke();
	ellipse(ball.x, ball.y, ball.dia);
	if (ball.x >= (canvwidth - ball.dia/2)){
		speedX = -3;
	}
	if (ball.x <= canvwidth - canvwidth + ball.dia/2){
		speedX = 3;
	}
	if (ball.y >= canvheight - ball.dia/2){
		speedY = -3;
	}
	if (ball.y <= canvheight - canvheight + ball.dia/2){
		speedY = 3;
	}
	ellipse(bball.x, bball.y, bball.dia)
	if (bball.x >= (canvwidth - bball.dia/2)){
		speedB = -3
	}
	if (bball.x <= canvwidth - canvwidth + bball.dia/2){
		speedB = 3;
	}
	if (bball.y >= canvheight - bball.dia){
		speedD = -3;
	}
	if (bball.y <= canvheight - canvheight + bball.dia/2){
		speedD = 3;
	}
	ball.x = ball.x + speedX;
	ball.y = ball.y + speedY;
	bball.x = bball.x + speedB;
	bball.y = bball.y + speedD;
}
