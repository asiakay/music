
// "instance mode" 
const s = ( p ) => {

 p.setup = function() {
  let myCanvas = p.createCanvas(p.windowWidth, p.windowHeight);
  myCanvas.parent('myContainer');
};

p.draw = function() {
  if (p.mouseIsPressed) {
    p.fill(0);
  } else {
    p.fill(255);
  };
  p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };


p.windowResized = function(){
  p.resizeCanvas(p.windowWidth, p.windowHeight);
}
}
let myp5 = new p5(s, 'myContainer'); 


// Q: How do we instanciate when parameters are in place?

/* 
const w = ( z ) => {

z.setup = function() {
  let thisCanvas = z.createCanvas(710, 400);
  thisCanvas.parent('myContainer');
  z.background(102);
}

z.draw = function() {
  // Call the variableEllipse() method and send it the
  // parameters for the current mouse position
  // and the previous mouse position
  z.variableEllipse(z.mouseX, z.mouseY, z.pmouseX, z.pmouseY);
}

// The simple method variableEllipse() was created specifically
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly

let thatMouse = z.variableEllipse(x, y, px, py);
thatMouse = function(){
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
  }
}
let myp5 = new p5(w, 'myContainer'); 
 */