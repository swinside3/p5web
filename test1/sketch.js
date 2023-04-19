var d=0;

let fsButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fsButton = createButton('전체 화면');
  fsButton.position(50, 50);
  fsButton.mousePressed(goFullscreen);
}

function goFullscreen() {
  let fs = fullscreen();
  fullscreen(!fs);
  if (!fs) {
    resizeCanvas(windowWidth, windowHeight);
    fsButton.html('되돌아가기');
  }
  else {
    fsButton.html('전체화면');   
  }
}

function windowResized() {
  print(windowWidth, windowHeight)
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(220);
  flower(width/2,height/2,8);
}
function flower(x,y,petals) {
  for(var i=0;i<petals;i++) {
    ellipse(x+30*cos(radians(i*360/petals)),y+30*sin(radians(i*360/petals)),30,30)
  }
  ellipse(x,y,60,60);
  rotateEllipse(300,300,20,100,d,CENTER);
  rotateEllipse(400,200,10,50,d*2+20,CORNER);

  d=d+1;
}

function rotateEllipse(x,y,w,h,d,S) {
  push();
    rectMode(S);
    translate(x,y);
    rotate(radians(d));
    rect(0,0,w,h);
  pop();
}