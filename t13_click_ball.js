/********************************************************/
//t13_click_ball.js
/********************************************************/
var ballArray = [];
var ball = {
	x: 0,
 	y: 100,
	dia: 50,
	speedX: 3,
	speedY: 3,
	r:255,
	g:255,
	b:255, 
	aball:function(){
	ball.x = ball.x + ball.speedX;
	ball.y = ball.y + ball.speedY;
	if (ball.x >= (bgs.canvwidth - ball.dia/2)){
		ball.speedX =ball.speedX * -1;
	}
	if (ball.x <= bgs.canvwidth - bgs.canvwidth + ball.dia/2){
		ball.speedX =ball.speedX * -1;
	}
	if (ball.y >= bgs.canvheight - ball.dia/2){
		ball.speedY = ball.speedY * -1;
	}
	if (ball.y <= bgs.canvheight - bgs.canvheight + ball.dia/2){
		ball.speedY = ball.speedY * -1;
	}
	ellipse(ball.x, ball.y, ball.dia);
 }
};

var bgs ={
	canvwidth: 400,
	canvheight: 400,
	r: 255,
	g: 225,
	b: 225,
	t: 0
}




function setup() {
  createCanvas(bgs.canvwidth, bgs.canvheight);
	ballArray[0] = ball;
	ballArray[0].ini;
	MouseEvent: {
	ball.mouseOver(aim);
	ball.mouseOut(miss);
	ball.mousePressed(fire);
	}
	time();
	ball.x = random (10, 390);
	ball.y = random (10, 390);
}
function draw() {
  background(bgs.r, bgs.g, bgs.b, /*bgs.t*/);

	fill(ballArray[0].r, ballArray[0].g, ballArray[0].b);
	noStroke();
	ballArray[0].aball();
}
function time(){
  setTimeout(function(){ alert("Hello"); }, 60000);
}
function aim(){
	ball.r = 225
	ball.g = 0
	ball.b = 0
}
function miss(){
	ball.r = 225
	ball.g = 225
	ball.b = 0
}
function fire(){
	ball.x = random (10, 390);
	ball.y = random (10, 390)
}