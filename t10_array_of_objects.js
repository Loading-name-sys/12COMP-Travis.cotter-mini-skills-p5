/********************************************************/
//t10_array_of_objects.js
/********************************************************/
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
var bball = {
	x: 10,
 	y: 200,
	dia: 50,
	speedB: 3,
	speedD: 3,
	
	abball: function(){
	if (bball.x >= (bgs.canvwidth - bball.dia/2)){
		bball.speedB = -3
	}
	ellipse(bball.x, bball.y, bball.dia)
	if (bball.x <= bgs.canvwidth - bgs.canvwidth + bball.dia/2){
		bball.speedB = 3;
	}
	if (bball.y >= bgs.canvheight - bball.dia/2){
		bball.speedD = -3;
	}
	if (bball.y <= bgs.canvheight - bgs.canvheight + bball.dia/2){
		bball.speedD = 3;
	}
	bball.x = bball.x + bball.speedB;
	bball.y = bball.y + bball.speedD;
 }

};
var ballC ={
	r:255,
	g:255,
	b:255
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
	bball.x = random (10, 390);
	bball.y = random (10, 390);

	sSlider = createSlider(0, 255, 100);
  sSlider.position(20, 20);
}
function draw() {
  background(bgs.r, bgs.g, bgs.b, /*t*/);
	ball.r = random (50, 250);
	ball.g = random (50, 250);
	ball.b = random (50, 250);
	fill(ball.r, ball.g, ball.b);
	noStroke();
	ball.aball();
	bball.abball();

}
