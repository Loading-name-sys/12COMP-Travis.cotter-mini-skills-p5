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
	ball.dia = sSlider.value();
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
	time();
	ball.x = random (10, 390);
	ball.y = random (10, 390);
	ballArray[0] = ball;
	ballArray[0].ini;
}
function draw() {
  background(bgs.r, bgs.g, bgs.b, /*bgs.t*/);
	ballArray[0].r = random (50, 250);
	ballArray[0].g = random (50, 250);
	ballArray[0].b = random (50, 250);
	fill(ballArray[0].r, ballArray[0].g, ballArray[0].b);
	noStroke();
	ballArray[0].aball();
}
function time(){
  setTimeout(function(){ alert("Hello"); }, 60000);
}