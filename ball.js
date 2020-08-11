var ball;
class Ball{
    constructor(x, y, width, radius) 
    {
        var ball_options = 
        {
          isStatic = false,
          restitution : 1.0,
          density : 1.0
        }
        
        ball = Bodies.circle(x,y,radius,ball_options)
        this.image = loadImage("image/paper.png");
      }
      display()
      {

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

        ellipseMode(RADIUS)
        ellipse(200,200,20,20)
      }
}
 