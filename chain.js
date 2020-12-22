class Chain
{
    constructor(body1,point2)
    {
        var options = {
            bodyA : polygon.body,
            pointB : point2,
            stiffness : .03,
            length : 10
      }
    this.Chain = Constraint.create(options);
    World.add(world,this.Chain);
    }
    display ()
    {
       if ( this.Chain.bodyA)
        { var firstPos = this.Chain.bodyA.position;
          var secondPos = this.Chain.pointB;

          line(firstPos.x,firstPos.y,secondPos.x,secondPos.y);
        }
    } 

    fly ()
    {
        this.Chain.bodyA = null;
    }
} 