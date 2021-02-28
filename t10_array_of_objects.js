/********************************************************/
//t09_functions.js
/********************************************************/
var lmao = [];
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
	if (ball.x >= (bgs.canvwidth - ball.dia/2)){
		ball.speedX =ball.speedX * -1;
	}
	ellipse(ball.x, ball.y, ball.dia);
	if (ball.x <= bgs.canvwidth - bgs.canvwidth + ball.dia/2){
		ball.speedX =ball.speedX * -1;
	}
	if (ball.y >= bgs.canvheight - ball.dia/2){
		ball.speedY = ball.speedY * -1;
	}
	if (ball.y <= bgs.canvheight - bgs.canvheight + ball.dia/2){
		ball.speedY = ball.speedY * -1;
	}
	ball.x = ball.x + ball.speedX;
	ball.y = ball.y + ball.speedY;
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
	ball.x = random (10, 390);
	ball.y = random (10, 390);
	lmao[0] = ball;
	lmao[0].ini;
	sSlider = createSlider(0, 255, 100);
  sSlider.position(20, 20);
	bSlider = createSlider(0, 255, 100);
  bSlider.position(200, 20);
}
function draw() {
  background(bgs.r, bgs.g, bgs.b, /*bgs.t*/);
	lmao[0].r = random (50, 250);
	lmao[0].g = random (50, 250);
	lmao[0].b = random (50, 250);
	fill(lmao[0].r, lmao[0].g, lmao[0].b);
	noStroke();
	lmao[0].aball();

}
