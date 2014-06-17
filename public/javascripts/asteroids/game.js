(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function Game(ctx, width, height){
    this.canvas = ctx;
    this.ctx= ctx.getContext('2d');
    this.width = width;
    this.height = height;
    this.asteroids = [];
    this.ship = new Asteroids.Ship([width/2, height/2]);
    this.bullets = [];
    this.interval;

    this.fps = 20;
  }



  Game.prototype.addAsteroids = function(num) {
    for (var i = 0; i< num; i++){
      this.asteroids.push(Asteroids.Asteroid.prototype.randomAsteroid(this.width, this.height));
	  
    }
  }

  Game.prototype.checkCollisions = function() {
    var game = this;
    var until = game.asteroids.length
    for (var j = 0; j < until; j++){
      if (game.asteroids[j].isCollidedWith(game.ship)){
		
		game.asteroids= [];
		game.stop();

		
      }
      for(var i =0; i < game.bullets.length; i ++){
        if (game.asteroids[j].isCollidedWith(game.bullets[i])){
          game.bullets.splice(i,1);
          i++;
          var newstroids = game.asteroids[j].multiply();
          game.asteroids.splice(j,1);
          j++

          game.asteroids =  game.asteroids.concat(newstroids);

        }
      }
    }
  }




  Game.prototype.inFrame = function(mo){
    //tweak so the edge can trail off
    if(mo.pos[0] >this.width || mo.pos[0] < 0){
      return false
    } else if (mo.pos[1]>this.height || mo.pos[1] < 0){
      return false
    } else {return true}
  }

  Game.prototype.migrateOldstroids = function(){
    var game = this
    for(var i =0; i < game.asteroids.length; i ++){
      if (!game.inFrame(game.asteroids[i])){
        game.asteroids[i].pos[0]= (game.asteroids[i].pos[0] + game.width)  % game.width;
        game.asteroids[i].pos[1]= (game.asteroids[i].pos[1] + game.height)  % game.height;
      }
      if (!game.inFrame(game.ship)){
        game.ship.pos[0]= (game.ship.pos[0] + game.width)  % game.width;
        game.ship.pos[1]= (game.ship.pos[1] + game.height)  % game.height;
      }
    }
  }

  Game.prototype.fireBullet = function(){
    var ship = this.ship;
    this.bullets.push(ship.fireBullet());
  }

  Game.prototype.stop = function(){
    var game = this;
    clearInterval(game.interval)

    gam3 = new Asteroids.Game(canvas,600, 600)
    gam3.start(8);
  }


  Game.prototype.draw = function(){
    var context = this.ctx;
    var that = this;
    context.clearRect(0,0,this.width, this.height);

    this.asteroids.forEach(function(ast){
      ast.draw(context);
    });
     this.ship.draw(context);

     this.bullets.forEach(function(bullet){
       bullet.draw(context);
     });
  }

  Game.prototype.move = function(){
    this.asteroids.forEach(function(ast){
      ast.move();
    });

    this.ship.move();

    this.bullets.forEach(function(bullet){
      bullet.move();
    });

  }

  Game.prototype.step = function(){
    this.checkCollisions();
    if(key.isPressed("a")) this.ship.power([-1,0]);
    if(key.isPressed("w")) this.ship.power([0,-1]);
    if(key.isPressed("s")) this.ship.power([0,1]);
    if(key.isPressed("d")) this.ship.power([1,0]);
    if(key.isPressed("space")) this.fireBullet();
    this.move();
    this.draw();
    this.migrateOldstroids();
  }

  Game.prototype.start = function(numAsteroids){
    this.addAsteroids(numAsteroids);
    var game = this;
    this.interval = setInterval(function(){game.step()}, 90);
  }

})(this);
