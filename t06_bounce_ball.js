/********************************************************/
//
/********************************************************/
var x = 0;
var y = 200;
var speed = 3;
var ySpeed = 3

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse(x, y, 55, 55);
	if(x > width){
		console.log("d")
		speed = -3;
	}
	if (x == 0){
		console.log("a")
		speed = 3;
		}
  if(y > innerHeight){
		console.log("s")
		ySpeed = -3;
	}
	if (y < 0){
		console.log("w")
		ySpeed = 3;
	}
	x = x + speed;
	y = y + ySpeed;
	
	
}
