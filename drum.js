let sound1; 
let sound2;
let sound3;
let sound4;

let topLeft, topRight, bottomLeft, bottomRight;

function preload(){
  //Load the sound file
  soundFormats('mp3');
  sound1 = loadSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
  sound2 = loadSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3');
  sound3 = loadSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3');
  sound4 = loadSound('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
}

function setup(){
  createCanvas(400, 400);
  topLeft = new Button (75, 75, color(0, 0, 255), sound1);
  topRight = new Button (225, 75, color(0, 255, 0), sound2);
  bottomLeft = new Button(75, 225, color,(225, 255, 0), sound3);
  bottomRight = new Button(250, 250,color(0, 255, 255), sound4);
}

function draw(){
  fill(0);
  rect(0, 0, width, height);

  // top-left button
  // properties 
  // "x=75, y=75, w=100, h=100"
  // fill(255, 0, 0)
  // sound1
// behaviors "display()" & "playSound()" 

  // top-right button
// properties 
// "x=225, y=75, w=100, h=100"
// fill(255, 0, 0)
// sound2
// behaviors "display()" & "playSound()" 
// buttons
topLeft.display();
topRight.display();
bottomLeft.display();
bottomRight.display();

topLeft.jiggle();
}


function mousePressed(){
  //top-left button "
topRight.playSound();
topLeft.playSound();
bottomLeft.playSound();
bottomRight.playSound();
}