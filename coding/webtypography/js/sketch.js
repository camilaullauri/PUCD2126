// var sound;

// /*
// 	this is new, it's a p5js function
// 	what happens is before setup runs
// 	it can load assets so they are fully laoded when draw happens

// 	this is needed when loading really large files
// */
// function preload() {
// 	sound = loadSound('./audio/sound.mp3');
// 	//loadsound 
// 	//preload makes sure everything is available before it shows
// }

// function setup() {
// 	createCanvas( windowWidth, windowHeight );

// 	// don't even draw :)
// 	noLoop();
// }

// function draw() {
// 	// nothing lol
// }

// // when mouse is pressed
// function mousePressed() {
// 	// are you playing?
// 	//isplaying is a function that knows whether sound is playing
//   	if ( sound.isPlaying() ) {
//     	sound.stop(); // than stop playing
//     	background(255,0,0);
//   	} else {
//     	sound.play(); // otherwise play
//     	background(0,255,0);
//   	}

// }


// var song;
// var amp;

// function preload() {
// 	song = loadSound("chantaje.mp3")
// }

// function setup() {
// 	createCanvas ( windowWidth, windowHeight );
// 	song.play();
// 	amp = new p5.Amplitude();
// }

// function draw () {
// 	background(0);
// }

var song;
var amp;
var image
var volhistory = [];

var sOne = 0;
var scalerOne = .5;
var sTwo = 0;
var scalerTwo = -.2;
var sThree = 0;
var scalerThree = -1;
var sFour = 0;
var scalerFour = -.2;

analyzer = new p5.Amplitude();
analyzer.setInput(song);

var xOne;
var xTwo;

var speed = 300;

var time;


function windowResized() {
  resizeCanvas( windowWidth, windowHeight );
}

function preload() {
  song = loadSound('./audio/sound.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  time = millis();
  song.play();
  amp = new p5.Amplitude();

  rectMode( CENTER );

  
  // song.loop();
}

function draw() {



  background(0);
  var vol = amp.getLevel();
  volhistory.push(vol);


  stroke(255);
  noFill();
  var currentY = map(vol, 0, 1, height, 0);

  if( millis() - time >28000 ) {
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
	var y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y - windowHeight/2);
	}

  endShape();
  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }
}

  stroke(255, 0, 0);
  noFill();
  var currentY = map(vol, 0, 1, height, 0);
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
	var y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y - windowHeight/2 + 35);
	}

  endShape();
  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }


  noStroke();
  push();
    translate( -10, 10 );
    scale( sOne );
    fill(255);
    triangle(-10,50,-5,5,-42,44);

  pop();

  push();
    translate( windowWidth-100, 10 );
    scale( sTwo );
    fill(255,0,0);
    // stroke(18, 36, 60);
    triangle(2, -2, 8, -1, 13, -10);
    
  pop();

  push();
    translate( windowWidth-100, 0 );
    scale( sThree );
    fill(255);
    // stroke(18, 36, 60);
    triangle(2, -2, 8, -1, 13, -10);
    
  pop();
  if( millis() - time >2000 ) {
    sOne += scalerOne; }

  if( millis() - time >4500 ) {
    sTwo += scalerTwo; }

  if( millis() - time >100 ) {
    sThree += scalerThree;
  }

  if( millis() - time >4500 ) {
    sFour += scalerFour; }

push();
  var vol = amp.getLevel();
  noStroke();
  from = color(255, 255, 255);
  to = color(0, 0, 0);
  c1 = lerpColor(from, to, .33);
  c2 = lerpColor(from, to, .66);
  fill(255);
  ellipse(windowWidth/2, windowHeight/2, map(vol, 0 , 1, 0, 300), map(vol, 0, 1, 0, 300));
  pop();

if( millis() - time >30000 ) {
push();
  var vol = amp.getLevel();
  stroke(255,0,0);
  noFill();
  ellipse(windowWidth/2, windowHeight/2, map(vol, 0 , 1, 0, 600), map(vol, 0, 1, 0, 600));
  pop();
}
  
  }
  

  // var vol = amp.getLevel();
  // var diam = map(vol, 0, 0.3, 10, 200);
  // fill(255, 255, 255);
  // noStroke ();
  // ellipse(width/2, height/2, diam, diam);

function mousePressed() {
    if ( song.isPlaying() ) {
      song.stop();
    } else {
      song.play();
    }
}





