/********************************************************/
//t12_mouse_events.js
/********************************************************/
var bgc;
function setup() {
	let canvs = createCanvas(400, 400);
	canvs.mouseOver(bgcolOver);
	canvs.mouseOut(bgcolOut);
	canvs.mousePressed(mPress)
	bgc = color("orange");
}

function draw() {
	background(bgc);
}

function bgcolOver(){
	bgc = color("red");
}

function bgcolOut(){
	bgc = color("yellow");
}

function mPress(){
	bgc = color("green");
}