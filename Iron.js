class Iron{
	constructor(x,y)
	{var options = {
		restitution:0.8,
		friction:3,
		density:30,
	}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y,30,40, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
         rect(0,0,30,40)
			pop()
	}

}

