const CAPACITY = 10;
function Airport(capacity=CAPACITY) {
	this.capacity = capacity;
	this.dock = [];
};

Airport.prototype.requestLanding = function(plane){
  if(this.dock.length===this.capacity){
  	throw new Error("Airport at capacity");
  };
  plane.land();
	this.dock.push(plane);
};

Airport.prototype.requestTakeOff = function(plane){
	if(!this.dock.includes(plane)){
		throw new Error("This plane is not at this airport");
	};
	plane.takeOff();
	index = this.dock.indexOf(plane);
	if( index >=0 ){
		this.dock.splice(index,1);
	};
};