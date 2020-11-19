//create a variable called b to hold one ball
let p;
let anotherPenguin;
let penguinAgain;

let w;
let anotherWalrus;
let walrusAgain;

function setup() {
  createCanvas(800, 400);

  p = new Penguin(50, 100,"orange",3);
  anotherPenguin = new Penguin(200,50,"pink",2);
  penguinAgain = new Penguin(350, 100, "turquoise", 0)

  w = new Walrus(100, 20, "green", 10);
  anotherWalrus = new Walrus(150, 200, "red", 20)
  walrusAgain = new Walrus(500, 50, "purple", 30)
  // construct the ball using the 'new' keyword
}


function draw(){
	background("white");
 //draw the ball called b (go look in the Ball class for the drawBall function)
 //move the ball called b (go look in the Ball class for the moveBall function)
p.drawPenguin();
penguinAgain.drawPenguin();
anotherPenguin.drawPenguin();
anotherPenguin.movePenguin();
w.drawWalrus();
walrusAgain.drawWalrus();
walrusAgain.moveWalrus();
anotherWalrus.drawWalrus();
}


//ball class from which to create new balls with similar properties.
class Penguin {

constructor(x,y,color,outline){
this.x = x;
this.y = y;
this.color = color;
this.outline = outline;
}
  // here is where you'll put the instructions for making balls
   drawPenguin(){
      	   strokeWeight(this.outline);
      	   fill(this.color);
           arc(this.x,this.y,50,50,0,155,CHORD);
           fill("white");
           ellipse(this.x - 10, this.y, 10,10);
           ellipse(this.x + 10, this.y, 10,10);
           fill(0);
           ellipse(this.x - 10,this.y,2,2);
           ellipse(this.x + 10,this.y,2,2);
           fill("yellow");
           ellipse(this.x, this.y + 10, 15,5);
  	}

   movePenguin(){
  	   this.x = this.x+0.3;
  	   this.y = this.y;
  	}

}

class Walrus {

constructor(x,y,color,tuskLength){
this.x = x;
this.y = y;
this.color = color;
this.tuskLength = tuskLength;
}
  // here is where you'll put the instructions for making balls
   drawWalrus(){
      	   strokeWeight(1);
      	   fill(this.color);
           ellipse(this.x,this.y,50,50);
           fill("white");
           ellipse(this.x - 10, this.y, 10,7);
           ellipse(this.x + 10, this.y, 10,7);
           fill("black");
           ellipse(this.x - 10, this.y, 5,2);
           ellipse(this.x + 10, this.y, 5,2);
           fill("white");
           ellipse(this.x - 5 , this.y + 25, 3,this.tuskLength);
           ellipse(this.x + 5 , this.y + 25, 3,this.tuskLength);
  	}

   moveWalrus(){
  	   this.x = this.x;
  	   this.y = this.y+random(0,0.5);
  	}

}
