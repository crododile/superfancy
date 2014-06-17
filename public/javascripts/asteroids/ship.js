(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function Ship( pos ){
    Asteroids.MovingObject.apply(this, arguments);
    this.radius = 10;
    this.color = 'red';
    this.vel = [0,0]
  }


  Ship.inherits(Asteroids.MovingObject);


  Ship.prototype.power = function(impulse){
     this.vel[0] += impulse[0];
     this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function() {
    var ship = this;
    var bVelx = ship.vel[0]*5;
    var bVely = ship.vel[1]*5;
    var bVel = [bVelx,bVely];
    var bx = ship.pos[0];
    var by = ship.pos[1];
    var bstart = [bx,by]
    var bullet = new Asteroids.Bullet(bstart,bVel);
    return bullet;

  }



})(this);