var balls = [];
var d=1;
var g;
var r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {

  smooth();

  //text
  textSize(12);
  fill(255);
  textFont('Georgia');
  text('click/move/longpress your mouse to see changes',width/2,height-20);

  //myball
  var myBall = new Ball(mouseX,mouseY,2);
  myBall.speed = random(3);
  myBall.move();
  myBall.color = color(255,g,r);
  myBall.strocolor = color(255,g,255);
  myBall.stro=d;
  balls.push(myBall);

  background(0,100);

  for(var j = 0; j< balls.length;j++){
  balls[j].move();
  balls[j].display();
  balls[j].diameter += random(-2,2);
  balls[j].color = color(r,g,255,50);
  balls[j].strocolor = color(255,g,255,50);
  }
}


function Ball(_x, _y, _diameter) {

  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = ('red');
  this.speed = 4;
  this.stro = 10;


  var yDir = 1;
  var xDir = 1;

  this.display = function() {
    stroke(this.strocolor);
    fill(this.color);
    strokeWeight(this.stro);
    ellipse(this.x, this.y, this.diameter);
  }

  this.move = function() {
    this.y += this.speed * yDir;
    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
  }

}

function mousePressed() {
  if(d>10){d=1;}else{d = d + 1;}
  g = random(100);
  r=random(200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
