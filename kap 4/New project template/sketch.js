function setup() {
  createCanvas(400, 400); 
  fill(20,200,20)
}

function draw() {
  background(204,0,0);
  if (mouseX < 200){
   ellipse(200,200,50,50);
  }
   if (mouseX >= 200){
    rect(150,170,100,50);
  }
  
  
   }
  