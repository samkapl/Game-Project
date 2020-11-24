let gusts = [];
let cars = [];
let saws = [];
//create a variable to hold your avatar
let me;

let carSound;
let sawSound;
let windSound;

function preload() {
  soundFormats('wav', 'mp3');
  carSound = loadSound('336759__luminadii__car-drive-by-04.wav');
  sawSound = loadSound('418042__inspectorj__chainsaw-moderately-distant-a.wav');
  windSound = loadSound('459977__florianreichelt__soft-wind.mp3')
}

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Girl(100, 100, 3);

rectMode(CENTER);
}

function draw(){
	background(220);

  me.drawHer();
  me.moveHer();

  if (frameCount % 100 == 0) {
      let  g = new Gust(width, random(0,height), -3);
      gusts.push(g);
      console.log(gusts);
    }

	for (let i = 0; i < gusts.length; i++) {
	 	      gusts[i].drawGust();
       	  gusts[i].moveGust();
        	gusts[i].bounceGust();
	  }

    if (frameCount % 500 == 0) {
        let  c = new Car(width, random(0,height), -3);
        cars.push(c);
        console.log(cars);
      }

    for (let i = 0; i < cars.length; i++) {
            cars[i].drawCar();
            cars[i].moveCar();
            cars[i].bounceCar();
      }
      if (frameCount % 500 == 0) {
          let  s = new Saw(width, random(0,height), -3);
          saws.push(s);
          console.log(saws);
        }

      for (let i = 0; i < cars.length; i++) {
              saws[i].drawSaw();
              saws[i].moveSaw();
              saws[i].bounceSaw();
        }

}

//avatar class
class Girl {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

drawHer(){  // draw the running person
  noFill();
stroke(0);
arc(this.x,this.y,30,40, 176.1, 110.1, OPEN);
line(this.x - 5, this.y + 20, this.x-5, this.y+25);// neck
line(this.x + 5, this.y + 20, this.x+5, this.y+25);
beginShape(); // shoulders left
curveVertex(this.x,this.y + 70);
curveVertex(this.x, this.y + 70);
curveVertex(this.x-30, this.y + 60);
curveVertex(this.x -25, this.y +30);
curveVertex(this.x-5, this.y+25);
curveVertex(this.x-5, this.y+25);
endShape();
beginShape(); // shoulders right
curveVertex(this.x,this.y + 70);
curveVertex(this.x, this.y + 70);
curveVertex(this.x+30, this.y + 60);
curveVertex(this.x +25, this.y +30);
curveVertex(this.x+5, this.y+25);
curveVertex(this.x+5, this.y+25);
endShape();
beginShape(); // dress left
curveVertex(this.x -30,this.y +150);
curveVertex(this.x -30,this.y +150);
curveVertex(this.x -20,this.y +75);
curveVertex(this.x -10,this.y +60);
curveVertex(this.x -15,this.y +50);
curveVertex(this.x -15,this.y +50);
endShape();
beginShape(); // dress right
curveVertex(this.x +30,this.y +150);
curveVertex(this.x + 30,this.y +150);
curveVertex(this.x +20,this.y +75);
curveVertex(this.x +10,this.y +60);
curveVertex(this.x +15,this.y +50);
curveVertex(this.x +15,this.y +50);
endShape();
stroke(148, 10, 36);
beginShape(); // hat
curveVertex(this.x +15,this.y -5);
curveVertex(this.x +15,this.y -5);
curveVertex(this.x +40,this.y + 5);
curveVertex(this.x,this.y);
curveVertex(this.x - 20, this.y -5);
curveVertex(this.x - 30,this.y -15);
curveVertex(this.x +15,this.y -5);
curveVertex(this.x +15,this.y -5);
endShape();
arc(this.x,this.y,40,40, 204.9, -0.2, OPEN);
}

	moveHer(){
    if (keyIsDown(UP_ARROW)) {
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
}
if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move up by speed
   this.x -= this.speed;
}

if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
    this.x += this.speed;
}}}

 class Gust {

	constructor(x,y, speed){
		this.x = x;
		this.y = y;
  	this.speed = speed;
	}

	drawGust(){
		stroke(220);
  	strokeWeight(1);
		fill(240);
		ellipse(this.x,this.y,10,10);
    ellipse(this.x + 5, this.y, 10, 10)
	}

	moveGust(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

  	bounceGust(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            windSound.setVolume(0.1);
            windSound.play();
    		}
  	}

}

class Car {

	constructor(x,y, speed){
		this.x = x;
		this.y = y;
  	this.speed = speed;
	}

	drawCar(){
    stroke(0);
		fill("red");
		rect(this.x,this.y,40,10);
    rect(this.x,this.y - 7, 10, 5)
    fill(0);
    ellipse(this.x - 10, this.y + 10, 10, 10)
    ellipse(this.x + 10, this.y + 10, 10, 10)
	}

	moveCar(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

  	bounceCar(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            carSound.setVolume(0.1);
            carSound.play();
    		}
  	}

}
class Saw {

	constructor(x,y, speed){
		this.x = x;
		this.y = y;
  	this.speed = speed;
	}

	drawSaw(){
textSize(15);
fill("gray");
    text(")))", this.x -25, this.y);
	}

	moveSaw(){
		this.x = this.x+ this.speed;
		this.y = this.y+0.5;
	}

  	bounceSaw(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            sawSound.setVolume(0.1);
            sawSound.play();
    		}}}
