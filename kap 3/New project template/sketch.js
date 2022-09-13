function setup() {
  createCanvas(400, 400);
  noStroke();
  fill (200,200,10);
  background(220,30,30);
}

function draw() {
  if(mouseIsPressed == true){
    if(mouseButton == LEFT ){
      ellipse(mouseX, mouseY, 33, 33)
    }
    else if (mouseButton ==RIGHT){
      rect (mouseX, mouseY, 60,33)
    }
  }
}


