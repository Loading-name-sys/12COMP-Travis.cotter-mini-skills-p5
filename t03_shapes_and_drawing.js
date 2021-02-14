/********************************************************/
//
/********************************************************/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //canvas colour
	background(79, 81, 82);
  
	//rectangle 
	fill(255, 204, 0);
  rect(200, 20, 55, 200);
  
	//lines
	line(0, 0, 400, 400);
  
	//rectangle
	fill(0, 0, 0);
	rect(60, 200, 200, 55);
	
	//rectangle
	fill(255, 17, 0, 25);
	rect(30, 20, 100, 140);

	//ellipse
	fill(100, 100, 100)
	ellipse(120, 100, 55, 100)
}