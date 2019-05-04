var pointCount = 100;
var factor = 2;
var canvasSize = 700;
var r = canvasSize / 2.5;
var col = 180;
var limit = 200;


var countSlider;
var facSlider;
var colSlider;

var pointOn = false;
var cdir = 1;
var factorOn = false;
var fdir = 1;
var increment = 1;

var colOn = false;
var rotOn = false;

var fR = 1;

var rot = 0;

function setup() {
	createCanvas(canvasSize, canvasSize);
	frameRate(fR);
	colorMode(HSB);

	createDiv('');
	createSpan('Frame Rate: ');
	createDiv('');
	createSpan(' --------');
	frSlider = createSlider(1, 60, 1);
	frRead = createSpan(fR);

	createDiv('Resolution:');
	countButton = createButton('Cycle');
	countButton.mousePressed(pointOnOff);
	countSlider = createSlider(1, limit, pointCount);
	countRead = createSpan(factor);

	createDiv('Factor:');
  factButton = createButton('Cycle');
  factButton.mousePressed(factOnOff);
	facSlider = createSlider(1, limit, factor, 0.1);
	factRead = createSpan(factor);


	createDiv(' Increment: ');
	createSpan(' --------');
	incSlider = createSlider(0.1, 1, increment, 0.9);
	incRead = createSpan(increment);

	createDiv('Colour:');
	colButton = createButton('Cycle');
	colButton.mousePressed(colOnOff);
	colSlider = createSlider(0, 360, 0);

	createDiv('Rotate:');
	rotButton = createButton('Cycle');
	rotButton.mousePressed(rotOnOff);
	rotSlider = createSlider(0, TWO_PI, 0, 0.1);

}

function draw() {
	background(0);

	frameRate(frSlider.value());

	countRead.html(round(countSlider.value()));
	factRead.html(nf(factor, 1, 1));
	incRead.html(increment);
	frRead.html(frSlider.value());

	pointCount = countSlider.value();
	factor = facSlider.value();
	increment = incSlider.value();
	col = colSlider.value();
	rot = rotSlider.value();

	for(let i = 0; i < pointCount; i++){
		push();
		translate(width/2, height/2);
		rotate(rot);
		var a = i * TWO_PI/pointCount;
		var ans = (i * factor) % pointCount;
		var b = ans * TWO_PI/pointCount;

		let x1 = r * cos(a);
		let y1 = r * sin(a);

		let x2 = r * cos(b);
		let y2 = r * sin(b);

		strokeWeight(1);
		stroke(col, 100, 100);
		noFill();
		ellipse(0, 0, r *2);
		line(x1, y1, x2, y2);
		pop();
	}

	if(pointOn == true){
	countSlider.value(pointCount += cdir);
	if(pointCount > limit){
	cdir = -1;
	}
	if(pointCount < 1){
	cdir = 1;
	}
}

if(factorOn == true){
facSlider.value(factor += increment * fdir);
if(factor > limit){
	facSlider.value(limit);
	fdir *= -1
}
if(factor < 1){
	fdir *= -1;
}
}

if(colOn == true){
colSlider.value(col += 1);
if(col > 360){
colSlider.value(0);
}
}

if(rotOn == true){
rotSlider.value(rot += 0.1);
if(rot > TWO_PI){
rotSlider.value(0);
}

}

}

function pointOnOff(){

	pointOn = !pointOn;
}

function factOnOff(){
	factorOn = !factorOn;
}

function colOnOff(){
	colOn = !colOn;
}
function rotOnOff(){
	rotOn = !rotOn;
}
