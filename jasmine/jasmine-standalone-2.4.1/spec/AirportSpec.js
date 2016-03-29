describe("Airport", function(){
	var airport;
	var plane;
	
	beforeEach(function(){
		airport = new Airport();
		plane = new Plane();
	});

	it("has a default capacity", function(){
		expect(airport.capacity).toEqual(CAPACITY);
	});

	it("can be initialized with a different capacity", function(){
		airport = new Airport(20);
		expect(airport.capacity).toEqual(20);
	});
});