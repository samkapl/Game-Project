

//create an empty array called balls

let mushrooms = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(155, 237, 149);

//	draw all the balls in that array
	for (let i = 0; i < mushrooms.length; i++) {
	    mushrooms[i].drawMushroom();
      mushrooms[i].moveMushroom();
	  }
}

function keyPressed(){

  let  m = new Mushroom(random(0,800), random(0,400),"red");
  mushrooms.push(m);
  print(mushrooms);
}

//ball class from which to create new balls with similar properties.
class Mushroom {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color = color
        this.dotx = random(this.x - 20, this.x + 20);
        this.doty = random(this.y - 10,this.y + 10)
	}

	drawMushroom(){  // draw a ball on the screen at x,y
    		noStroke();
        fill("tan");
        ellipse(this.x, this.y + 20, 20, 30);
        fill(this.color);
        ellipse(this.x,this.y,50,30);
        fill(255);
        ellipse(this.dotx,this.doty, 10, 10);
        ellipse(this.dotx-20, this.doty + 5, 10, 10)
        ellipse(this.dotx -15, this.doty + 10, 10,10)



	}

	moveMushroom(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+0.5;
		this.y = this.y;
    this.dotx = this.dotx + 0.5;
    this.doty = this.doty;
	}


}
