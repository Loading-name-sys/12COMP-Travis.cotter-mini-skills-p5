/********************************************************/
//t11_timer.js
/********************************************************/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}


 var sec = 0;
	function pad ( value ) { return value > 9 ? value : "0" + value; }
    setInterval( function(){
        $("#seconds").html(pad(++sec%60));
        $("#minutes").html(pad(parseInt(sec/60,10)));
	}, 1000);