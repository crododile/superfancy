(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroids.MovingObject =  function MovingObject(pos, vel, radius, color) {
      this.pos = pos;
      this.vel = vel;
      this.radius = radius;
      this.color = color;
    }

    MovingObject.prototype.move = function(){
      var that = this
      [0,1].forEach(function(i){
        that.pos[i] += that.vel[i];
      })
    }

    MovingObject.prototype.draw = function(ctx){
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2*Math.PI,
        false
      );

      ctx.fill();
    };

    MovingObject.prototype.isCollidedWith = function(otherObject){
      var operandX = Math.pow((this.pos[0] - otherObject.pos[0]), 2);
      var operandY = Math.pow((this.pos[1] - otherObject.pos[1]), 2);
      var distance = Math.sqrt(operandX + operandY)
      if (distance <= (this.radius + otherObject.radius)){
        return true;
      }
      return false;
    }





})(this);