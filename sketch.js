
function setup() {
  createCanvas(400, 400);
  noLoop();

}

function draw() {
  colorMode(HSB,360,128,128,[100]);
  background(240,128,128,50);
  translate (width/2, height/4);
  noStroke();

  fill(60,128,128,100);
  rect (-170,0,100,100);
  //rect (-150,0,20,90);
  
  fill(60,128,64,100);
  rect (-50,0,100,100);
  
  fill(60,128,32,50);
  rect (70,0,100,100);

 
  fill(35,128,128,75);
  ellipse(0,100,220,70)
  fill(50,128,128,75);
  ellipse(0,150,70,220);
  
    
  

 
}
