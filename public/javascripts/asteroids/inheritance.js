
Function.prototype.inherits = function(class){

  function Surrogate(){};

  Surrogate.prototype = class.prototype;
  this.prototype = new Surrogate();
}