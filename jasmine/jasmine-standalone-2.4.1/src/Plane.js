
function Plane(){
  this.flying = false;
};

Plane.prototype.takeOff = function(){
	if(this.flying){
		throw new Error("This plane is already in the air");
	};
	this.flying = true;
};

Plane.prototype.land = function(){
	if(!this.flying){
		throw new Error("This plane is already on the ground");
	};
	this.flying = false;
};