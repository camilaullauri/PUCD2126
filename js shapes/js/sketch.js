var sound;

function setup() {
  createCanvas( windowWidth, windowHeight );

}

function draw() {
  background("#47b6e0");  
}

function draw() {
  background( 0 );

}


var xspacing = 1;
var w;
var maxwaves = 4;

var theta = 0.0;
var amplitude = new Array(maxwaves);
var dx = new Array(maxwaves);         
var yvalues;                          

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(70);
  colorMode(RGB, 255, 255, 255, 100);
  w = width + 16;

  for (var i = 0; i < maxwaves; i++) {
    amplitude[i] = random(10,500);
    var period = random(100,500);
    dx[i] = (TWO_PI / period) * xspacing;
  }

  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(0,70,100);
  calcWave();
  renderWave();
}

function calcWave() {

  theta += 0.02;


  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = 0;
  }
 
  for (var j = 0; j < maxwaves; j++) {
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
      if (j % 2 == 0)  yvalues[i] += sin(x)*amplitude[j];
      else yvalues[i] += cos(x)*amplitude[j];
      x+=dx[j];
    }
  }
}

function renderWave() {

  noStroke();
  fill(60,0,80);
  ellipseMode(CENTER);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing,width/2+yvalues[x],16,16);
  }
}






