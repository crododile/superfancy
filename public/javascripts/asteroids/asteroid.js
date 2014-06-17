(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function Asteroid(){
    Asteroids.MovingObject.apply(this, arguments);
	this.colors = colors = ['blue','purple','white','orange']
    this.color = colors[Math.floor(Math.random()*colors.length)];
	this.stroke = colors[Math.floor(Math.random()*colors.length)];
	this.deg = 0.45
  }


  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.prototype.randomAsteroid = function(dimX, dimY){
    var center = [Math.random()*dimX, Math.random()*dimY];
    var radius = (Math.random()*40 + 10);
    var vel = [(Math.random() - .5)*7.5,(Math.random() - .5 )*7.5];
    return new Asteroid(center, vel, radius)
  }
  
  Asteroid.prototype.draw = function(ctx){ 
      ctx.strokeStyle = this.color;
      ctx.beginPath();
	  
	  ctx.moveTo( this.pos[0] , this.pos[1] );
      this.deg *= 1.01
	  if (this.radius < 24 ){
	  for (var i = 0; i < 15; i++ ){
		   ctx.moveTo( this.pos[0] , this.pos[1] );
		   ctx.lineTo(this.pos[0] + Math.cos(this.deg*i)*this.radius,
		   this.pos[1] + Math.sin(this.deg*i)*this.radius )
		   ctx.arc(
			   this.pos[0] + Math.cos(this.deg*i)*this.radius,
			   this.pos[1] + Math.sin(this.deg*i)*this.radius,
			   4,
			   0,
			   2*Math.PI,
			   false 
		   )
		   	 ctx.stroke()

         }
	 } else {
   	  for (var i = 0; i < 15; i++ ){
		  ctx.fillStyle = this.color;
		  ctx.strokeStyle = 'blue';
		  
   		   ctx.moveTo( this.pos[0] , this.pos[1] );
   		   ctx.quadraticCurveTo(
		   this.pos[0] + Math.cos(this.deg*i*1.01)*this.radius,
		   this.pos[1] + Math.sin(this.deg*i*1.01)*this.radius,
		   this.pos[0] + Math.cos(this.deg*i)*this.radius,
   		   this.pos[1] + Math.sin(this.deg*i)*this.radius );
		   
   		   ctx.quadraticCurveTo(
		   this.pos[0] + Math.cos(this.deg*i/1.1)*this.radius,
		   this.pos[1] + Math.sin(this.deg*i/1.1)*this.radius,
		   this.pos[0] ,
   		   this.pos[1] );
   		   ctx.stroke();
   		   	 ctx.fill();
            }
	 }
  }

  Asteroid.prototype.multiply = function(){
    var asteroid = this;
    var vel = [(Math.random() - .5) * 5.5, (Math.random() - .5 ) * 5.5];
    var toProduce = Math.random() * 3 ;
    var array = [];
    var startPos = [asteroid.pos[0]+5, asteroid.pos[1]+7]

    for(var i =0 ; i < toProduce; i++ ){
      array.push(new Asteroid(startPos, vel, asteroid.radius - 4))
      }
	  
    return array
  }




})(this);
