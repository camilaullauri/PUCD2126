var song, analyzer;

function preload() {
  song = loadSound('./audio/sound.mp3');
}

function setup() {

  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  var c = color(255, 204, 0)
  background(c);

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(127);
  stroke(3);

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, 20+rms*200, 20+rms*200);
}







